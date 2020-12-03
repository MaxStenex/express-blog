import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().email("Invalid email").required("Field is required"),
  password: yup.string().required("Field is required"),
});
