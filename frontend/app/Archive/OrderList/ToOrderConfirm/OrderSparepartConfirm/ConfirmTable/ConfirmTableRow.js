import React from 'react'

const ConfirmTableRow = () => {
    return (
        <tr>
        <td class="px-5 py-5 border-b border-gray-100 bg-white text-sm">
            <p class="text-gray-900 whitespace-no-wrap">
                Admin
            </p>
        </td>
        <td class="px-5 py-5 border-b border-gray-100 bg-white text-sm">
            <p class="text-gray-900 whitespace-no-wrap">
                Admin
            </p>
        </td>
        <td class="px-5 py-5 border-b border-gray-100 bg-white text-sm">
            <p class="text-gray-900 whitespace-no-wrap">
                12/09/2020
            </p>
        </td>
        <td class="px-5 py-5 border-b border-gray-100 bg-white text-sm">
            <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                </span>
                <span class="relative">
                    active
                </span>
            </span>
        </td>
    </tr>
    )
}

export default ConfirmTableRow
