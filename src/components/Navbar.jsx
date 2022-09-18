import React, { useEffect, useState } from "react";
import { FaUndo } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSmile } from "react-icons/fa";

// import brand name and size from data.js
import { brandProducts, selectBrand, selectSize } from "../data";

import Products from "./Products";

const Navbar = () => {
  const [products, setProducts] = useState([]);
  const [filterValue, setFilterValue] = useState([])
  const [selectValue, setselectValue] = useState('all');
  const [size, setSize] = useState('all');

  // Searching Functionality State
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setFilterValue(data)
      });
  }, []);

  useEffect(() => {
    if (selectValue !== undefined) {
      if (selectValue == 'all' && size == 'all') {
        if (searchItem !== '') {
          const newValue = products.filter(product => (product.name.toLowerCase().includes(searchItem.toLowerCase())));
          setFilterValue(newValue);
        } else {
          setFilterValue(products);
        }
      } else if (selectValue == 'all' && size !== 'all' && searchItem == '') {
        const newValue = products.filter(product => (product.size === size));
        setFilterValue(newValue);
      } else if (searchItem !== '') {
        const newvalue = products.filter(product => (product.name.toLowerCase().includes(searchItem.toLowerCase())));
        setFilterValue(newvalue);
      } else if (size !== undefined) {
        if (size == 'all') {
          const newValue = products.filter(product => (product.brand == selectValue && product.size !== size));
          setFilterValue(newValue);
        }
      } else {
        const newValue = products.filter(product => (product.brand == selectValue));
        setFilterValue(newValue);
      }
    } else if (size !== 'all') {
      const newValue = products.filter(product => (product.size == size));
      setFilterValue(newValue);
    }
  }, [selectValue, size, searchItem]);

  let data = []
  const handelValue = ({ id }) => {
    const newArr = products.filter(data => data.id == id);
    const duble = data.find(d => d.id == id)
    if (duble) {
      const newArr = data.filter(da => da.id !== duble.id);
      data = newArr
    } else {
      data.push(...newArr)
    }

  }

  const handelCount = ({ value, id }) => {

    if (value) {
      const ProductCount = data.filter(d => d.id == id);
      if (ProductCount.length) {
        console.log('if');
        const objIndex = data.findIndex((obj => obj.id == id));
        data[objIndex].count = value;
      }
    }
  }

  // const handleClick = (e, index) => {
  //   setItem({ name: e.target.textContent.toLowerCase() });
  //   setActive(index);
  // };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-0">

        <div
          className="flex flex-col md:flex-row gap-y-3 md:gap-y-0 items-center justify-center md:justify-start gap-x-4"
        >
          {/* select products */}
          <select
            onChange={(e) => {
              setselectValue(e.target.value)
            }}
            value={selectValue}
            className=' mr-3 border cursor-pointer border-gray-600 text-sm font-medium px-2 py-[2px]'>
            <option value='all'>- All</option>
            <option value='Hoodies'>- Hoodies</option>
            <option value='Shirt'>- Shart</option>
            <option value='Pant'>- Pant</option>
          </select>

          {/* Size Selection */}
          <select
            onChange={(e) => {
              setSize(e.target.value)
            }}
            value={size}
            className=' mr-3 border cursor-pointer border-gray-600 text-sm font-medium px-2 py-[2px] '>
            <option disabled value='all'>- all</option>
            <option value='m'>- m</option>
            <option value='l'>- l</option>
            <option value='xl'>- xl</option>
          </select>

          <div>
            <button onClick={() => {
              setSize('all')
              setselectValue('all')
              setSearchItem('')
              setFilterValue(products)
            }} className=' cursor-pointer flex items-center text-sm font-medium'><FaUndo className=' text-sky-500 mr-1 text-xs' />Reset</button>
          </div>
        </div>

        {/* Search input and Add To Cart */}
        <div className="flex flex-col md:flex-row gap-y-3 md:gap-y-0 items-center justify-center md:justify-end gap-x-4">
          {/* Search product */}
          <div>
            <label className="mr-2 text-xl">Search:</label>
            <input
              type="text"
              className="input input-bordered h-10 w-48 max-w-xs"
              onChange={(e) => {
                setSearchItem(e.target.value);
              }}
              value={searchItem}
            />
          </div>

          {/* Add To Cart Button */}
          <Link to="/checkout">
            <button className=' py-[6px] rounded-sm px-3 bg-sky-400 text-white text-sm font-medium'>Add To Cart</button>
          </Link>
        </div>
      </div>
      <Products products={filterValue} searchItem={searchItem}></Products>

    </div>
  );
};

export default Navbar;
