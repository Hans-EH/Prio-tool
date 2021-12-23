import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ApiContext } from '../../../contexts/apiContext';
import StyledContainer from '../../Global/StyledContainer/StyledContainer'

export const InfoBlock = () => {

    let params = useParams();
    const API_BASE = useContext(ApiContext);
    const [apiLink] = useState(`${API_BASE}/repairs/${params.id}`);
    const [repair, setRepair] = useState();
    const [repairDate, setRepairDate] = useState();
    const [repairEnd, setRepairEnd] = useState();
    const [loading, setLoading] = useState(true);

    // Fetch repair from API
    useEffect(() => {
        let isComponentMounted = true;
        const fetchrepair = async () => {
            const response = await fetch(apiLink);
            const responseJson = await response.json();
            if (isComponentMounted) {
                setRepairDate(new Date(responseJson.startDate));
                if (responseJson.repairEnd !== null) {
                    setRepairEnd(new Date(responseJson.endDate));
                }
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
                <h2 className="title-font font-bold mb-4 text-2xl text-bluecity_dark">{repair.title}</h2>
                <div className="grid grid-cols-3 grid-rows-2 gap-4">
                    <div className="p-3 col-start-1">
                        <h2 className="title-font font-medium text-xl text-gray-900">Repair id:</h2>
                        <p className="leading-strong">{repair.id}</p>
                    </div>
                    <div className="p-3 col-start-2">
                        <h2 className="title-font font-medium text-xl text-gray-900">Start date:</h2>
                        <p>{ repairDate !== undefined && repairDate.toUTCString().slice(0,-3)}</p>
                    </div>
                    <div className="p-3 col-start-1 row-start-2">
                        <h2 className="title-font font-medium text-xl text-gray-900">Product Cat.:</h2>
                        <p className="leading-relaxed">
                            {repair.product.category}
                        </p>
                    </div>
                    <div className="p-3 col-start-2 row-start-2">
                        {repair.state !== "FINISHED" ?
                            <>
                                <h2 className="title-font font-medium text-xl text-gray-900">Status:</h2>
                                <p>{repair.state}</p>
                            </> : <>
                                <h2 className="title-font font-medium text-xl text-gray-900">End date:</h2>
                                <p>{ repairEnd !== undefined && repairEnd.toUTCString().slice(0,-3)}</p>
                            </>}

                    </div>

                    <div className="p-3 col-start-3 row-start-1 row-span-2">
                        <h2 className="title-font font-medium text-xl text-gray-900">Defective Comment:</h2>

                        <p className="leading-relaxed text-sm">
                            {repair.product.defectiveComment ?
                                <>{repair.product.defectiveComment}</> :
                                <>No comment for product</>
                            }
                        </p>
                    </div>
                </div>
            </StyledContainer>

        )
    }
}
