import React, { useState, useEffect, useContext } from 'react'
import { ApiContext } from '../../contexts/apiContext'

// Components
import RepairsTable from './RepairsTable/RepairsTable'
import CounterList from './CounterList/CounterList'

const RepairListPage = () => {

    let API_BASE = useContext(ApiContext);
    const [apiLink] = useState(`${API_BASE}/repairs?sortBy=startDate`);
    const [loading, setLoading] = useState(false);

    const [repairs, setRepairs] = useState([]);
    const [filteredRepairs, setFilteredRepairs] = useState([]);
    const [selected, setSelected] = useState(0);

    // Fetch data from API
    useEffect(() => {
        let isComponentMounted = true;
        setLoading(true);
        const fetchData = async () => {
            const response = await fetch(apiLink);
            const responseJson = await response.json();
            if (isComponentMounted) {
                setLoading(false);
                setRepairs(responseJson);
            }
        };
        fetchData();
        return () => {
            isComponentMounted = false;
        }
    }, [apiLink]);

    //For changing the repair list to the selected fields
    useEffect(() => {
        let isComponentMounted = true;
        if (isComponentMounted) {
            switch (selected) {
                case 0: setFilteredRepairs([]); break;
                case 1: setFilteredRepairs(repairs.filter(repair => repair.state === 'ON_GOING')); break;
                case 2: setFilteredRepairs(repairs.filter(repair => repair.state === 'PAUSED')); break
                case 3: setFilteredRepairs(repairs.filter(repair => repair.state === 'FINISHED')); break
                default: setFilteredRepairs([]);
            }
        }
        return () => {
            isComponentMounted = false;
        }
    }, [selected, API_BASE, repairs]);

    // Callback function to update selected
    const handleSeleted = (value) => {
        if (value >= 0 && value <= 3) {
            setSelected(value);
        }
    }

    return (
        <div>
            {loading ? <p>Loading...</p> :
                <>
                    {repairs.length > 0 ?
                        <div className="grid grid-cols-5 gap-4 mt-4">
                            <CounterList data={repairs} handleSeleted={handleSeleted} stateSelected={selected} />

                            {filteredRepairs.length > 0 ?
                                <RepairsTable data={filteredRepairs} /> :
                                <RepairsTable data={repairs} />
                            }
                        </div>
                        :
                        <p>Loading..</p>
                    }
                </>
            }
        </div>
    )
}

export default RepairListPage
