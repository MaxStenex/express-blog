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
  email: yup
    .string()
    .email("Invalid email")
    .required("Field is required")
    .max(255, "Maximum length is 255"),
  password: yup
    .string()
    .min(8, "Too short, minimum is 8 symbols")
    .max(255, "Maximum length is 255")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
    .required("Field is required"),
  confirmPassword: yup
    .string()
    .required("Field is required")
    .oneOf([yup.ref("password")], "Passwords are not match"),
});
