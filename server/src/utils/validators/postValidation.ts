import { body } from "express-validator";

export const postValidator = [
  body("title").isLength({ min: 3, max: 50 }).withMessage("Invalid title").isString(),
  body("text")
    .isLength({ min: 50, max: 600 })
    .isString()
    .withMessage("Invalid text of article"),
];
