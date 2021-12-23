import React from 'react'
import { ProductDropzone } from './Dropzone/ProductDropzone'
import { ProductForm } from './ProductForm/ProductForm'

const ProductAddPage = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <ProductForm />
            <ProductDropzone />
        </div>
    )
}

export default ProductAddPage;