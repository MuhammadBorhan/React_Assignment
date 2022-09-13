import React from "react";
import { FaShoppingCart, FaSmile } from "react-icons/fa";

const Products = ({ products, searchItem }) => {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="table w-full">
        <thead className="capitalize">
          <tr style={{ borderBottom: "2px solid gray" }}>
            <th className="capitalize text-xl">Image</th>
            <th className="capitalize text-xl">Name</th>
            <th className="capitalize text-xl">Color</th>
            <th className="capitalize text-xl">Stock</th>
            <th className="capitalize text-xl">Price</th>
            <th className="capitalize text-xl">Available</th>
            <th className="capitalize text-xl pl-20">Buy</th>
          </tr>
        </thead>
        <tbody>
          {products
            .filter((val) => {
              if (searchItem === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchItem.toLowerCase())
              ) {
                return val;
              }
            })
            .map((product, index) => {
              const { img, name, price, quantity } = product;
              return (
                <tr key={index}>
                  <td>
                    <img className="w-16" src={img} alt="" />
                  </td>
                  <td className="text-blue-500 font-bold">{name}</td>
                  <td>Blue</td>
                  <td className="flex items-center pt-12 gap-1 text-green-600 font-bold">
                    {" "}
                    <FaSmile /> <span>in-stock</span>
                  </td>
                  <td>${price}</td>
                  <td>{quantity} Pcs</td>
                  <td>
                    <input
                      className="border bg-gray-200 w-12 text-center font-bold"
                      type="text"
                    />
                    <button className="mx-2 w-12 bg-black text-white px-4 py-1">
                      <FaShoppingCart />
                    </button>
                    <input
                      className="cursor-pointer"
                      type="checkbox"
                      name=""
                      id=""
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
