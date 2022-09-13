import React, { useEffect, useState } from "react";

// import product data
import { selectBrand, selectSize } from "../data";
import Products from "./Products";
import useProducts from "./useProducts";

const Navbar = () => {
  const [products, setProducts] = useProducts();
  const [category, setCategory] = useState([]);
  const [item, setItem] = useState({ name: "All" });
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "All") {
      setCategory(products);
    } else {
      const newProjects = products.filter((project) => {
        return project.brand.toLowerCase() === item.name;
      });
      setCategory(newProjects);
    }
  }, [item.name, products]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-0">
        <form className="flex items-center justify-center md:justify-start gap-x-4">
          {/* Product selection */}
          <select className="select select-bordered w-40 max-w-xs">
            {selectBrand.map((item, index) => {
              return (
                <option
                  onClick={(e) => {
                    handleClick(e, index);
                  }}
                  className={`${
                    active === index ? "text-blue-500 font-bold" : ""
                  }`}
                  key={index}
                >
                  -{item.name}
                </option>
              );
            })}
          </select>

          {/* Size Selection */}
          <select className="select select-bordered w-40 max-w-xs">
            <option disabled selected>
              Size
            </option>
            {selectSize.map((item, index) => {
              return <option key={index}>{item.name}</option>;
            })}
          </select>
          <input className="cursor-pointer" type="reset" value="Reset" />
        </form>

        <div className="flex items-center justify-center md:justify-end gap-x-4">
          <div>
            <label className="mr-2">Search:</label>
            <input
              type="text"
              className="input input-bordered h-10 w-48 max-w-xs"
            />
          </div>
          <button className="btn">Add To Cart</button>
        </div>
      </div>
      <Products products={category}></Products>
    </div>
  );
};

export default Navbar;
