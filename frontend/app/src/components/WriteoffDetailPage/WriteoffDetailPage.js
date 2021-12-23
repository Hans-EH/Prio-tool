import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ApiContext } from '../../contexts/apiContext';

// Local Components
import { ProductBlock } from './ProductBlock/ProductBlock';
import { InfoBlock } from './InfoBlock/InfoBlock';
import SparepartBlock from './SparepartBlock/SparepartBlock';
import StyledContainer from '../Global/StyledContainer/StyledContainer';


const WriteoffDetailPage = () => {

    let params = useParams();
    const API_BASE = useContext(ApiContext);
    const [apiLink] = useState(`${API_BASE}/writeoffs/${params.id}`);

    // Page States
    const [writeoff, setWriteoff] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch data from API
    useEffect(() => {
        let isComponentMounted = true;
        setLoading(true);
        const fetchData = async () => {
            const response = await fetch(apiLink);
            const responseJson = await response.json();
            if (isComponentMounted) {
                setLoading(false);
                setWriteoff(responseJson);
            }
        };
        fetchData();
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
            <div>
                <InfoBlock data={writeoff} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ProductBlock data={writeoff} />
                    <SparepartBlock data={writeoff} />
                </div>

            </div>
        )
    }
}

export default WriteoffDetailPage
