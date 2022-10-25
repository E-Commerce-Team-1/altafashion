import React from "react";

const ButtonPrimary = (props) => {
  return (
    <div
      className="bg-primary font-medium text-base text-center text-white m-auto p-4 w-full h-14 max-w-md cursor-pointer"
      onClick={props.onClick}
    >
      {props.label}
    </div>
  );
};

export default ButtonPrimary;
