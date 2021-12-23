import React, { useState, useEffect, useContext } from 'react'
import { Redirect, useParams } from 'react-router-dom'

// Contexts
import { ApiContext } from "../../contexts/apiContext";
import { RefreshContext } from '../../contexts/refreshContext';

// Components
import StyledContainer from '../Global/StyledContainer/StyledContainer';
import { InfoBlock } from './InfoBlock/InfoBlock';
import { ProductBlock } from './ProductBlock/ProductBlock';
import { RecommendationTable } from './SparePartRecommendations/RecommendationTable';
import { SearchTable } from './SparePartSearch/SearchTable';
import AddedSpareparts from './AddedSpareparts/AddedSpareparts';
import { SuccessToast, ErrorToast } from '../Global/PushToast/PushToast';

// icons
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";




const RepairDetailPage = () => {

    let params = useParams();
    const [cancel, setCancel] = useState(false);
    const [updated, setUpdated] = useState(false);

    const API_BASE = useContext(ApiContext);
    const [apiLink] = useState(`${API_BASE}/repairs/${params.id}`);
    const [repair, setRepair] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch data from API
    useEffect(() => {
        let isComponentMounted = true;
        setLoading(true);
        const fetchData = async () => {
            const response = await fetch(apiLink);

            const responseJson = await response.json();

            if (isComponentMounted) {
                setRepair(responseJson);
                setLoading(false);
            }
        };
        fetchData();
        return () => {
            setUpdated(false);
            isComponentMounted = false;
        }
    }, [apiLink, updated]);

    const handlePauseClick = () => {

        fetch(apiLink + "/pause", {
            method: "post"
        }).then(response => {
            if (response.ok) {
                SuccessToast("Repair paused")
                setUpdated(true);
            } else { ErrorToast("Repair couldn't be paused") }
        })
    }

    const handleResumeClick = () => {

        fetch(apiLink + "/resume", {
            method: "post"
        }).then(response => {
            if (response.ok) {
                SuccessToast("Repair resumed")
                setUpdated(true);
            } else { ErrorToast("Repair couldn't be resumed") }
        })
    }

    const handleFinishedClick = () => {

        fetch(apiLink + "/finish", {
            method: "post"
        }).then(response => {
            if (response.ok) {
                SuccessToast("Repair finished")
                setUpdated(true);
            } else { ErrorToast("Repair couldn't be finished") }
        })
    }

    const handleCancelClick = () => {

        fetch(apiLink + "/cancel", {
            method: "post"
        }).then(response => {
            if (response.ok) {
                SuccessToast("Repair cancelled")
                setUpdated(true);
                setCancel(true);
            } else { ErrorToast("Repair couldn't be cancelled") }
        })

    }

    if (cancel) {
        return <Redirect to="/repairs" />
    }

    if (loading) {
        return (
            <StyledContainer>
                <p>Loading...</p>
            </StyledContainer>
        )
    } else {
        return (
            <RefreshContext.Provider value={setUpdated}>
            <div>
                {repair.state === "ON_GOING" &&
                    <StyledContainer>
                        <div className="flex justify-between">
                            <button className="flex items-center border border-bluecity_dark text-bluecity_dark hover:bg-bluecity_dark hover:text-white mr-2 py-2 px-4 rounded-full" onClick={() => { handlePauseClick() }}>
                                Pause <BsFillPauseFill className="ml-1" />
                            </button>
                            <button className="bg-bluecity_dark text-white py-2 px-4 rounded-full" onClick={() => { handleFinishedClick() }}>
                                Finish repair
                            </button>
                        </div>
                    </StyledContainer>
                }

                {repair.state === "PAUSED" &&
                    <StyledContainer>
                        <div className="flex justify-between">
                            <button className="flex items-center border border-bluecity_dark text-bluecity_dark hover:bg-bluecity_dark hover:text-white mr-2 py-2 px-4 rounded-full" onClick={() => { handleResumeClick() }}>
                                Resume <BsFillPlayFill className="ml-1" />
                            </button>
                            <button className="bg-bluecity_dark text-white py-2 px-4 rounded-full" onClick={() => handleCancelClick()}>
                                Cancel
                            </button>
                        </div>
                    </StyledContainer>
                }
                <InfoBlock />

                <ProductBlock />

                {repair.addedSpareParts.length > 0 && <AddedSpareparts />}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                    <RecommendationTable  />
                    <SearchTable />
                </div>
            </div>
            </RefreshContext.Provider>
        )
    }
}

export default RepairDetailPage
