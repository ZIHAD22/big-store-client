import React from "react";
import { Link } from "react-router-dom";
import useInventoryItem from "../../hooks/useInventoryItems";

const InventoryItem = (props) => {
  const {
    item: { _id, img, name, dece, price, quantity, supplierName },
  } = props;
  return (
    <div>
      <div className="flex justify-center">
        <div className="rounded-lg border-2 bg-white max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <div className="p-4">
              <img
                className="rounded-t-lg w-[200px] h-[200px] mx-auto"
                src={img}
                alt=""
              />
            </div>
          </a>
          <div className="px-4 py-2">
            <h5 className="text-gray-900 text-xl cursor-pointer font-medium mb-1">
              {`${name} (${
                dece.length > 60 ? dece.slice(0, 60) + "..." : dece
              })`}
            </h5>
            <h6 className="text-gray-700">Price: {price}</h6>
            <h6 className="text-gray-700">Quantity: {quantity}</h6>
            <h6 className="text-gray-700">Supplier Name: {supplierName}</h6>
          </div>
          <div className="m-2">
            <Link
              to={`inventory/${_id}`}
              className=" inline-block w-full text-center px-6 py-2.5 bg-orange-400 text-white font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-300 hover:shadow-lg focus:bg-orange-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-400 active:shadow-lg transition duration-150 ease-in-out"
            >
              Stock Update
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryItem;
