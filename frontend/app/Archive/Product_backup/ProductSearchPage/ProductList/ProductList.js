import React from 'react'
import ProductDetail from './ProductDetail/ProductDetail'
import useLocalStorage from '../../../hooks/useLocalStorage';

export const ProductList = (products) => {
    const [username] = useLocalStorage("user");
    return (
        <>
            {products.data.length > 1 ?
                <>
                    {
                        products.data.map((item, key) => {
                            return (
                                <ProductDetail data={item} username={username} key={key} />
                            )
                        })
                    }
                </> :
                <ProductDetail data={products.data} username={username}/>
            }

        </>
    )
}
