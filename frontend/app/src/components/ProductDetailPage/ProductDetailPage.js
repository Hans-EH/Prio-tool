import React, { useState } from 'react'

// Components
import { ProductBlock } from "./ProductBlock/ProductBlock";
import { ProductSpareparts } from './ProductSpareparts/ProductSpareparts';

const ProductDetailPage = () => {

    const [woStarted, setWoStarted] = useState(false);

    const handler = () => {
        setWoStarted(!woStarted);
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">

            <ProductBlock handler={handler} />

            {woStarted && <ProductSpareparts />}
        </div>
    )
}

export default ProductDetailPage
