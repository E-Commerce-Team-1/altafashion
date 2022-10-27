import React from "react";
import ButtonPrimary from "./Button";

const CardProduct = (props) => {
  return (
    <div className="container grow flex flex-col">
      <div onClick={props.onNavigate}>
        <img
          src={props.image}
          alt={props.name}
          className="w-72 h-60 cursor-pointer"
        />
      </div>
      <p className="font-semibold text-left text-2xl mt-4 mb-3.5">
        {props.name}
      </p>
      <p className="font-medium text-left text-xl mb-5">Rp {props.price}</p>
      <ButtonPrimary
        className="flex justify-center items-center bg-primary font-medium text-base text-white w-full h-14 max-w-md cursor-pointer"
        label="Add to cart"
        onClick={props.addToCart}
      />
    </div>
  );
};

export default CardProduct;
