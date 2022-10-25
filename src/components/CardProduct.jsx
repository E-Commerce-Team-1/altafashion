import React from "react";
import ButtonPrimary from "./Button";

const CardProduct = (props) => {
  return (
    <div className="container grow flex flex-col justify-between p-4 shadow-lg rounded-lg">
      <div onClick={props.onNavigate}>
        <img
          src=""
          alt=""
          className="max-w-full h-auto rounded-md cursor-pointer"
        />
      </div>
      <p>{props.name}</p>
      <p>Rp {props.price}</p>
      <ButtonPrimary
        label="Add to cart"
        // onClick={props.addCart}
      />
    </div>
  );
};

export default CardProduct;
