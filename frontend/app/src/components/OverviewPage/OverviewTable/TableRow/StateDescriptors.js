
import React from 'react'

export const DefectiveDescriptor = ({ state }) => {
    return (
        <span className="relative inline-block px-3 py-1 font-semibold text-gray-900 leading-tight">
            <span aria-hidden="true" className="absolute inset-0 bg-red-200 opacity-50 rounded-full">
            </span>
            <span className="relative">
                {state}
            </span>
        </span>
    )
}

export const RepairDescriptor = ({ state }) => {
    return (
        <span className="relative inline-block px-3 py-1 font-semibold text-gray-900 leading-tight">
            <span aria-hidden="true" className="absolute inset-0 bg-yellow-200 opacity-50 rounded-full">
            </span>
            <span className="relative">
                {state}
            </span>
        </span>
    )
}

export const RepairedDescriptor = ({ state }) => {
    return (
        <span className="relative inline-block px-3 py-1 font-semibold text-gray-900 leading-tight">
            <span aria-hidden="true" className="absolute inset-0 bg-blue-200 opacity-50 rounded-full">
            </span>
            <span className="relative">
                {state}
            </span>
        </span>
    )
}

export const WriteoffDescriptor = ({ state }) => {
    return (
        <span className="relative inline-block px-3 py-1 font-semibold text-gray-900 leading-tight">
            <span aria-hidden="true" className="absolute inset-0 bg-yellow-200 opacity-50 rounded-full">
            </span>
            <span className="relative">
                {state}
            </span>
        </span>
    )
}

export const WrittenoffDescriptor = ({ state }) => {
    return (
        <span className="relative inline-block px-3 py-1 font-semibold text-gray-900 leading-tight">
            <span aria-hidden="true" className="absolute inset-0 bg-blue-200 opacity-50 rounded-full">
            </span>
            <span className="relative">
                {state}
            </span>
        </span>
    )
}

const ProductStateDescriptor = ({ state }) => {
    switch (state) {
        case "DEFECTIVE":
            return <DefectiveDescriptor state={state} />
        case "IN_REPAIR":
            return <RepairDescriptor state={state} />
        case "REPAIRED":
            return <RepairedDescriptor state={state} />
        case "IN_WRITEOFF":
            return <WriteoffDescriptor state={state} />
        case "WRITTEN_OFF":
            return <WrittenoffDescriptor state={state} />
        default:
            return <>NO STATE</>
    }
}

export default ProductStateDescriptor;
