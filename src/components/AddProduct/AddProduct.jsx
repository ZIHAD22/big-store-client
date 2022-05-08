import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../fireBase.init";

const AddProduct = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const handleAddProduct = (data) => {
    axios
      .post("https://tranquil-anchorage-25651.herokuapp.com/products", data)
      .then((res) => {
        if (res.status === 200) {
          reset();
        }
      });
  };
  return (
    <div>
      <div className="bg-registration-img h-screen bg-center bg-cover">
        <div className="opacity-90 bg-white h-full">
          <form onSubmit={handleSubmit(handleAddProduct)}>
            <h1 className="text-4xl pt-1 font-serif text-center">
              Add inventory item
            </h1>
            <div className="w-1/2 mx-auto mt-10">
              {/* part 1 */}
              <div className="grid grid-cols-2 gap-x-2">
                <div>
                  <input
                    type="text"
                    className="form-control w-full mt-4 block px-3 py-1.5 text-font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out border-orange-300 outline-hidden m-0 focus:text-gray-800 focus:bg-white focus:outline-orange-400"
                    id="itemName"
                    {...register("name", { required: "Required" })}
                    placeholder="Item Name"
                  />
                  <div>
                    {errors && (
                      <p className="text-red-600">{errors.name?.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    defaultValue={user?.email}
                    readOnly
                    className="form-control w-full mt-4 block px-3 py-1.5 text-font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out border-orange-300 outline-hidden m-0 focus:text-gray-800 focus:bg-white focus:outline-orange-400"
                    id="email"
                    {...register("email", { required: "Required" })}
                    placeholder="Email"
                  />
                  <div>
                    {errors && (
                      <p className="text-red-600">{errors.email?.message}</p>
                    )}
                  </div>
                </div>
              </div>
              {/* part 2 */}
              <div className="grid grid-cols-2 gap-x-2">
                <div>
                  <input
                    type="text"
                    className="form-control w-full mt-4 block px-3 py-1.5 text-font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out border-orange-300 outline-hidden m-0 focus:text-gray-800 focus:bg-white focus:outline-orange-400"
                    id="img"
                    {...register("img", { required: "Required" })}
                    placeholder="Image Url"
                  />
                  <div>
                    {errors && (
                      <p className="text-red-600">{errors.img?.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <input
                    type="number"
                    className="form-control w-full mt-4 block px-3 py-1.5 text-font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out border-orange-300 outline-hidden m-0 focus:text-gray-800 focus:bg-white focus:outline-orange-400"
                    id="price"
                    {...register("price", { required: "Required" })}
                    placeholder="Price in BDT"
                  />
                  <div>
                    {errors && (
                      <p className="text-red-600">{errors.price?.message}</p>
                    )}
                  </div>
                </div>
              </div>
              {/* part 3 */}
              <div className="grid grid-cols-2 gap-x-2">
                <div>
                  <input
                    type="number"
                    className="form-control w-full mt-4 block px-3 py-1.5 text-font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out border-orange-300 outline-hidden m-0 focus:text-gray-800 focus:bg-white focus:outline-orange-400"
                    id="quantity"
                    {...register("quantity", { required: "Required" })}
                    placeholder="Quantity"
                  />
                  <div>
                    {errors && (
                      <p className="text-red-600">{errors.quantity?.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    className="form-control w-full mt-4 block px-3 py-1.5 text-font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out border-orange-300 outline-hidden m-0 focus:text-gray-800 focus:bg-white focus:outline-orange-400"
                    id="supplierName"
                    {...register("supplierName", { required: "Required" })}
                    placeholder="Supplier Name"
                  />
                  <div>
                    {errors && (
                      <p className="text-red-600">
                        {errors.supplierName?.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-x-2">
                <textarea
                  type="text"
                  className="form-control w-full mt-4 block px-3 py-1.5 text-font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out border-orange-300 outline-hidden m-0 focus:text-gray-800 focus:bg-white focus:outline-orange-400"
                  id="dece"
                  {...register("dece", { required: "Required" })}
                  placeholder="Description"
                />
                <div>
                  {errors && (
                    <p className="text-red-600">{errors.dece?.message}</p>
                  )}
                </div>
              </div>

              <div className="text-center mt-5">
                <button
                  type="submit"
                  className="bg-orange-400 nav-btn font-semibold px-5 py-2 rounded-lg inline-block w-1/2 my-2 hover:bg-orange-500"
                >
                  Add Item
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
