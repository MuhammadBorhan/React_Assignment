import React, { useEffect, useState } from "react";
import { FaUndo } from "react-icons/fa";
import { Link } from "react-router-dom";

// import brand name and size from data.js
import { brandProducts, selectBrand, selectSize } from "../data";

// import json data useProduct.jsx
import useProducts from "./useProducts";

import Products from "./Products";

const Navbar = () => {
  const [products, setProducts] = useProducts();
  //   let itemsNew = products;
  //   const [category, setCategory] = useState(itemsNew);

  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  // Searching Functionality State
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    if (item.name === "all") {
      setProjects(products);
    } else {
      const newProjects = products.filter((project) => {
        return project.brand.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item, products]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-0">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col md:flex-row gap-y-3 md:gap-y-0 items-center justify-center md:justify-start gap-x-4"
        >
          {/* Product Brand selection */}
          {/* <select className="select select-bordered w-40 max-w-xs">
            {selectBrand.map((item, index) => {
              return (
                <option
                  onClick={(e) => {
                    handleClick(e, index);
                  }}
                  className={`${
                    active === index ? "text-red-500" : ""
                  } cursor-pointer capitalize m-4`}
                  key={index}
                >
                  {item.name}
                </option>
              );
            })}
          </select> */}
          <ul className="flex flex-col md:flex-row  justify-evenly items-center text-black">
            {selectBrand.map((item, index) => {
              return (
                <li
                  onClick={(e) => {
                    handleClick(e, index);
                  }}
                  className={`${
                    active === index ? "text-red-500" : ""
                  } cursor-pointer capitalize m-4`}
                  key={index}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
          {/* Size Selection */}
          <select className="select select-bordered w-40 max-w-xs">
            <option disabled selected>
              Size
            </option>
            {selectSize.map((item, index) => {
              return <option key={index}>{item.name}</option>;
            })}
          </select>
          <div className="flex items-center gap-1 text-blue-500 font-bold">
            <FaUndo />
            <input className="cursor-pointer" type="reset" value="Reset" />
          </div>
        </form>

        {/* Search input */}
        <div className="flex flex-col md:flex-row gap-y-3 md:gap-y-0 items-center justify-center md:justify-end gap-x-4">
          <div>
            <label className="mr-2 text-xl">Search:</label>
            <input
              type="text"
              className="input input-bordered h-10 w-48 max-w-xs"
              onChange={(event) => {
                setSearchItem(event.target.value);
              }}
            />
          </div>

          {/* Add To Cart Button */}
          <Link to="/checkout">
            <button className="bg-blue-500 text-white font-bold px-5 py-2 rounded">
              Add To Cart
            </button>
          </Link>
        </div>
      </div>
      <Products products={projects} searchItem={searchItem}></Products>
    </div>
  );
};

export default Navbar;
