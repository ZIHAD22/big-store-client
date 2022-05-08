import React from "react";
import { Link } from "react-router-dom";
import useInventoryItem from "../../hooks/useInventoryItems";
import InventoryItem from "../InventoryItem/InventoryItem";

const SpecialItems = () => {
  const [items, setItems] = useInventoryItem();
  return (
    <div className="my-10">
      <h1 className="text-center text-4xl font-serif font-medium">
        Special Items
      </h1>
      <div className="grid grid-cols-responsive gap-10 mx-32 mt-8">
        {items.map((item) => (
          <InventoryItem key={item._id} item={item} />
        ))}
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

export default SpecialItems;
