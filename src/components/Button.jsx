import React from "react";

const ButtonPrimary = (props) => {
  return (
    <div className={props.className} onClick={props.onClick}>
      {props.label}
    </div>
  );
};

export default ButtonPrimary;
