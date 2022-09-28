import { Form } from "formik";
import classnames from "classnames";
import FormikInput from "../../components/FormikInput/FormikInput.component";

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
        <button
          disabled={props.status?.loading}
          type="submit"
          className={classnames(
            "bg-blue-400 py-1 px-3 ml-1 rounded-md",
            { "pointer-events-none": props.status?.loading }
          )}
        >
          {!props.status?.loading ? (
            "Save"
          ) : (
            "Loading..."
          )}
        </button>
      </div>
    </Form>
  );
}

export default AddTodoFormComponent;
