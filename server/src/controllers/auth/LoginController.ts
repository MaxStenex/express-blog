import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import User from "../../models/User";

export default class LoginController {
  index = async (req: Request, res: Response): Promise<unknown> => {
    const responseWithError = () =>
      res.status(400).json({ error: "Email or password incorrect" });

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return responseWithError();
    }

    const registeredUser = await User.findOne({ email: req.body.email });
    if (!registeredUser) {
      return responseWithError();
    }

    const passIsValid = await bcrypt.compare(req.body.password, registeredUser.password);
    if (!passIsValid) {
      return responseWithError();
    }

    const token = jwt.sign({ _id: registeredUser._id }, `${process.env.TOKEN_SECRET}`, {
      expiresIn: "1h",
    });

    res.status(200).header("Token", token).send(token);
  };
}
