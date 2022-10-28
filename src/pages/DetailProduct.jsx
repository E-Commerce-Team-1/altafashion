import React, { useEffect, useState } from "react";
import { WithRouter } from "../utils/Navigation";
import axios from "axios";
import { useDispatch } from "react-redux";

import { Helmet } from "react-helmet";
import Layout from "../components/Layout";

import ButtonPrimary from "../components/Button";
import { setCarts } from "../utils/redux/reducers/reducer";

function DetailProduct(props) {
  const dispatch = useDispatch();
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get(`https://immersiveapp.site/products/${props.params.id}`)
      .then((res) => {
        const { data } = res.data;
        setDatas(data);
      })
      .catch((err) => {
        alert(err.toString());
      });
  }

  function handleCart(product) {
    const getProduct = localStorage.getItem("addCart");
    if (getProduct) {
      const parsedProducts = JSON.parse(getProduct);
      parsedProducts.push(product);
      const temp = JSON.stringify(parsedProducts);
      dispatch(setCarts(parsedProducts));
      localStorage.setItem("addCart", temp);
    } else {
      const temp = JSON.stringify([product]);
      dispatch(setCarts([product]));
      localStorage.setItem("addCart", temp);
    }
    alert("added to cart");
  }

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
              src={datas.image}
              alt={datas.name}
              className="max-w-lg mt-20 mb-60 mr-20 ml-20"
            />
          </div>
          <div className="justify-center mt-44 mr-48 ml-20">
            <h1 className="font-semibold text-3xl text-primary mb-8">
              {datas.name}
            </h1>
            <p className="text-justify text-lg text-secondary drop-shadow-md mt-9 mb-16">
              {datas.description}
            </p>
            <h2 className="text-secondary text-2xl font-medium">
              Rp {datas.price}
            </h2>
            <ButtonPrimary
              className="bg-primary font-medium text-lg text-center text-white my-16 mb-64 p-4 w-full h-14 max-w-md cursor-pointer"
              label="Add to Cart"
              onClick={() => handleCart(detail)}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default WithRouter(DetailProduct);
