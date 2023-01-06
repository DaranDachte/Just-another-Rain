import * as yup from "yup";

export const basicSchema = yup.object().shape({
  name: yup.string().min(5).required("Required"),
  age: yup.number().positive().integer().required("Required"),
  label: yup.string().label("Please choose a topic").required("Required"),
  field: yup.string().max(300).required("Required"),
});
