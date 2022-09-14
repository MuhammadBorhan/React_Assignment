import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="flex flex-col md:flex-row px-8 py-4 gap-4">
      <div className="md:w-[80%] w-[100%]">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th className="capitalize text-xl">Product</th>
                <th className="capitalize text-xl">Price</th>
                <th className="capitalize text-xl">Quantity</th>
                <th className="capitalize text-xl">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>X</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>Blue</td>
              </tr>
              <tr>
                <th>X</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
                <td>Purple</td>
              </tr>
              <tr>
                <th>X</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="border rounded-sm">
        <div className="w-96 p-4">
          <h2 className="card-title mb-4">Card totals</h2>
          <div className="flex justify-between items-center">
            <p>Subtotal</p>
            <p>$200.00</p>
          </div>
          <hr className="my-3" />
          <div className="flex justify-between items-center">
            <p>Total</p>
            <p>$4500.00</p>
          </div>
          <div className="">
            <Link to="/thankyou">
              <button className="btn btn-primary rounded-full mx-auto block mt-6 px-16">
                Proceed To Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
