import { Request, Response, Router } from "express";
import { validationResult } from "express-validator";
import User from "../../models/User";
import { registerValidator } from "../../utils/validators/authValidation";
import bcrypt from "bcryptjs";

const router = Router();

router.post("/", registerValidator, async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({ error: errors.array({ onlyFirstError: true })[0].msg });
  }
  const registeredUser = await User.findOne({ email: req.body.email });
  if (registeredUser) {
    return res.status(400).json({ error: "Email already exists" });
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
  } catch (error) {
    console.log(error);
  }

  res.status(200).end("Register succesfull");
});

export { router as registerRouter };
