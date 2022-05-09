import { logDOM } from "@testing-library/react";
import axios from "../../axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useInventoryProducts from "../../hooks/useInventoryProducts";
import Table from "../Table/Table";
import Loading from "../Loading/Loading";

const ManageInventories = () => {
  const [productRerander, setRerander] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [dataLength, setDataLeangth] = useState(0);
  const [page, setPage] = useState(0);
  const [pagenationLoading, setPagenationLoading] = useState(true);
  const [pageSize, setPageSize] = useState(2);
  const [products, setProducts, dataLoading] = useInventoryProducts(
    productRerander,
    page,
    pageSize
  );

  useEffect(() => {
    axios.get("/productCount").then((res) => {
      const count = res.data.count;
      setDataLeangth(count);
      const pages = Math.ceil(count / pageSize);
      setPageCount(pages);
      if (res.status) {
        setPagenationLoading(false);
      }
    });
  }, [pageSize]);

  const handleProductDelete = (id) => {
    const confirmed = window.confirm("Are You Sure ?");
    if (confirmed) {
      axios.delete(`products/${id}`).then((res) => {
        if (res.status === 200) {
          setRerander(productRerander + 1);
        }
      });
    }
  };

  if (dataLoading || pagenationLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="text-4xl text-center font-serif font-semibold my-9">
        Manage Inventories
        <span className="font-serif text-[#fb923c]">({dataLength})</span>
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
      <div className="text-center mb-10">
        {[...Array(pageCount).keys()].map((number) => (
          <button
            key={number}
            onClick={() => setPage(number)}
            className={
              page === number
                ? "bg-gray-400 nav-btn text-xs font-semibold px-5 py-2 rounded-lg inline-block my-2 mx-4 hover:bg-gray-600 mt-5"
                : "bg-orange-400 nav-btn  text-xs font-semibold px-5 py-2 rounded-lg inline-block my-2 mx-4 hover:bg-orange-500 mt-5"
            }
          >
            {number + 1}
          </button>
        ))}
        <select
          onChange={(e) => setPageSize(e.target.value)}
          className="border-3 p-2 ms-4"
          name=""
          defaultValue={2}
          id=""
        >
          <option value="2">2</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default ManageInventories;
