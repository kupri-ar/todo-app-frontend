import {memo} from "react";

const Button = ({
  children,
  ...props
}) => (
  <button className='bg-blue-400 py-1 px-3 ml-1 rounded-md' {...props}>{children}</button>
);

export default memo(Button);
