import React from "react";

function InputText(props) {
  return (
    <input
      type="text"
      className="border border-line text-base mx-auto mt-2 p-4 w-full h-14 max-w-md"
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
}

function InputEmail(props) {
  return (
    <input
      type="text"
      className="border border-line text-base mx-auto mt-2 p-4 w-full h-14 max-w-md"
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
}

function InputPassword(props) {
  return (
    <input
      type="password"
      className="border border-line text-base mx-auto mt-2 p-4 w-full h-14 max-w-md"
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
}

export { InputText, InputEmail, InputPassword };
