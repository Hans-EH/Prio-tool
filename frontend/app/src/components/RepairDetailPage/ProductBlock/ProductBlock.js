import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ApiContext } from '../../../contexts/apiContext';
import ProductTypeDescriptor from '../../Global/Descriptors/Descriptors';
import StyledContainer from '../../Global/StyledContainer/StyledContainer';

export const ProductBlock = () => {

    let params = useParams();
    const API_BASE = useContext(ApiContext);
    const [apiLink] = useState(`${API_BASE}/repairs/${params.id}`);
    const [repair, setRepair] = useState();
    const [loading, setLoading] = useState(true);

    // Fetch repair from API
    useEffect(() => {
        let isComponentMounted = true;
        const fetchrepair = async () => {
            const response = await fetch(apiLink);
            const responseJson = await response.json();
            if (isComponentMounted) {
                setRepair(responseJson);
                setLoading(false);
            }
        };
        fetchrepair();
        return () => {
            isComponentMounted = false;
        }
    }, [apiLink]);

    if (loading) {
        return (
            <StyledContainer>
                <p>Loading...</p>
            </StyledContainer>
        )
    } else {
        return (
            <StyledContainer>
                <div className="flex flex-between justify-between flex-wrap">
                    <ProductTypeDescriptor type={repair.product.category} />

                    <div className="mx-auto">
                        <h2>Product ID</h2>
                        <p className="truncate">{repair.product.productId}</p>
                    </div>

                    <div className="mx-auto max-w-xs">
                        <h2>Product Desc.</h2>
                        <p className="truncate whitespace-normal">{repair.product.name}</p>
                    </div>
                    <div className="mx-auto">
                        <h2>Cost Price:</h2>
                        <p className="truncate">{repair.product.costPrice} DKK</p>
                    </div>
                    <div className="mx-auto">
                        <h2>Sales Price:</h2>
                        <p className="truncate">{repair.product.salesPrice} DKK</p>
                    </div>
                </div>
            </StyledContainer>
        )
    }
}