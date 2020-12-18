import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import User from "../../models/User";

class LoginController {
  index = async (req: Request, res: Response): Promise<unknown> => {
    try {
      const responseWithError = () =>
        res.status(400).json({ error: "Email or password incorrect" });

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log(req.body);
        return responseWithError();
      }

      const registeredUser = await User.findOne({ email: req.body.email });
      if (!registeredUser) {
        return responseWithError();
      }

      const passIsValid = await bcrypt.compare(
        req.body.password,
        registeredUser.password
      );
      if (!passIsValid) {
        return responseWithError();
      }

      const token = jwt.sign({ _id: registeredUser._id }, `${process.env.TOKEN_SECRET}`, {
        expiresIn: "1h",
      });

      const { firstName, lastName, _id } = registeredUser;

      res.status(200).header("Token", token).send({ firstName, lastName, _id });
    } catch (error) {
      res.status(500).send("Server error");
    }
  };

  withToken = async (req: Request, res: Response): Promise<unknown> => {
    const authToken = req.header("Token");
    if (authToken) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const decodedToken: any = jwt.verify(authToken, `${process.env.TOKEN_SECRET}`);
        const registeredUser = await User.findOne({ _id: decodedToken._id });
        if (!registeredUser) {
          return res.status(401).json({ error: "Not authorized" });
        }

        const { firstName, lastName, _id } = registeredUser;
        return res.status(200).send({ firstName, lastName, _id });
      } catch (err) {
        return res.status(401).json({ error: "Not authorized" });
      }
    }
  };
}

export default new LoginController();
