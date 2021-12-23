import React from 'react'

const SparepartTableRow = (props) => {
    
    return (
        
        <tr>
            {props.data !== undefined && <>
            <td className="px-5 py-5 border-b border-gray-100 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {props.data.part_id}
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-100 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {props.data.originProductId}
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-100 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {props.data.type}
                </p>
            </td>
            </>
            }
        </tr>
        
    )
}

export default SparepartTableRow
