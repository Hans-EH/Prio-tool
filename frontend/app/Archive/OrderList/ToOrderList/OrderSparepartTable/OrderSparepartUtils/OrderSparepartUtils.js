import React from 'react'
import { Link } from 'react-router-dom';

const OrderSparepartUtils = () => {

    return (
        <div className="flex flex-row pb-4 px-4 sm:mb-0 justify-between w-full">
            <h2 className="text-2xl leading-tight">
                Spare part order suggestions
            </h2>
            <div className="text-end flex space-x-4">
                <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                    <div className=" relative ">
                        <input type="text" id="&quot;form-subscribe-Filter" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4  text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Search.." />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default OrderSparepartUtils
