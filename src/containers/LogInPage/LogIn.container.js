import {Form, Formik} from "formik";
import classnames from "classnames";
import FormikInput from "../../components/FormikInput/FormikInput.component";

const LogInPage = () => {

  const initialState = {
    username: '',
    password: '',
  }

  const onSubmit = () => {

  }

  return (
    <Formik
      initialValues={initialState}
      validationSchema={validationSchema()}
      onSubmit={onSubmit}
    >
      <Form
        className={classnames("flex flex-col ", props.className)}
      >
        <FormikInput
          name='username'
          placeholder="Username"
          label="Username"
          classNames={{ label: "text-[14px] font-semibold mb-2" }}
        />
        <FormikInput
          name='password'
          type="password"
          placeholder="Password"
          label="Password"
          className="mt-4"
          classNames={{ label: "text-[14px] font-semibold mb-2" }}
        />
        <div className="flex flex-col justify-center items-center   mb-7 mt-4 px-4">
          <button
            disabled={props.status?.loading}
            className={classnames(
              " bg-[#00649C] w-[159px] h-[40px] text-white items-center rounded-md justify-around",
              { "pointer-events-none": props.status?.loading }
            )}
          >
            {!props.status?.loading ? (
              "Login"
            ) : (
              <Rings color="#00BFFF" height={35} width={35} />
            )}
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default LogInPage;
