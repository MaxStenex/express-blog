import * as yup from "yup";

export const registerSchema = yup.object({
  firstName: yup
    .string()
    .min(2, "Too short, minimum 2 symbols")
    .max(20, "Too long, maximum 20 symbols")
    .required("Field is required"),
  lastName: yup
    .string()
    .min(2, "Too short, minimum 2 symbols")
    .max(20, "Too long, maximum 20 symbols")
    .required("Field is required"),
  email: yup.string().email("Invalid email").required("Field is required"),
  password: yup
    .string()
    .min(8, "Too short, minimum is 8 symbols")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
    .required("Field is required"),
  confirmPassword: yup
    .string()
    .min(8, "Too short, minimum is 8 symbols")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
    .required("Field is required"),
});
