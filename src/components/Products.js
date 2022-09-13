import React, { useEffect, useState } from "react";

// product data

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
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
          {products.map((product, index) => {
            const { img, name, price } = product;
            return (
              <tr key={index}>
                <td>
                  <img className="w-16" src={img} alt="" />
                </td>
                <td>{name}</td>
                <td>Blue</td>
                <td>on-stock</td>
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
