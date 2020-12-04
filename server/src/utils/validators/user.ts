import { body } from "express-validator";
import User from "../../models/User";

export const registerValidator = [
  body("firstName")
    .isLength({ min: 2, max: 20 })
    .withMessage("Invalid first name")
    .isString(),
  body("lastName")
    .isLength({ min: 2, max: 20 })
    .isString()
    .withMessage("Invalid last name"),
  body("password")
    .isLength({ min: 8, max: 255 })
    .isString()
    .withMessage("Invalid password"),
  body("email")
    .isEmail()
    .isString()
    .custom(async (value) => {
      const user = await User.findOne({ email: value });
      if (user) {
        throw new Error("Email already exists");
      }
    }),
];
