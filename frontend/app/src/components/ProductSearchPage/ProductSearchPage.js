import React, { useState, useEffect, useContext } from 'react'
import { ApiContext } from '../../contexts/apiContext'
import { RefreshContext } from '../../contexts/refreshContext'

// Components
import { ProductList } from './ProductList/ProductList'
import { SearchBar } from './SearchBar/SearchBar'
import EmptyState from '../Global/EmptyState/EmptyState'
import CounterList from './CounterList/CounterList'

function ProductSearchPage() {

    // Context for API-route
    const API_BASE = useContext(ApiContext);

    const [apiLink, setApiLink] = useState(API_BASE + "/products");
    const [loading, setLoading] = useState(false);

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selected, setSelected] = useState(0);
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

    //For changing the repair list to the selected fields
    useEffect(() => {
        let isComponentMounted = true;
        if (isComponentMounted) {
            switch (selected) {
                case 0: setFilteredProducts([]); break;
                case 1: setFilteredProducts(products.filter(repair => repair.state === 'DEFECTIVE')); break;
                case 2: setFilteredProducts(products.filter(repair => repair.state === 'IN_REPAIR')); break
                case 3: setFilteredProducts(products.filter(repair => repair.state === 'REPAIRED')); break
                case 4: setFilteredProducts(products.filter(repair => repair.state === 'IN_WRITEOFF')); break;
                case 5: setFilteredProducts(products.filter(repair => repair.state === 'WRITTEN_OFF')); break
                default: setFilteredProducts([]);
            }
        }
        return () => {
            isComponentMounted = false;
        }
    }, [selected, API_BASE, products]);

    // Callback function to update API Link
    const setSearchParam = (value) => {
        setSelected(0);

        // Real LINK for Spring
        if (value !== undefined) {
            setApiLink(`${API_BASE}/products${value}`);
        } else {
            setApiLink(`${API_BASE}/products`)
        }
    }

    // Callback function to update selected
    const handleSeleted = (value) => {
        if (value >= 0 && value <= 5) {
            setSelected(value);
        }
    }

    return (
        <RefreshContext.Provider value={setUpdated}>
            <div className="container mx-auto">
                <div className="grid grid-cols-5 gap-x-8 mt-4">
                    {loading ?
                        <p>loading..</p> :
                        <>
                            <CounterList data={products} handleSeleted={handleSeleted} stateSelected={selected} />
                            <div className="col-span-4">
                                <SearchBar setParam={setSearchParam} />

                                {products.length !== 0 ?
                                    <>
                                        {filteredProducts.length > 0 ?
                                            <ProductList data={filteredProducts} /> :
                                            <ProductList data={products} />
                                        }
                                    </> :
                                    <EmptyState />
                                }
                            </div>
                        </>
                    }
                </div>
            </div>
        </RefreshContext.Provider>
    )
}

export default ProductSearchPage
