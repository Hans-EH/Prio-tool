import React from 'react'
import { Link, useLocation } from "react-router-dom"

// Icons
import { AiOutlineCheck} from "react-icons/ai";
import { TiDelete} from "react-icons/ti";

const TableRow = (props) => {
    
    const location = useLocation();
    return (
        <tr className="hover:bg-gray-200">
            <td className="p-5 border-b border-gray-200  text-sm">
                <div className="flex items-center">
                    <div className="ml-0">
                        <p className="text-gray-900 whitespace-no-wrap">
                            {props.data.technicianName}
                        </p>
                    </div>
                </div>
            </td>
            <td className="p-5 border-b border-gray-200  text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {props.data.product.productId}
                </p>
            </td>
            <td className="p-5 border-b border-gray-200  text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {props.data.creationDate.slice(0,10) + " " + props.data.creationDate.slice(11,19)}
                </p>
            </td>
            <td className="p-5 border-b border-gray-200  text-sm">
                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                    </span>
                    <span className="relative">
                        {props.data.state}
                    </span>
                </span>
            </td>
            <td className="p-5 border-b border-gray-200 text-sm">
                <Link to={`${location.pathname}/${props.data.id}`} className="bg-bluecity py-2 px-4 rounded-full text-white hover:bg-indigo-700">
                    View
                </Link>
            </td>
            <td className="p-5 border-b border-gray-200 text-md">
                    <button onClick={() => {props.handleApproveClick(props.data.id)}}
                    className='bg-green-500 py-2 px-4 rounded-full text-white hover:bg-green-800'>
                        <AiOutlineCheck/>
                    </button>
            </td>
            <td className="p-5 border-b border-gray-200 text-md">
                    <button onClick={() => {props.handleDeclineClick(props.data.id)}}
                    className='bg-red-500 py-2 px-4 rounded-full text-white hover:bg-red-700'>
                        <TiDelete/>
                    </button>
            </td>
        </tr>
    )
}

export default TableRow
