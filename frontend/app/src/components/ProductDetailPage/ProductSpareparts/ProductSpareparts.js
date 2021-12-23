import React, { useState, useEffect, useContext } from 'react'
import { useLocation, Redirect } from 'react-router-dom'
import { ApiContext } from '../../../contexts/apiContext'
import StyledContainer from '../../Global/StyledContainer/StyledContainer'
import useLocalStorage from '../../../hooks/useLocalStorage';
import { SuccessToast, ErrorToast } from '../../Global/PushToast/PushToast';

//Have an array of all checked checkboxes {"SCREEN" : false, "BATTERY" : false ...}
//Send post form data to /write-off/create
//

export const ProductSpareparts = () => {

    const [sent, setSent] = useState(false);
    const [user] = useLocalStorage("user");
    const API_BASE = useContext(ApiContext);
    const LOCATION = useLocation()
    const [apiLink] = useState(`${API_BASE}/${LOCATION.pathname}/sparepart_types`);
    const [woLink] = useState(`${API_BASE}/writeoffs/create?prod_id=${LOCATION.pathname.slice(10,)}&tech_id=${user}`);
    const [checkedState, setCheckedState] = useState();
    const [spareparts, setSpareparts] = useState();
    const [loading, setLoading] = useState(false);


    // Fetch data from API
    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const response = await fetch(apiLink);
            const responseJson = await response.json();

            setSpareparts(responseJson);

            if (responseJson !== undefined) {
                let obj = {};
                for (let part of Object.values(responseJson)) {
                    obj[part] = false;
                }
                setCheckedState(obj);
            }

            setLoading(false);

        };
        fetchData();

    }, [apiLink]);

    const handleChange = (part) => {

        checkedState[part] = !checkedState[part] //Flip cheched value on checkbox

    }


    const handleSubmit = (e) => {
        e.preventDefault();

        const checkedBoxes = Object.keys(checkedState).filter((key) => checkedState[key]);
        const body = { reason: "Reasons not implemented!", markedParts: checkedBoxes };

        fetch(woLink, {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(body)  //Convert to JSON to be accepted by the API. Should match content-type
        }).then(response => {
            if (response.ok) {
                SuccessToast("Write-off send for approval")
                setSent(true);          // Make redirect after success
            } else {
                ErrorToast("Write-off could not be created");
            }
        }).catch(() => {
            ErrorToast("Write-off could not be created")
        });

    }

    if (sent) {
        return <Redirect to="/" />
    }

    return (
        <StyledContainer>
            {loading ? <>Loading...</> :
                <>

                    <h2 className="text-xl mb-3">Mark usable parts</h2>
                    <form className="space-y-3" onSubmit={handleSubmit}>
                        {spareparts !== undefined && <>
                            {spareparts.map((part, key) => {
                                return (
                                    <div key={key}>
                                        <label className="inline-flex items-center">
                                            <input type="checkbox" onChange={() => handleChange(part)} className="form-checkbox" value={part} />
                                            <span className="ml-2 capitalize">{part}</span>
                                        </label>
                                    </div>
                                )
                            })} </>}

                        <button type="submit" className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-bluecity_dark rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
                        >Create Ticket</button>
                    </form>

                </>
            }

        </StyledContainer>
    )
}

