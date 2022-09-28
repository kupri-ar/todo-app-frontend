import { Form } from "formik";
import classnames from "classnames";
import FormikInput from "../../components/FormikInput/FormikInput.component";
import Button from "../../components/Button/Button.component";

const LogInComponent = ({
  ...props
}) => {

  return (
    <div className='flex flex-col justify-center items-center py-5'>
      <Form
        className={classnames("flex flex-col justify-center items-center max-w-sm  ", props.className)}
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
          <Button
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
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default LogInComponent;
