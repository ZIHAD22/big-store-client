import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useMyProducts from "../../hooks/useMyProducts";
import Table from "../Table/Table";

const MyInventory = () => {
  const [productRerander, setRerander] = useState(0);
  const [myProducts, setMyProducts] = useMyProducts(productRerander);

  console.log(myProducts.length);

  const handleProductDelete = (id) => {
    const confirmed = window.confirm("Are You Sure ?");
    if (confirmed) {
      axios.delete(`http://localhost:5000/products/${id}`).then((res) => {
        if (res.status === 200) {
          setRerander(productRerander + 1);
        }
      });
    }
  };
  return (
    <div>
      <h1 className="text-4xl text-center font-serif font-semibold my-9">
        Manage Inventories
        <span className="font-serif text-[#fb923c]">({myProducts.length})</span>
        <div>
          <Link
            to="/add-item"
            className="bg-orange-400 nav-btn text-xs font-semibold px-5 py-2 rounded-lg inline-block my-2 hover:bg-orange-500 mt-5"
          >
            Add Item
          </Link>
        </div>
      </h1>
      <Table products={myProducts} handleProductDelete={handleProductDelete} />
    </div>
  );
};

export default MyInventory;
