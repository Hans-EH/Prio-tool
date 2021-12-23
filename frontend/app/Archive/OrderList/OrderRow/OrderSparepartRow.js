import React from 'react'

const OrderSparepartRow = () => {
    return (
        <tr>
            <td className="px-5 py-5 border-b border-gray-200  text-sm">
                <div className="flex items-center">
                    <div className="flex flex-row items-center justify-center ml-0">
                        <label>
                            <input type="checkbox" className='mr-1' />
                        </label>
                        <p className="text-gray-900 whitespace-no-wrap">
                            xF13Gh10
                        </p>
                    </div>
                </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200  text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    Mac Book Pro 256 GB 2020
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200  text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    p2opi242
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200  text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    Battery
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200  text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    Apple
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200  text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    0 pcs.
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200  text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    1399 DKK
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200  text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    13/01/2022
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200  text-sm">
                <p className="text-red-900 whitespace-no-wrap">
                <button>Delete</button>
                </p>
            </td>
        </tr>
    )
}

export default OrderSparepartRow
