import * as yup from "yup";

export const FormSchema = yup.object({
  name: yup.string().required("Please enter name!"),
  email: yup
    .string()
    .email("Email is not valid")
    .required("Please enter email!"),
  role: yup.string().required("Please select role!"),

  // Additional Fields based on selected role
  admincode: yup.string().when("role", {
    is: (val: string) => val === "admin",
    then: (schema: any) => schema.required("Please provide admin code"),
  }),
  usercode: yup.string().when("role", {
    is: (val: string) => val === "user",
    then: (schema: any) => schema.required("Please provide user code"),
  }),
});
