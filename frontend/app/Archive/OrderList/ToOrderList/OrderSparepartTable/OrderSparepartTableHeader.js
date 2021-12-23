import React from 'react'
import { TiArrowUnsorted } from "react-icons/ti";

const OrderSparepartTableHeader = () => {
    return (
        <tr>
        <th
          scope="col"
          className="px-5 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
        >
        </th>
        <th
          scope="col"
          className="px-5 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
        >
            Order ID
        </th>
        <th
          scope="col"
          className="px-5 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
        >
            PRODUCT
        </th>
        <th
          scope="col"
          className="px-5 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
        >
            SKU NR.
        </th>
        <th
          scope="col"
          className="px-5 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
        >
            TYPE
        </th>
        <th
          scope="col"
          className="px-5 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
        >
            BRAND
        </th>
        <th
          scope="col"
          className="px-5 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
        >
            QUANTITY
        </th>
        <th
          scope="col"
          className="px-5 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
        >
            PRICE PER UNIT
        </th>
        <th
          scope="col"
          className="px-5 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
        >
            DELIVERY DATE
        </th>
      </tr>
    )
}

export default OrderSparepartTableHeader
