import React, { useState, useEffect, useContext } from 'react'
import { ApiContext } from '../../contexts/apiContext';
import User from "../Global/UserInfo/User";

// Components
import CounterList from "./CounterList/CounterList";
import TicketTable from './TicketTable/TicketTable';


const WriteoffListPage = () => {

    const API_BASE = useContext(ApiContext)
    const [apiLink] = useState(API_BASE + "/writeoffs");
    const [writeoffs, setWriteoffs] = useState([]);
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
                setWriteoffs(responseJson);
            }
        };
        fetchData();
        return () => {
            isComponentMounted = false;
        }
    }, [apiLink]);

    return (
        User() === "empty" ? <>Authorizing...</> : User()[0].userPrivilege !== "FULL_ACCESS" ? <>Not authorized to access this page</> :
        <>
            {loading ?
                <p>loading..</p> :
                <div className="grid grid-cols-5 gap-4 mt-4">
                    <CounterList data={writeoffs} />
                    <TicketTable data={writeoffs} />
                </div>
            }
        </>
        
    )
}

export default WriteoffListPage
