import React from "react";
import "./Table.css";

const Table = (props) => {
  const { products, handleProductDelete } = props;
  let sNo = 1;
  return (
    <div>
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

export default Table;
