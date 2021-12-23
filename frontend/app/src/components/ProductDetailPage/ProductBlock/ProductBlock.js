import React, { useState, useEffect, useContext } from 'react'
import { useParams, Redirect} from 'react-router-dom';

// Contexts
import { ApiContext } from '../../../contexts/apiContext';

// Global Components
import StyledContainer from '../../Global/StyledContainer/StyledContainer';
import ProductTypeDescriptor from '../../Global/Descriptors/Descriptors';
import { SuccessToast, ErrorToast } from '../../Global/PushToast/PushToast';

// Hooks
import useLocalStorage from '../../../hooks/useLocalStorage';

export const ProductBlock = (props) => {

    let params = useParams();
    const API_BASE = useContext(ApiContext);

    const [apiLink] = useState(`${API_BASE}/products/${params.id}`);
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(false);

    // START REPAIR HANDLING
    const [username] = useLocalStorage("user");
    const [repairLink, setRepairLink] = useState();
    const [respId, setRespId] = useState(null);
    const [redirect, setRedirect] = useState(false);

    // Fetch data from API
    useEffect(() => {
        let isComponentMounted = true;
        setLoading(true);
        const fetchData = async () => {
            const response = await fetch(apiLink);
            const responseJson = await response.json();
            if (isComponentMounted) {
                setLoading(false);
                setProduct(responseJson);
                setRepairLink(`${API_BASE}/repairs/?prod_id=${responseJson.id}&tech_id=${username}`);
            }
        };
        fetchData();
        return () => {
            isComponentMounted = false;
        }
    }, [apiLink, API_BASE, username, repairLink]);


    // Redirect Handling
    const handleStartRepair = async () => {
        const response = await fetch(repairLink, { method: "post" })
        const responseText = await response.text();

        if (response.ok) {
            SuccessToast(`Repair started for ${product.id}`)
            setRespId(responseText);
            //setUpdated(true);
        } else {
            ErrorToast(`Repair couldn't started for ${product.id}`)
        }
    }

    useEffect(() => {
        if (respId) {
            setRedirect(true);
        }
    }, [respId])

    if (redirect) {
        return <Redirect to={`/repairs`} />
    }

    return (
        <StyledContainer>
            {loading ? <>Loading..</> :
                <>
                    {product !== undefined && <>
                        <div className="grid grid-cols-2 md:grid-cols-5">
                            <ProductTypeDescriptor type={product.category} />

                            <div className="px-4 md:col-start-2 md:col-span-4 flex justify-between flex-wrap">

                                <div className="w-1/2 mb-3">
                                    <p className="font-bold mr-2">Product Id:</p>
                                    <p className="font-light">{product.productId}</p>
                                </div>

                                <div className="w-1/2 mb-3">
                                    <p className="font-bold mr-2">State:</p>
                                    <p className="font-light font-mono">{product.state}</p>
                                </div>

                                <div className="w-1/2 mb-3">
                                    <p className="font-bold mr-2 mb-0">Date added:</p>
                                    <p className="font-light">{product.dateAdded}</p>
                                </div>

                                <div className="w-1/2 mb-3">
                                    <p className="font-bold mr-2">Cost Price:</p>
                                    <p className="font-light">{product.costPrice} DKK</p>
                                </div>

                                <div className="w-1/2 mb-3">
                                    <p className="font-bold mr-2">Stock days:</p>
                                    <p className="font-light">{product.storageTime}</p>
                                </div>

                                <div className="w-1/2 mb-3">
                                    <p className="font-bold mr-2">Sales Price:</p>
                                    <p className="font-light">{product.salesPrice} DKK</p>
                                </div>

                                <div className="mb-3">
                                    <p className="font-bold mr-2">Defective Comment:</p>
                                    <p className="font-light break-words">
                                        {product.defectiveComment == null ? <>undefined</> : <>{product.defectiveComment}</>}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {product.state === "DEFECTIVE" &&
                            <>
                                <div className="flex place-content-end">
                                    <button
                                        type="button"
                                        onClick={handleStartRepair}
                                        className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-bluecity_dark rounded-lg shadow-md hover:bg-blue-700 focus:outline-none mr-2"
                                    >
                                        Start Repair
                                    </button>

                                    <button
                                        type="button"
                                        onClick={props.handler}
                                        className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-bluecity_dark rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
                                    >
                                        Start Loss
                                    </button>
                                </div>
                            </>
                        }
                    </>}
                </>
            }

        </StyledContainer>
    )
}