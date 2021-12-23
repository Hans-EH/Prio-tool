import React from 'react'
import ProductDetail from './ProductDetail/ProductDetail'


export const ProductList = (products) => {
    
    return (
        <>
            {products.data.length > 1 ?
                <>
                    {
                        products.data.map((item, key) => {
                            return (
                                <ProductDetail data={item} key={key} />
                            )
                        })
                    }
                </> :
                <ProductDetail data={products.data[0]}/>
            }
        </>
    )
}
