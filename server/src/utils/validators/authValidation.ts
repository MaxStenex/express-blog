import { body } from "express-validator";

export const registerValidator = [
  body("firstName")
    .isLength({ min: 2, max: 20 })
    .withMessage("Invalid first name")
    .isString(),
  body("lastName")
    .isLength({ min: 2, max: 20 })
    .isString()
    .withMessage("Invalid last name"),
  body("password").isLength({ max: 255 }).isString().withMessage("Invalid password"),
  body("email").isEmail().isLength({ min: 8, max: 255 }).isString(),
];

export const loginValidator = [
  body("email").isEmail().isString().isLength({ max: 255 }),
  body("password").isString().isLength({ min: 8, max: 255 }),
];
