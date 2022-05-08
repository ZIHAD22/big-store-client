import { logDOM } from "@testing-library/react";
import axios from "axios";
import React, { useState } from "react";
import useInventoryProducts from "../../hooks/useInventoryProducts";
import "./ManageInventories.css";
const ManageInventories = () => {
  const [productRerander, setRerander] = useState(0);
  const [products, setProducts] = useInventoryProducts(productRerander);
  let sNo = 1;

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
        Manage Inventories{" "}
        <span className="font-serif text-[#fb923c]">({products.length})</span>
      </h1>
      <div className="m-10">
        <table className="table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Supplier Name</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td data-label="S.No">{sNo++}</td>
                <td data-label="Image">
                  <img
                    className="w-[40px] h-[50px] mx-auto"
                    src={product.img}
                    alt=""
                  />
                </td>
                <td data-label="Name">{product.name}</td>
                <td data-label="Price">৳ {product.price}</td>
                <td data-label="Quantity">
                  {product.quantity} <span className="text-xs">/package</span>
                </td>
                <td data-label="Supplier Name">{product.supplierName}</td>
                <td data-label="Delete">
                  <button
                    onClick={() => handleProductDelete(product._id)}
                    className="bg-orange-400 nav-btn font-semibold px-5 py-2 rounded-lg inline-block my-2 hover:bg-orange-500 mt-5"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageInventories;
