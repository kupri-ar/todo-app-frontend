import * as yup from "yup";

const AddTodoSchema = yup.object().shape({
  name: yup.string().required("Name is required!"),
  email: yup.string().email().required("Email address is required!"),
  content: yup.string().required("Content is required!"),
});

export default AddTodoSchema;