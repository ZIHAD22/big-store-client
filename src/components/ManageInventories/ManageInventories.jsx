import { logDOM } from "@testing-library/react";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useInventoryProducts from "../../hooks/useInventoryProducts";
import Table from "../Table/Table";

const ManageInventories = () => {
  const [productRerander, setRerander] = useState(0);
  const [products, setProducts] = useInventoryProducts(productRerander);
  let sNo = 1;

  const handleProductDelete = (id) => {
    const confirmed = window.confirm("Are You Sure ?");
    if (confirmed) {
      axios
        .delete(`https://tranquil-anchorage-25651.herokuapp.com/products/${id}`)
        .then((res) => {
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
        <span className="font-serif text-[#fb923c]">({products.length})</span>
        <div>
          <Link
            to="/add-item"
            className="bg-orange-400 nav-btn text-xs font-semibold px-5 py-2 rounded-lg inline-block my-2 hover:bg-orange-500 mt-5"
          >
            Add Item
          </Link>
        </div>
      </h1>
      <Table products={products} handleProductDelete={handleProductDelete} />
    </div>
  );
};

export default ManageInventories;
