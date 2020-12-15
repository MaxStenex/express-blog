import * as yup from "yup";

export const articleSchema = yup.object({
  title: yup
    .string()
    .min(3, "Too short, minimum 3 symbols")
    .max(100, "Too long, maximum 100 symbols")
    .required("Field is required"),
  text: yup
    .string()
    .min(50, "Too short, minimum 50 symbols")
    .max(600, "Too long, maximum 600 symbols")
    .required("Field is required"),
  file: yup
    .mixed()
    .required("Photo is required")
    .test("fileType", "Unsupported File Format", (value) =>
      ["image/jpg", "image/jpeg", "image/gif", "image/png"].includes(value && value.type)
    )
    .test(
      "fileSize",
      "File Size is too large",
      (value) => value && value.size <= 1500000
    ),
});
