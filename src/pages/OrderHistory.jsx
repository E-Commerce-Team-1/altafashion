import React from "react";
import { WithRouter } from "../utils/Navigation";

import Layout from "../components/Layout";
import Button from "../components/Button";
import Image from "../assets/img-history.png";

const OrderHistory = () => {
  return (
    <Layout>
      {/* Header */}
      <header className="text-center mb-14">
        <h1 className="font-serif font-semibold text-4xl text-primary mt-20">
          Order History
        </h1>
        <p className="mt-3 text-secondary font-normal text-lg">
          Check the status of recent orders and dicover similiar products
        </p>
      </header>

      <div className="w-ful flex mx-3 md:mx-16 lg:mx-20 xl:mx-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-9">
          {/* Card Order On Progress */}
          <section className="mb-10">
            <img className="h-48 w-48" src={Image} alt="Image Product" />
            <div className="mt-3 mb-4">
              <h5 className="font-semibold text-primary text-lg mb-2">
                Blue Shirt
              </h5>
              <p className="font-medium text-base text-secondary mb-2">
                Rp 499.000
              </p>
              <p className="font-medium text-base text-secondary mb-2">
                Quantity: 1
              </p>
              <p className="py-1 px-2 w-32 rounded-lg bg-[#FFF1CC] text-[#F0AD00] text-center  font-medium">
                On Progress
              </p>
            </div>
            <div>
              <Button
                className="bg-primary h-10 w-48 flex items-center justify-center font-normal text-base text-white cursor-pointer"
                label="Finish Order"
              />
              <Button
                className="bg-white border h-10 w-48 flex items-center justify-center font-normal text-base mt-2 text-secondary cursor-pointer"
                label="Cancel Order"
              />
            </div>
          </section>
          {/* Card Order Success */}
          <section className="mb-10">
            <img className="h-48 w-48" src={Image} alt="Image Product" />
            <div className="mt-3 mb-4">
              <h5 className="font-semibold text-primary text-lg mb-2">
                Blue Shirt
              </h5>
              <p className="font-medium text-base text-secondary mb-2">
                Rp 499.000
              </p>
              <p className="font-medium text-base text-secondary mb-2">
                Quantity: 1
              </p>
              <p className="py-1 px-2 w-28 rounded-lg text-center bg-[#DDF8E4] text-[#56DC77] font-medium">
                Success
              </p>
            </div>
            <div>
              <Button
                className="bg-primary h-10 w-48 flex items-center justify-center font-normal text-base text-white cursor-pointer"
                label="Finish Order"
              />
              <Button
                className="bg-white border h-10 w-48 flex items-center justify-center font-normal text-base mt-2 text-secondary cursor-pointer"
                label="Cancel Order"
              />
            </div>
          </section>
          {/* Card Order Canceled */}
          <section className="mb-10">
            <img className="h-48 w-48" src={Image} alt="Image Product" />
            <div className="mt-3 mb-4">
              <h5 className="font-semibold text-primary text-lg mb-2">
                Blue Shirt
              </h5>
              <p className="font-medium text-base text-secondary mb-2">
                Rp 499.000
              </p>
              <p className="font-medium text-base text-secondary mb-2">
                Quantity: 1
              </p>
              <p className="py-1 px-2 w-28 rounded-lg bg-[#FFE0E0] text-[#FF3333] text-center font-medium">
                Canceled
              </p>
            </div>
            <div>
              <Button
                className="bg-primary h-10 w-48 flex items-center justify-center font-normal text-base text-white cursor-pointer"
                label="Finish Order"
              />
              <Button
                className="bg-white border h-10 w-48 flex items-center justify-center font-normal text-base mt-2 text-secondary cursor-pointer"
                label="Cancel Order"
              />
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default WithRouter(OrderHistory);
