import React from "react";
import { Link } from 'react-router-dom';

const OrderSparepartButton = () => {
  return (

    <div className="flex flex-row pt-2 px-4 mt-4 sm:mb-0 justify-between w-full">
      <h2 className="text-2xl leading-tight">
      </h2>
      <div className="flex space-x-4">
        <Link
          to="/orderlist/ordersparepart/orderlistconfirm"
          className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-bluecity_dark rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200">
          Confirm order list
        </Link>
        <Link
          to="/orderlist"
          className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-red-700 rounded-lg shadow-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-purple-200">
          Cancel
        </Link>
      </div>
    </div>
  );
};

export default OrderSparepartButton;
