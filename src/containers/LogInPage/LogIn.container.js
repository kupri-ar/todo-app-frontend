import { Formik } from "formik";
import LogInComponent from "./LogIn.component";
import LogInSchema from "./LogIn.schema";
import api from "../../services/api";
import {AppContext} from "../../App";
import {useNavigate} from "react-router";
import {useContext} from "react";
import {setAccessToken} from "../../services/localStorage";

const LogInPage = () => {

  const { currentUser, setCurrentUser } = useContext(AppContext);
  const navigate = useNavigate();

  const initialState = {
    username: '',
    password: '',
  }

  const onSubmit = async(values, form) => {
    try {
      form.setStatus({loading: true});
      await api.login(values.username, values.password).then((resp) => {
        // setCurrentUser(resp.data.user);
        setCurrentUser({ username: 'name' });
        setAccessToken(resp.data.access_token);
      });
      form.setStatus({loading: false});
    } catch (err) {
      if (err?.message) {
        form.setFieldError('username', err?.message);
      }
      form.setStatus({loading: false});
    }
  }

  if (currentUser) navigate({ pathname: '/' })

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
