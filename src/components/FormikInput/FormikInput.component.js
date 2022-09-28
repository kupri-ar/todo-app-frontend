import { useField } from "formik";
import classnames from "classnames";
import { memo } from "react";

const FormikInput = ({
  classNames,
  name,
  className,
  label,
  withErrorMessage = true,
  require,
  icon,
  required,
  ...rest
}) => {
  const [field, form] = useField(name);
  const message = form.touched && form.error;
  const showError = withErrorMessage && !!message;
  return (
    <div
      className={classnames(
        "formik-input flex flex-col relative overflow-hidden",
        className,
        {
          "pb-4": !showError,
        }
      )}
    >
      {label && (
        <label
          className={classNames?.label}
        >
          {label}
        </label>
      )}
      <div className="flex items-center h-full rounded-md border-[#E6EFF5] hover:border-[#00649c] border overflow-hidden max-h-[38px]">
        <input
          className={classnames(
            classNames?.input,
            "p-3 w-full h-full",
            { "bg-aliceBlue": rest.disabled }
          )}
          {...field}
          {...rest}
        />
      </div>
      {showError && (
        <div className={classnames(classNames?.error, "text-xs text-red-400")}>
          {message}
        </div>
      )}
    </div>
  );
}

export default memo(FormikInput);
