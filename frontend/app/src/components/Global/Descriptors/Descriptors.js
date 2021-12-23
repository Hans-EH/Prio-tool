import React from "react";

// Icons
import { BsPhone, BsLaptop, BsTablet, BsQuestion } from "react-icons/bs";

// Sub-component for Iphone
export const IphoneDescriptor = () => {
    return (
        <div className="p-8 w-28 h-28 max-h-28 bg-blue-500 text-white text-4xl rounded-lg flex justify-center items-center">
            <BsPhone />
        </div>
    )
}

// Sub-component for Macbook
export const MacbookDescriptor = () => {
    return (
        <div className="p-8 w-28 h-28 max-h-28 bg-green-500 text-white text-4xl rounded-lg flex justify-center items-center">
            <BsLaptop />
        </div>
    )
}

// Sub-component for Ipad
export const IpadDescriptor = () => {
    return (
        <div className="p-8 w-28 h-28 max-h-28 bg-indigo-500 text-white text-4xl rounded-lg flex justify-center items-center">
            <BsTablet />
        </div>
    )
}

// Sub-component for Smartphones
export const SmartphoneDescriptor = () => {
    return (
        <div className="p-8 w-28 h-28 max-h-28 bg-red-500 text-white text-4xl rounded-lg flex justify-center items-center">
            <BsPhone />
        </div>
    )
}

// Sub-component for Laptops
export const LaptopDescriptor = () => {
    return (
        <div className="p-8 w-28 h-28 max-h-28 bg-yellow-500 text-white text-4xl rounded-lg flex justify-center items-center">
            <BsLaptop />
        </div>
    )
}

// Sub-component for Tablets
export const TabletDescriptor = () => {
    return (
        <div className="p-8 w-28 h-28 max-h-28 bg-purple-500 text-white text-4xl rounded-lg flex justify-center items-center">
            <BsTablet />
        </div>
    )
}

export const UnknownDescriptor = () => {
    return (
        <div className="p-8 w-28 h-28 max-h-28 bg-gray-300 text-white text-4xl rounded-lg flex justify-center items-center">
            <BsQuestion />
        </div>
    )
}

// Default Descript selects sub components
const ProductTypeDescriptor = (product) => {
    switch (product.type) {
        case "IPHONE":
            return <IphoneDescriptor />
        case "MACBOOK":
            return <MacbookDescriptor />
        case "IPAD":
            return <IpadDescriptor />
        case "SMARTPHONE":
            return <SmartphoneDescriptor />
        case "LAPTOP":
            return <LaptopDescriptor />
        case "TABLET":
            return <TabletDescriptor/>
        default:
            return <UnknownDescriptor />
    }
}

export default ProductTypeDescriptor;