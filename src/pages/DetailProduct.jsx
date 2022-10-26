import React from "react";
import { WithRouter } from "../utils/Navigation";

import { Helmet } from "react-helmet";
import Layout from "../components/Layout";

import ButtonPrimary from "../components/Button";

function DetailProduct() {
  return (
    <>
      <Helmet>
        <title>Detail | altafashion</title>
        <meta name="description" content="App Description" />
      </Helmet>

      {/* Detail */}
      <Layout>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex justify-center ">
            <img
              src="https://images.journeys.ca/images/products/1_212394_ZM_B-LIFESTYLE1.JPG"
              alt="prototype"
              className="max-w-lg mt-20 mb-60 mr-20 ml-20"
            />
          </div>
          <div className="justify-center mt-44 mr-48 ml-20">
            <h1 className="font-semibold text-3xl text-primary mb-8">
              Converse Chuck Taylor
            </h1>
            <p className="text-justify text-lg text-secondary drop-shadow-md mt-9 mb-16">
              Sepatu olahraga model bamba. Tersedia dalam berbagai warna.
              Memiliki tujuh lubang tali. Komponen tumpang-tindih di bagian
              tumit dengan detail setik balik. Sol berwarna putih. Ukuran 42
              Hitam.
            </p>
            <h2 className="text-secondary text-2xl font-medium">Rp 599.000 </h2>
            <ButtonPrimary
              className="bg-primary font-medium text-lg text-center text-white my-16 mb-64 p-4 w-full h-14 max-w-md cursor-pointer"
              label="Add to Cart"
            />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default WithRouter(DetailProduct);
