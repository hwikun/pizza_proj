import React, { forwardRef } from "react";
import "./InputField.css";

function InputField({ label, type = "text", ...rest }, ref) {
  return (
    <div className="InputField">
      {label && <label className="label">{label}</label>}
      <input className="input" type={type} ref={ref} {...rest} />
    </div>
  );
}
export default forwardRef(InputField);

/*
//위의 코드와 동일한 기능을 함수 표현식으로 쓰면 다음과 같음
const InputField = forwardRef(({ label, type = "text", ...rest }, ref) => {
  return (
    <div className="InputField">
      {label && <label className="label">{label}</label>}
      <input className="input" type={type} ref={ref} {...rest} />
    </div>
  );
});
export default InputField;
*/
