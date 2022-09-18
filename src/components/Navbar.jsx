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
  const [selectCategory, setSelectCategory] = useState('all');
  const [size, setSize] = useState('size all');

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
    if (selectCategory !== undefined) {
      if (selectCategory == 'all' && size == 'size all') {
        if (searchItem !== '') {
          const newValue = products.filter(product => (product.name.toLowerCase().includes(searchItem.toLowerCase())));
          setFilterValue(newValue)
        } else {
          setFilterValue(products)
        }
      } else if (selectCategory == 'all' && size !== 'size all' && searchItem == '') {
        const newValue = products.filter(product => (product.size.toLowerCase() == size));
        setFilterValue(newValue)
      } else if (searchItem !== '') {
        const newValue = products.filter(product => (product.name.toLowerCase().includes(searchItem.toLowerCase())));
        setFilterValue(newValue)
      } else if (size !== undefined) {
        if (size == 'size all') {
          const newValue = products.filter(product => (product.brand == selectCategory && product.size !== size));
          setFilterValue(newValue)
        } else {
          const newValue = products.filter(product => (product.brand == selectCategory && product.size == size));
          setFilterValue(newValue)
        }
      } else {
        const newValue = products.filter(product => (product.brand == selectCategory));
        setFilterValue(newValue)
      }
    } else if (size !== 'size all') {
      const newValue = products.filter(product => (product.size == size));
      setFilterValue(newValue)
    }
  }, [selectCategory, size, searchItem])

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

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-0">

        <div
          className="flex flex-col md:flex-row gap-y-3 md:gap-y-0 items-center justify-center md:justify-start gap-x-4"
        >
          {/* select products category */}
          <select
            onChange={(e) => {
              setSelectCategory(e.target.value)
            }}
            value={selectCategory}
            className=' mr-3 border cursor-pointer border-gray-600 text-sm font-medium px-2 py-[2px]'>
            <option value='all'>- All</option>
            <option value='Hoodies'>- Hoodies</option>
            <option value='Shirt'>- Shirt</option>
            <option value='Pant'>- Pant</option>
          </select>

          {/* Select Size */}
          <select
            onChange={(e) => {
              setSize(e.target.value)
            }}
            value={size}
            className=' mr-3 border cursor-pointer capitalize border-gray-600 text-sm font-medium px-2 py-[2px] '>
            {
              selectSize.map(size => <option key={size.id}>{size.name.toLowerCase()}</option>)
            }
          </select>

          <div>
            {filterValue.length}
            <button onClick={() => {
              setSize('size all')
              setSelectCategory('all')
              setSearchItem('')
              setFilterValue(products)
            }} className=' cursor-pointer font-bold text-sky-500 flex items-center text-sm font-medium'><FaUndo className=' mr-1 text-xs' />Reset</button>
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
