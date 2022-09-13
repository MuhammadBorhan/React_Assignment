import React from "react";

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
            <th className="capitalize text-xl">Buy</th>
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
              const { img, name, price } = product;
              return (
                <tr key={index}>
                  <td>
                    <img className="w-16" src={img} alt="" />
                  </td>
                  <td>{name}</td>
                  <td>Blue</td>
                  <td>in-stock</td>
                  <td>${price}</td>
                  <td>Blue</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
