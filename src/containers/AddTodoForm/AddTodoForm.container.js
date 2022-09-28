import { Formik } from "formik";
import api from "../../services/api";
import AddTodoSchema from "./AddTodo.schema";
import AddTodoFormComponent from "./AddTodoForm.component";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, setPageCount, updateTodo} from "../../store/Todo.reducer";

const AddTodoForm = ({ todoItem, close }) => {
  const { page, sortCol, sortDesc } = useSelector((state) => state.todoList)
  const dispatch = useDispatch();

  const initialState = todoItem || {
    name: '',
    email: '',
    content: '',
  }

  const onSubmit = async(values, form) => {
    try {
      form.setStatus({loading: true});
      if (!todoItem) {
        await api.createTodo(values).then(async (resp) => {
          await api.getTodos(page, sortCol, !!sortDesc).then((resp) => {
            dispatch(setPageCount(resp.headers['x-pagination-page-count']));
          });
          dispatch(addTodo(resp.data))

          close();
        });
      } else {
        await api.updateTodo(values).then((resp) => {
          dispatch(updateTodo(resp.data))
          close();
        });
      }
      form.setStatus({loading: false});
    } catch (err) {
      if (err?.message) {
        console.log(err)
        if (err.response.status === 401) {
          form.setStatus({error: 'Authorization needed'})
        }
        form.setFieldError('email', err.response.data.data.email[0]);
      }
      form.setStatus({loading: false});
    }
  }

  return (
    <Formik
      initialValues={initialState}
      validationSchema={AddTodoSchema}
      onSubmit={onSubmit}
    >
      {(props) => <AddTodoFormComponent {...props} />}
    </Formik>
  );
}

export default AddTodoForm;
