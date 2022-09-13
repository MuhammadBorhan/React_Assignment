import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-x-4">
        <select className="select select-bordered w-40 max-w-xs">
          <option>first</option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
        <select className="select select-bordered w-40 max-w-xs">
          <option>first</option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
        <button>Reset</button>
      </div>

      <div className="flex gap-x-4">
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
