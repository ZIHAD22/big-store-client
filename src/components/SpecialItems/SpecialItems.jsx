import React from "react";
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
    </div>
  );
};

export default SpecialItems;
