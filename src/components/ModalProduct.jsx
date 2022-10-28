import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";

import Button from "../components/Button";
import { InputCustom } from "../components/Input";
import { apiRequest } from "../utils/apiRequest";

function ModalAddProduct() {
  const [loading, setLoading] = useState(true);
  const [objSubmit, setObjSubmit] = useState("");

  const handleAddProduct = async () => {
    setLoading(true);
    const formData = new FormData();
    for (const key in objSubmit) {
      formData.append(key, objSubmit[key]);
    }
    apiRequest("products", "post", objSubmit, "multipart/form-data")
      .then((res) => {
        alert("List Added");
        setObjSubmit({});
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => setLoading(false));
  };

  const handleChange = (value, key) => {
    let temp = { ...objSubmit };
    temp[key] = value;
    setObjSubmit(temp);
  };

  return (
    <div className="mx-14 mb-10">
      {/* The button to open modal */}
      <label
        htmlFor="my-modal-6"
        className="btn text-center bg-primary font-normal normal-case text-white text-base flexmodal-button rounded-none"
      >
        <IoIosAdd className="text-2xl" />
        Add Product
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal rounded-none modal-bottom py-5 sm:modal-middle">
        <div className="bg-white w-[600px] h-full overflow-auto border p-6">
          <h3 className="font-bold text-lg text-center">Add New Product</h3>
          <hr className="text-line mt-6" />
          <div className="flex justify-center mt-6 mb-9">
            <InputCustom
              value={objSubmit.image}
              onChange={(e) => handleChange(e.target.value, "image")}
              className="border border-line text-base mx-auto mt-2 p-4 w-full h-14"
              placeholder="Image product"
            />
          </div>

          {/* Form Product */}
          <div>
            <div>
              <label className="text-lg text-secondary">Product Name</label>
            </div>
            <InputCustom
              value={objSubmit.name}
              onChange={(e) => handleChange(e.target.value, "name")}
              className="border border-line text-base mx-auto mt-2 p-4 w-full h-14"
              placeholder="Enter your product name"
            />
          </div>
          <div className="mt-5">
            <div>
              <label for="category" className="text-lg text-secondary">
                Category
              </label>
            </div>
            <select
              onChange={(e) => handleChange(e.target.value, "category")}
              id="category"
              class="w-full h-14 border pl-4 text-base mt-2 text-primary"
            >
              <option value="topwear">Topwear</option>
              <option value="bottomwear">Bottomwear</option>
              <option value="footwear">Footwear</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>
          <div className="mt-5">
            <div>
              <label className="text-lg text-secondary">Description</label>
            </div>
            <textarea
              value={objSubmit.description}
              onChange={(e) => handleChange(e.target.value, "description")}
              className="w-full border-line textarea mt-2 rounded-none h-40 text-base"
              placeholder="Enter your product description"
            ></textarea>
          </div>
          <div>
            <div className="flex">
              <div>
                <div>
                  <label className="text-lg text-secondary">Price</label>
                </div>
                <InputCustom
                  value={objSubmit.price}
                  onChange={(e) => handleChange(e.target.value, "price")}
                  className="border border-line text-base mx-auto mt-2 p-4 w-[262px] h-14"
                  placeholder="Rp 399.000"
                />
              </div>
              <div className="ml-7">
                <div>
                  <label className="text-lg text-secondary">Stock</label>
                </div>
                <InputCustom
                  value={objSubmit.qty}
                  onChange={(e) => handleChange(e.target.value, "qty")}
                  className="border border-line text-base mx-auto mt-2 p-4 w-[262px] h-14"
                  placeholder="100"
                />
              </div>
            </div>
          </div>

          {/* Button Add and Close */}
          <hr className="mt-9" />
          <div className="flex">
            <Button
              onClick={() => handleAddProduct()}
              className="bg-primary mt-6 h-11 w-36 flex items-center justify-center font-normal text-sm text-white cursor-pointer"
              label="Add Product"
            />
            <div className="modal-action">
              <label htmlFor="my-modal-6">
                <Button
                  className="border h-11 w-36 ml-5 flex items-center justify-center font-normal text-sm text-[#999999] cursor-pointer"
                  label="Close"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ModalEditProduct() {
  const [loading, setLoading] = useState(true);
  const [objSubmit, setObjSubmit] = useState("");

  const handleEditProduct = async () => {
    setLoading(true);
    const formData = new FormData();
    for (const key in objSubmit) {
      formData.append(key, objSubmit[key]);
    }
    apiRequest("products", "put", objSubmit, "multipart/form-data")
      .then((res) => {
        alert("List Added");
        setObjSubmit({});
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => setLoading(false));
  };

  const handleChange = (value, key) => {
    let temp = { ...objSubmit };
    temp[key] = value;
    setObjSubmit(temp);
  };

  return (
    <div>
      {/* The button to open modal */}
      <label
        htmlFor="my-modal-6"
        className="bg-primary h-11 w-72 flex items-center justify-center font-normal text-base text-white cursor-pointer"
      >
        Edit Product
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal rounded-none  modal-bottom py-5 sm:modal-middle">
        <div className="bg-white w-[600px] h-full overflow-auto border p-6">
          <h3 className="font-bold text-lg text-center">Edit Product</h3>
          <hr className="text-line mt-6" />
          <div className="flex justify-center mt-6 mb-9">
            {/* <img src={Image} alt="Image Product" /> */}
            <InputCustom
              value={objSubmit.image}
              onChange={(e) => handleChange(e.target.value, "image")}
              className="border border-line text-base mx-auto mt-2 p-4 w-full h-14"
              placeholder="Image product"
            />
          </div>

          {/* Form Product */}
          <div>
            <div>
              <label className="text-lg text-secondary">Product Name</label>
            </div>
            <InputCustom
              value={objSubmit.name}
              onChange={(e) => handleChange(e.target.value, "name")}
              className="border border-line text-base mx-auto mt-2 p-4 w-full h-14"
              placeholder="Enter your product name"
            />
          </div>
          <div className="mt-5">
            <div>
              <label for="category" className="text-lg text-secondary">
                Category
              </label>
            </div>
            <select
              value={objSubmit.category}
              onChange={(e) => handleChange(e.target.value, "category")}
              id="category"
              class="w-full h-14 border pl-4 text-base mt-2 text-primary"
            >
              <option value="topwear">Topwear</option>
              <option value="bottomwear">Bottomwear</option>
              <option value="footwear">Footwear</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>
          <div className="mt-5">
            <div>
              <label className="text-lg text-secondary">Description</label>
            </div>
            <textarea
              value={objSubmit.description}
              onChange={(e) => handleChange(e.target.value, "description")}
              className="w-full border-line textarea mt-2 rounded-none h-40 text-base"
              placeholder="Enter your product description"
            ></textarea>
          </div>
          <div>
            <div className="flex">
              <div>
                <div>
                  <label className="text-lg text-secondary">Price</label>
                </div>
                <InputCustom
                  value={objSubmit.price}
                  onChange={(e) => handleChange(e.target.value, "price")}
                  className="border border-line text-base mx-auto mt-2 p-4 w-[262px] h-14"
                  placeholder="Rp 399.000"
                />
              </div>
              <div className="ml-7">
                <div>
                  <label className="text-lg text-secondary">Stock</label>
                </div>
                <InputCustom
                  value={objSubmit.qty}
                  onChange={(e) => handleChange(e.target.value, "qty")}
                  className="border border-line text-base mx-auto mt-2 p-4 w-[262px] h-14"
                  placeholder="100"
                />
              </div>
            </div>
          </div>

          {/* Button Add and Close */}
          <hr className="mt-9" />
          <div className="flex">
            <Button
              onClick={() => handleEditProduct()}
              className="bg-primary mt-6 h-11 w-36 flex items-center justify-center font-normal text-sm text-white cursor-pointer"
              label="Edit Product"
            />
            <div className="modal-action">
              <label htmlFor="my-modal-6">
                <Button
                  className="border h-11 w-36 ml-5 flex items-center justify-center font-normal text-sm text-[#999999] cursor-pointer"
                  label="Close"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ModalAddProduct, ModalEditProduct };
