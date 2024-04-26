import React, { forwardRef } from "react";
import "./InputField.css";

const InputField = forwardRef(({ label, type = "text", ...rest }, ref) => {
  return (
    <div className="InputField">
      {label && <label className="label">{label}</label>}
      <input className="input" type={type} ref={ref} {...rest} />
    </div>
  );
});
export default InputField;
