import React from "react";

import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

function CardCart(props) {
  const [counter, setCounter] = React.useState(1);
  let handleCounter = (value) => {
    setCounter(counter + value);
  };

  return (
    <section className="mx-20">
      <hr className="text-line" />
      <div className="flex my-5">
        <div>
          <img
            className="h-44 w-[200px]"
            src={props.image}
            alt="Image Product"
          />
        </div>
        <div className="flex justify-between w-full">
          <div className="ml-6 mt-2">
            <h5 className="font-semibold text-xl text-primary">{props.name}</h5>
            <p className="font-medium text-lg text-secondary mt-2">
              Rp {props.price}
            </p>
            <div className="flex mt-16">
              <button>
                <AiFillMinusCircle
                  className="mr-3.5 rounded-full bg-primary text-3xl text-white mt-1"
                  onClick={() => handleCounter(props.sub)}
                />
              </button>
              <p className="text-lg font-medium w-auto text-center mt-1.5">
                {counter}
              </p>
              <button>
                <AiFillPlusCircle
                  className="text-primary text-3xl mt-1 ml-3.5"
                  onClick={() => handleCounter(props.add)}
                />
              </button>
            </div>
          </div>
          <div className="ml-6 mt-2 text-right">
            <h4 className="text-primary font-medium">
              Rp {props.price * counter}
            </h4>
            <button
              className="text-secondary mt-28"
              onClick={props.removeProduct}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardCart;
