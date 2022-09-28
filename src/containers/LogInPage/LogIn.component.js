import { Form } from "formik";
import classnames from "classnames";
import FormikInput from "../../components/FormikInput/FormikInput.component";

const LogInComponent = ({
  ...props
}) => {

  return (
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
          type="submit"
          className={classnames(
            "bg-blue-400 py-1 px-3 ml-1 rounded-md",
            { "pointer-events-none": props.status?.loading }
          )}
        >
          {!props.status?.loading ? (
            "Log In"
          ) : (
            "Loading..."
          )}
        </button>
      </div>
    </Form>
  );
}

export default LogInComponent;
