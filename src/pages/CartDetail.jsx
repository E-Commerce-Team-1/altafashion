import React from "react";
import { WithRouter } from "../utils/Navigation";

import Layout from "../components/Layout";
import Product from "../assets/product_image.png";
import Product2 from "../assets/product_image-2.png";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const CartDetail = () => {
  return (
    <Layout>
      {/* Header */}
      <header className="text-center">
        <h1 className="font-serif font-semibold text-4xl text-primary mt-20 mb-14">
          Shopping Cart Detail
        </h1>
      </header>

      {/* Cart Content */}
      <section className="mx-20">
        <hr className="text-line" />
        <div className="flex my-5">
          <div>
            <img className="h-44 w-[200px]" src={Product} alt="Image Product" />
          </div>
          <div className="flex justify-between w-full">
            <div className="ml-6 mt-2">
              <h5 className="font-semibold text-xl text-primary">Gray Shirt</h5>
              <p className="font-medium text-lg text-secondary mt-2">
                Rp 399.000
              </p>
              <div className="flex mt-16">
                <button>
                  <AiFillMinusCircle className="mr-3.5 rounded-full bg-primary text-3xl text-white mt-1" />
                </button>
                <p className="text-lg font-medium w-auto text-center mt-1.5">
                  2
                </p>
                <button>
                  <AiFillPlusCircle className="text-primary text-3xl mt-1 ml-3.5" />
                </button>
              </div>
            </div>
            <div className="ml-6 mt-2 text-right">
              <h4 className="text-primary font-medium">Rp 798.000</h4>
              <button className="text-secondary mt-28">Remove</button>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-20">
        <hr className="text-line" />
        <div className="flex my-5">
          <div>
            <img
              className="h-44 w-[200px]"
              src={Product2}
              alt="Image Product"
            />
          </div>
          <div className="flex justify-between w-full">
            <div className="ml-6 mt-2">
              <h5 className="font-semibold text-xl text-primary">
                White Shirt
              </h5>
              <p className="font-medium text-lg text-secondary mt-2">
                Rp 599.000
              </p>
              <div className="flex mt-16">
                <button>
                  <AiFillMinusCircle className="mr-3.5 rounded-full bg-primary text-3xl text-white mt-1" />
                </button>
                <p className="text-lg font-medium w-auto text-center mt-1.5">
                  1
                </p>
                <button>
                  <AiFillPlusCircle className="text-primary text-3xl mt-1 ml-3.5" />
                </button>
              </div>
            </div>
            <div className="ml-6 mt-2 text-right">
              <h4 className="text-primary font-medium">Rp 599.000</h4>
              <button className="text-secondary mt-28">Remove</button>
            </div>
          </div>
        </div>
      </section>

      {/* Order Summary*/}
      <section className="mx-20 mb-44">
        <hr className="text-line" />
        <h5 className="mt-9 text-primary font-semibold text-xl">
          Order Summary
        </h5>
        <div className="mt-5">
          <p className="mt-3 text-primary font-medium text-lg">Quantity: 3</p>
          <p className="mt-3 text-primary font-medium text-lg">
            Shipping: FREE!
          </p>
          <p className="mt-3 text-primary font-medium text-lg">
            Total Price: Rp. 1.388.000
          </p>
        </div>
        <div className="text-center">
          <button className="bg-primary font-medium text-lg text-white w-full mt-14 h-14">
            Buy Now
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default WithRouter(CartDetail);
