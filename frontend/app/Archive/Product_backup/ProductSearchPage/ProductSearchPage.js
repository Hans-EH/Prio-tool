import React, { useState, useEffect, useContext } from 'react'
import { ApiContext } from '../../contexts/apiContext'
import { RefreshContext } from '../../contexts/refreshContext'

// Components
import { ProductList } from './ProductList/ProductList'
import EmptyState from '../Global/EmptyState/EmptyState'
import { SearchBar } from './SearchBar/SearchBar'
import { SidebarMenu } from './SidebarMenu/SidebarMenu'

function ProductSearchPage() {

    // Context for API-route
    const API_BASE = useContext(ApiContext);

    const [apiLink, setApiLink] = useState(API_BASE + "/products");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [updated, setUpdated] = useState(false);

    // Fetch data from API
    useEffect(() => {
        let isComponentMounted = true;
        setLoading(true);
        const fetchData = async () => {
            const response = await fetch(apiLink);
            const responseJson = await response.json();
            if (isComponentMounted) {
                setLoading(false);
                setProducts(responseJson);
            }
        };
        fetchData();
        return () => {
                        setUpdated(false);
            isComponentMounted = false;
        }
    }, [apiLink, updated]);

    // Callback function to update API Link
    const setSearchParam = (value) => {
        // Real LINK for Spring
        if (value !== undefined) {
            setApiLink(`${API_BASE}/products${value}`);
        } else {
            setApiLink(`${API_BASE}/products`)
        }
    }


    return (
        <RefreshContext.Provider value={setUpdated}>
        <div className="container mx-auto">
            <SearchBar setParam={setSearchParam} />

            <div className="grid grid-cols-5 gap-4 mt-4">
 
                <SidebarMenu />

                {loading ?
                    <p>loading..</p> :
                    <div className="col-span-4">
                        {products.length !== 0 ?
                            <ProductList data={products} /> :
                            <EmptyState />
                        }
                    </div>
                }
            </div>
        </div>
        </RefreshContext.Provider>
    )
}

export default ProductSearchPage
