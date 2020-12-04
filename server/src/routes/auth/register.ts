import { Request, Response, Router } from "express";
import { validationResult } from "express-validator";
import User from "../../models/User";
import { registerValidator } from "../../utils/validators/user";

const router = Router();

router.post("/register", registerValidator, (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({ errors: errors.array({ onlyFirstError: true })[0].msg });
  }

  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });

  user.save((err) => {
    if (err) {
      console.log(err);
    }
  });

  res.status(200).end("Register succesfull");
});

export { router as registerRouter };
