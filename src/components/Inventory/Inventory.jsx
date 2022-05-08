import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";

const Inventory = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const [productRerander, setRerander] = useState(0);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const url = `http://localhost:5000/inventory/${id}`;
  useEffect(() => {
    axios.get(url).then((res) => {
      const { data } = res;
      setProduct(data);
    });
  }, [productRerander]);

  const handleDelivered = () => {
    axios.put(url, { quantity: product.quantity }).then((res) => {
      if (res.status === 200) {
        setRerander(productRerander + 1);
      }
    });
  };

  const handleReStock = (data) => {
    const updatedData = {
      currentQuantity: parseInt(product.quantity),
      stockToAdd: data.stock,
    };
    axios.post(url, updatedData).then((res) => {
      if (res.status === 200) {
        setRerander(productRerander + 1);
        reset();
      }
    });
  };
  return (
    <div className="my-10 h-[100vh]">
      <div className="grid grid-cols-2 text-left">
        <div className="mx-auto">
          <img src={product.img} alt="" />
        </div>
        <div>
          <h2 className="text-3xl font-serif font-medium text-center my-4">
            {product.name}
          </h2>
          <div className="grid grid-cols-2">
            <div className="mx-auto">
              <h2 className="text-lg text-gray-600">
                {product.quantity} package /
                <span className="text-xs">25kg</span>
              </h2>
              <h3 className="font-serif font-medium text-gray-600">
                Supplier: {product.supplierName}
              </h3>
              <h2 className="text-4xl mt-6 font-sans">
                <span className="font-serif">৳</span>
                {product.price}
                <span className="line-through text-base text-gray-600 ml-3">
                  MRP: <span className="font-serif">৳</span>
                  {parseInt(product.price) + 200}
                </span>
              </h2>
            </div>
            <div className="mx-4">
              <h3 className="text-xl font-serif">Description:</h3>
              <p className="text-xs text-gray-600">{product.dece}</p>
              <button
                onClick={handleDelivered}
                className="bg-orange-400 nav-btn font-semibold px-5 py-2 rounded-lg inline-block w-1/2 my-2 hover:bg-orange-500 mt-5"
              >
                Delivered
              </button>
            </div>
          </div>
          <hr className="mx-4 my-5" />
          <div>
            <form onSubmit={handleSubmit(handleReStock)}>
              <h1 className="text-3xl text-center font-serif font-medium text-gray-600">
                Restock the items
              </h1>
              <input
                type="number"
                className="form-control w-full mt-4 block px-3 py-1.5 text-font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out border-orange-300 outline-hidden m-0 focus:text-gray-800 focus:bg-white focus:outline-orange-400"
                id="stock"
                {...register("stock", {
                  required: "Required",
                  valueAsNumber: true,
                })}
                placeholder="Restock quantity"
              />
              <button
                type="submit"
                className="bg-orange-400 nav-btn font-semibold px-5 py-2 rounded-lg mx-auto block w-1/2 my-2 hover:bg-orange-500 mt-5"
              >
                Restock
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="my-20">
        <Link
          to="/manage-items"
          className="bg-orange-400 nav-btn  text-center font-semibold px-5 py-2 rounded-lg mx-auto block w-1/3 my-2 hover:bg-orange-500 mt-5"
        >
          Manage Inventories
        </Link>
      </div>
    </div>
  );
};

export default Inventory;
