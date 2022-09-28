import {ErrorMessage, Form} from "formik";
import classnames from "classnames";
import FormikInput from "../../components/FormikInput/FormikInput.component";
import Button from "../../components/Button/Button.component";

const AddTodoFormComponent = ({
  ...props
}) => {

  return (
    <Form
      className={classnames("flex flex-col ", props.className)}
    >
      <FormikInput
        name='name'
        placeholder="Name"
        label="Name"
        classNames={{ label: "text-[14px] font-semibold mb-2" }}
      />
      <FormikInput
        name='email'
        placeholder="Email"
        label="Email"
        classNames={{ label: "text-[14px] font-semibold mb-2" }}
      />
      <FormikInput // todo: make it textarea
        name='content'
        placeholder="Content"
        label="Content"
        classNames={{ label: "text-[14px] font-semibold mb-2" }}
      />
      <div className="flex flex-col justify-center items-center   mb-7 mt-4 px-4">
        <Button
          disabled={props.status?.loading}
          type="submit"
        >
          {!props.status?.loading ? (
            "Save"
          ) : (
            "Loading..."
          )}
        </Button>

      </div>
      <div className="text-red-700">{props.status?.error}</div>
    </Form>
  );
}

export default AddTodoFormComponent;
