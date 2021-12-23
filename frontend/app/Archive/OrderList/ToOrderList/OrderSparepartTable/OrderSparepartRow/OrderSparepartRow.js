import React, {useState} from 'react'

const OrderSparepartRow = (props) => {
    const [checkState, setCheckState] = useState(false);

    const handleChange = (e) => {
        setCheckState(!checkState);
    }

    return (
        <tr>
            <td className="px-5 py-5 border-b border-gray-200 ">
                <div className="flex items-center justify-center">
                <label>
                    <input type="checkbox" className='mr-1' onChange={handleChange} />
                </label>
                </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200  text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    xF13Gh10
                 </p>
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
        </tr>
    )
}

export default OrderSparepartRow
