import React, { useState } from 'react'

// Icons 
import { BsChevronUp } from "react-icons/bs";

// Components
import ProductTypeDescriptor from '../../../Global/Descriptors/Descriptors';
import ProductDetailCollapsed from "./ProductDetailCollapsed";

const ProductDetail = (product) => {
    const [collapsed, setCollapsed] = useState(true);
    const username = product.username;
    
    return (
        <div className="mb-4 min-w-max bg-white shadow-sm rounded-lg">
            <div className="p-4 flex flex-between flex-wrap">

                <ProductTypeDescriptor type={product.data.category} />

                <div className="flex-grow ml-4">
                    <h2>{product.data.name}</h2>
                    <p className="truncate">{product.data.price}</p>
                    <p><span className="font-bold">Purchase price:</span> {product.data.costPrice} DKK</p>
                </div>

                <div className="flex items-center text-2xl px-4 transition ease-in duration-300" onClick={() => { setCollapsed(!collapsed) }}>
                    <BsChevronUp className={`${collapsed && "transform rotate-180"} transition ease-in duration-300`} />
                </div>
            </div>

            <div className={`mb-2 rounded-b-lg p-4 border-t border-gray-200 bg-white ${collapsed && "hidden"}`}>
                <ProductDetailCollapsed product={product.data} username={username}/>
            </div>
        </div>
    )
}

export default ProductDetail
