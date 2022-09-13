import React, { useEffect, useState } from "react";

// import product data
import { selectBrand, selectSize } from "../data";

const Navbar = () => {
  const [item, setItem] = useState({ name: "Hoodies" });
  const [active, setActive] = useState(0);

  useEffect(() => {
    // get products by category
  }, []);

  const handleReset = () => {};
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-0">
      <form className="flex items-center justify-center md:justify-start gap-x-4">
        {/* Product selection */}
        <select className="select select-bordered w-40 max-w-xs">
          {selectBrand.map((item, index) => {
            return <option key={index}>-{item.name}</option>;
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
  );
};

export default Navbar;
