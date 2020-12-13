import * as yup from "yup";

export const articleSchema = yup.object({
  title: yup
    .string()
    .min(3, "Too short, minimum 3 symbols")
    .max(50, "Too long, maximum 50 symbols")
    .required("Field is required"),
  text: yup
    .string()
    .min(50, "Too short, minimum 50 symbols")
    .max(600, "Too long, maximum 600 symbols")
    .required("Field is required"),
});
