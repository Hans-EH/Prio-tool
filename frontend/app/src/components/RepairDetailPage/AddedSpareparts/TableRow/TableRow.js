import React, {useState, useContext} from 'react'
import { useParams } from 'react-router-dom'
import { ApiContext } from '../../../../contexts/apiContext';
import { RefreshContext } from '../../../../contexts/refreshContext';

import { SuccessToast, ErrorToast } from '../../../Global/PushToast/PushToast';

import { MdRemove } from "react-icons/md";

const TableRow = (part) => {

    const params = useParams()
    const API_BASE = useContext(ApiContext);
    const [apiLink] = useState(`${API_BASE}/repairs/${params.id}/remove/${part.data.part_id}`);


    const setUpdated = useContext(RefreshContext)

    const handleOnClick = () => {
        fetch(apiLink, {
            method: "post"
        }).then(response => {
            if (response.ok) {
                SuccessToast("Sparepart removed from repair")
                setUpdated(true);
            } else { ErrorToast("Sparepart couldn't be removed from repair") }
        })
    }
    return (
        <tr>
            <td className="px-5 py-5 border-b border-gray-200  text-sm">
                <div className="flex items-center">
                    <div className="ml-0">
                        <p className="text-gray-900 break-all">
                            {part.data.originProductId ? part.data.originProductId : "No origin productId"}
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
                <button onClick={handleOnClick}  className="flex items-center text-red-500 hover:text-red-900">
                    Remove <MdRemove className="ml-1"/>
                </button>
            </td>
        </tr>
    )
}

export default TableRow
