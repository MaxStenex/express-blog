import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import { validationResult } from "express-validator";
import User from "../../models/User";

class RegisterController {
  index = async (req: Request, res: Response): Promise<unknown> => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ error: errors.array({ onlyFirstError: true })[0].msg });
    }
    const registeredUser = await User.findOne({ email: req.body.email });
    if (registeredUser) {
      return res.status(401).json({ error: "Email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
    });

    try {
      await user.save();
      res.status(200).json({ message: "Register succesfull" });
    } catch (error) {
      console.log(error);
    }
  };
}

export default new RegisterController();
