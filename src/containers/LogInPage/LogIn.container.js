import { Formik } from "formik";
import LogInComponent from "./LogIn.component";
import LogInSchema from "./LogIn.schema";
import api from "../../services/api";
import {useNavigate} from "react-router";
import {setAccessToken} from "../../services/localStorage";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentUser} from "../../store/UserData.reducer";

const LogInPage = () => {

  const { user } = useSelector((state) => state.userData)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialState = {
    username: '',
    password: '',
  }

  const onSubmit = async(values, form) => {
    try {
      form.setStatus({loading: true});
      await api.login(values.username, values.password).then((resp) => {
        dispatch(setCurrentUser(resp.data))
        setAccessToken(resp.headers.authorization);
      });
      form.setStatus({loading: false});
    } catch (err) {
      if (err?.message) {
        form.setFieldError('username', err?.message);
      }
      form.setStatus({loading: false});
    }
  }

  if (user) navigate({ pathname: '/' })

  return (
    <Formik
      initialValues={initialState}
      validationSchema={LogInSchema}
      onSubmit={onSubmit}
    >
      {(props) => <LogInComponent {...props} />}
    </Formik>
  );
}

export default LogInPage;
