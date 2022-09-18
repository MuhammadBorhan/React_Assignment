import React, { useEffect, useState } from "react";
import { FaUndo } from "react-icons/fa";
import { Link } from "react-router-dom";

// import category wise product and size from data.js
import { selectCategoryproduct, selectSize } from "../data";

// import component
import Products from "./Products";

const Navbar = () => {
  const [products, setProducts] = useState([]);
  const [filterValue, setFilterValue] = useState([])
  const [selectCategory, setSelectCategory] = useState('all');
  const [size, setSize] = useState('size all');
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
      if (selectCategory === 'all' && size === 'size all') {
        if (searchItem !== '') {
          const newValue = filterValue.filter(product => (product.name.toLowerCase().includes(searchItem.toLowerCase())));
          setProducts(newValue)
        } else {
          setProducts(filterValue)
        }
      } else if (selectCategory === 'all' && size !== 'size all' && searchItem === '') {
        const newValue = filterValue.filter(product => (product.size.toLowerCase() === size));
        setProducts(newValue)
      } else if (searchItem !== '') {
        const newValue = filterValue.filter(product => (product.name.toLowerCase().includes(searchItem.toLowerCase())));
        setProducts(newValue)
      } else if (size !== undefined) {
        if (size == 'size all') {
          const newValue = filterValue.filter(product => (product.brand === selectCategory && product.size !== size));
          setProducts(newValue)
        } else {
          const newValue = filterValue.filter(product => (product.brand === selectCategory && product.size === size));
          setProducts(newValue)
        }
      } else {
        const newValue = filterValue.filter(product => (product.brand === selectCategory));
        setProducts(newValue)
      }
    } else if (size !== 'size all') {
      const newValue = filterValue.filter(product => (product.size === size));
      setProducts(newValue)
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
        <div className="flex flex-col md:flex-row gap-y-3 md:gap-y-0 items-center justify-center md:justify-start gap-x-4">
          {/* select products category */}
          <select onChange={(e) => { setSelectCategory(e.target.value) }}
            value={selectCategory}
            className=' mr-3 border capitalize cursor-pointer border-gray-600 text-sm font-medium px-2 py-[2px]'>
            {selectCategoryproduct.map((category, index) => <option key={index}>{category.name}</option>)}
          </select>

          {/* Select Size */}
          <select onChange={(e) => { setSize(e.target.value) }}
            value={size}
            className=' mr-3 border cursor-pointer capitalize border-gray-600 text-sm font-medium px-2 py-[2px] '>
            {selectSize.map((size, index) => <option key={index}>{size.name.toLowerCase()}</option>)}
          </select>

          {/* Selected Products Length */}
          <div className="text-2xl font-bold">{products.length}</div>

          {/* Reset all  */}
          <button onClick={() => {
            setSize('size all')
            setSelectCategory('all')
            setSearchItem('')
            setProducts(filterValue)
          }} className=' cursor-pointer font-bold text-sky-500 flex items-center text-sm font-medium'><FaUndo className=' mr-1 text-xs' />Reset</button>
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
      <Products products={products}></Products>

    </div>
  );
};

export default Navbar;
