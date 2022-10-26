import React from "react";
import ButtonPrimary from "./Button";

const CardProduct = (props) => {
  return (
    <div className="container grow flex flex-col justify-between my-9 p-4 shadow-lg border border-black rounded-lg">
      <div onClick={props.onNavigate}>
        <img
          src={props.image}
          alt={props.name}
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
