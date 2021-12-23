import React, {useState, useContext} from 'react'
import { ApiContext } from '../../../../contexts/apiContext';
import { useParams } from 'react-router-dom';


/// Icons
import { AiOutlinePlus } from "react-icons/ai";

// Global
import { SuccessToast, ErrorToast } from '../../../Global/PushToast/PushToast';
import { RefreshContext } from '../../../../contexts/refreshContext';




const TableRow = (part) => {
    
    const params = useParams()
    const API_BASE = useContext(ApiContext);
    const [apiLink] = useState(`${API_BASE}/repairs/${params.id}/add/${part.data.part_id}`);


    const setUpdated = useContext(RefreshContext)

    const handleOnClick = () => {
        fetch(apiLink, {
            method: "post"
        }).then(response => {
            if (response.ok) {
                SuccessToast("Sparepart added to repair")
                setUpdated(true);
            } else { ErrorToast("Sparepart couldn't be added to repair") }
        })
    }


    return (
        <tr>
            <td className="px-5 py-5 border-b border-gray-200  text-sm">
                <div className="flex items-center">
                    <div className="ml-0">
                        <p className="text-gray-900 break-all">
                            {part.data.originProductId ? part.data.originProductId : "New spare part"}
                        </p>
                    </div>
                </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200  text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {part.data.name}
                </p>
            </td>

            <td className="px-5 py-5 border-b border-gray-200  text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {part.data.state}
                </p>
            </td>

            <td className="px-5 py-5 border-b border-gray-200  text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {part.data.costPrice} DKK
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200  text-sm">
                <button onClick={handleOnClick} className="flex items-center text-green-500 hover:text-green-900">
                    Add <AiOutlinePlus className="ml-1"/>
                </button>
            </td>
        </tr>
    )
}

export default TableRow
