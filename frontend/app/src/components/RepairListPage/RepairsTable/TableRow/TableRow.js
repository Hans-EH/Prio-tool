import React, { useState, useEffect} from 'react'
import { Link, useLocation } from "react-router-dom"

const TableRow = ({data}) => {

    const [repairDate, setRepairDate] = useState();

    useEffect(() => {
        setRepairDate(new Date(data.startDate));
        return () => {
            
        }
    }, [data])


    const location = useLocation();
    return (
        <tr className="hover:bg-gray-200">
            <td className="px-5 py-5 border-b border-gray-200  text-sm">
                <div className="flex items-center">
                    <div className="ml-0">
                        <p className="text-gray-900 whitespace-no-wrap">
                            {data.id}
                        </p>
                    </div>
                </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200  text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {data.product.name}
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200  text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    { repairDate !== undefined && repairDate.toUTCString().slice(0,-3)}
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200  text-sm">
                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                    </span>
                    <span className="relative">
                        {data.state}
                    </span>
                </span>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 text-sm">
                <Link to={`${location.pathname}/${data.id}`} className="bg-bluecity py-2 px-4 rounded-full text-white hover:bg-indigo-700">
                    View
                </Link>
            </td>
        </tr>
    )
}

export default TableRow
