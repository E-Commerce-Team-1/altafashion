import React, { useState, useEffect } from "react";
import { WithRouter } from "../utils/Navigation";
import { Helmet } from "react-helmet";
import axios from "axios";

import Layout from "../components/Layout";
import Button from "../components/Button";
import { ModalAddProduct, ModalEditProduct } from "../components/ModalProduct";

import { apiRequest } from "../utils/apiRequest";
//import Image2 from "../assets/img-product2.png";

const MyProduct = (props) => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get(
        `https://virtserver.swaggerhub.com/KLUKMANUL33_1/altafashionnewAPI/1.0.0/myproducts`
      )
      .then((res) => {
        const { data } = res.data;
        const temp = [...datas];
        temp.push(...data);
        setDatas(temp);
        console.log(datas);
      })
      .catch((err) => {
        alert(err.toString());
      });
  }

  const handleDelMyProduct = async (id) => {
    apiRequest(`/products/${id}`, "delete", {})
      .then((res) => {
        alert("Produk Berhasil Dihapus!");
      })
      .catch((err) => alert(err.toString()))
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Helmet>
        <title>MyProduct | altafashion</title>
        <meta name="description" content="App Description" />
      </Helmet>

      <Layout>
        {/* Header MyProduct */}
        <header className="text-center">
          <h1 className="font-serif font-semibold text-4xl text-primary mt-20 mb-14">
            My Product
          </h1>
        </header>

        {/* Modal Add Product */}
        <ModalAddProduct />

        {/* Card Product */}
        <section className="w-ful flex mx-3 md:mx-16 lg:mx-20 xl:mx-14">
          <div className="grid grid-cols-4 gap-8">
            <>
              {datas.map((detail) => (
                <div className="mb-10">
                  <img
                    className="h-60 w-72"
                    src={detail?.image}
                    alt="Image Product"
                  />
                  <div className="mt-3 mb-4">
                    <h5 className="font-semibold text-primary text-2xl mb-2">
                      {detail?.name}
                    </h5>
                    <p className="font-medium text-xl text-secondary mb-2">
                      Rp {detail?.price}
                    </p>
                    <p className="font-medium text-xl text-secondary mb-5">
                      Stock: {detail?.qty}
                    </p>
                  </div>
                  <div>
                    <ModalEditProduct />
                    <Button
                      onClick={() => handleDelMyProduct(detail?.id)}
                      className="bg-white border border-[#B3B3B3] h-11 w-72 flex items-center justify-center font-normal text-base mt-2 text-secondary cursor-pointer"
                      label="Delete Product"
                    />
                  </div>
                </div>
              ))}
            </>
            {/* <div className="mb-10">
              <img className="h-60 w-72" src={Image2} alt="Image Product" />
              <div className="mt-3 mb-4">
                <h5 className="font-semibold text-primary text-2xl mb-2">
                  Striped Shirt
                </h5>
                <p className="font-medium text-xl text-secondary mb-2">
                  Rp 299.000
                </p>
                <p className="font-medium text-xl text-secondary mb-5">
                  Stock: 400
                </p>
              </div>
              <div>
                <ModalEditProduct />
                <Button
                  className="bg-white border border-[#B3B3B3] h-11 w-72 flex items-center justify-center font-normal text-base mt-2 text-secondary cursor-pointer"
                  label="Delete Product"
                />
              </div>
            </div> */}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default WithRouter(MyProduct);
