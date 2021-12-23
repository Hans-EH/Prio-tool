import React, { useState, useEffect, useContext } from 'react'
import { ApiContext } from '../../../contexts/apiContext'
import StyledContainer from '../../Global/StyledContainer/StyledContainer'
import TableRow from './TableRow/TableRow'
import TableUtils from './TableUtils/TableUtils'


export const SearchTable = () => {

    const API_BASE = useContext(ApiContext);
    const [apiLink] = useState(API_BASE + "/spareparts?state=AVAILABLE");

    const [spareparts, setSpareparts] = useState([]);
    const [index] = useState(0);

    // Fetch data from API
    useEffect(() => {
        let isComponentMounted = true;
        const fetchData = async () => {
            const response = await fetch(apiLink);
            const responseJson = await response.json();
            if (isComponentMounted) {
                setSpareparts(responseJson.slice(0 + index, 5 + index));
            }
        };
        fetchData();
        return () => {
            isComponentMounted = false;
        };
    }, [apiLink, index]);

    return (
        <StyledContainer>
            <div className="container col-span-4 mx-auto bg-white rounded-lg">
                <TableUtils />

                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
                    <div className="inline-block min-w-full rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th scope="col" className="px-5 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                                        Location
                                    </th>
                                    <th scope="col" className="px-5 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                                        Part
                                    </th>

                                    <th scope="col" className="px-5 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                                        State
                                    </th>
                                    <th scope="col" className="px-5 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                                        Price
                                    </th>
                                    <th scope="col" className="px-5 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {spareparts.map((part, key) => {
                                    return (
                                        <TableRow data={part} key={key} />
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </StyledContainer>
    )
}
