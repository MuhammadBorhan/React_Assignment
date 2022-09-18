import React from "react";
import { FaShoppingCart, FaSmile } from "react-icons/fa";
import './Product.css';

const Products = ({ products }) => {
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
          {products.map((product, index) => {
            const { img, name, price, quantity, color } = product;
            return (
              <tr key={index}>
                <td>
                  <img className="w-16" src={img} alt="" />
                </td>
                <td className="text-blue-500 font-bold">{name}</td>
                <td>{color}</td>
                <td className="flex items-center pt-12 gap-1 text-green-600 font-bold">
                  {" "}
                  <FaSmile /> <span>in-stock</span>
                </td>
                <td>${price}</td>
                <td>{quantity} Pcs</td>
                <td className="flex items-center gap-2">
                  <input
                    className="border bg-gray-200 w-12 text-center font-bold"
                    type="text"
                  // value='1'
                  />
                  <label className="flex gap-2">
                    <span><FaShoppingCart /></span>
                    <input
                      className="cursor-pointer"
                      type="checkbox"
                      name=""
                      id=""
                    />
                  </label>
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
