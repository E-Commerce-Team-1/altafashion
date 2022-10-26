import React from "react";
import { WithRouter } from "../utils/Navigation";

import Layout from "../components/Layout";
import Button from "../components/Button";
import { InputCustom } from "../components/Input";

const Checkout = () => {
  return (
    <Layout>
      <div className="grid md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-4 mx-14 mt-20 mb-32">
        {/* Section Shipping Address */}
        <section className="xl:col-span-2">
          <div className="border p-6 w-[630px]">
            <h5 className="text-primary font-medium text-lg mb-5">
              Shipping Address
            </h5>
            <div>
              <div>
                <label className="text-lg text-secondary">Full Name</label>
              </div>
              <InputCustom
                // value={fullName}
                // onChange={(e) => setFullName(e.target.value)}
                className="border border-line text-base mx-auto mt-2 p-4 w-full h-14"
                placeholder="Full Name"
              />
            </div>
            <div className="mt-4">
              <div>
                <label className="text-lg text-secondary">Phone</label>
              </div>
              <InputCustom
                // value={fullName}
                // onChange={(e) => setFullName(e.target.value)}
                className="border border-line text-base mx-auto mt-2 p-4 w-full h-14"
                placeholder="+62 85797556622"
              />
            </div>
            <div className="mt-4">
              <div>
                <label className="text-lg text-secondary">Province</label>
              </div>
              <InputCustom
                // value={province}
                // onChange={(e) => setProvince(e.target.value)}
                className="border border-line text-base mx-auto mt-2 p-4 w-full h-14"
                placeholder="Jawa Barat"
              />
            </div>
            <div className="mt-4">
              <div>
                <label className="text-lg text-secondary">City</label>
              </div>
              <InputCustom
                // value={city}
                // onChange={(e) => setCity(e.target.value)}
                className="border border-line text-base mx-auto mt-2 p-4 w-full h-14"
                placeholder="Bandung"
              />
            </div>
            <div className="mt-4">
              <div>
                <label className="text-lg text-secondary">Street</label>
              </div>
              <InputCustom
                // value={street}
                // onChange={(e) => setStreet(e.target.value)}
                className="border border-line text-base mx-auto mt-2 p-4 w-full h-14"
                placeholder="Jl. Cibaduyut"
              />
            </div>
            <div className="mt-4">
              <div>
                <label className="text-lg text-secondary">Zip Code</label>
              </div>
              <InputCustom
                // value={zipCode}
                // onChange={(e) => setZipCode(e.target.value)}
                className="border border-line text-base mx-auto mt-2 p-4 w-full h-14"
                placeholder="163730"
              />
            </div>
          </div>
        </section>

        {/* Section Review Order */}
        <section className="xl:col-span-1 mt-6 md:mt-6 lg:mt-6 xl:mt-0">
          <div className="border p-6 w-[500px]">
            <h5 className="text-primary font-medium text-lg">Review Order</h5>
            <div className="mt-5">
              <p className="text-secondary font-normal text-lg mt-3">
                Total Quantity: 3
              </p>
              <p className="text-secondary font-normal text-lg mt-3">
                Shipping: Free!
              </p>
              <p className="text-secondary font-normal text-lg mt-3">
                Total Price : Rp. 1.388.000
              </p>
            </div>
          </div>
          <Button
            className="bg-primary mt-4 h-14 w-[500px] flex items-center justify-center font-normal text-lg text-white cursor-pointer"
            label="Finish Order"
          />
        </section>
      </div>
    </Layout>
  );
};

export default WithRouter(Checkout);
