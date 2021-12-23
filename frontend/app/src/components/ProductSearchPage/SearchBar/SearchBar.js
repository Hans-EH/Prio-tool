import React, { useState } from 'react'

import { BsSearch } from "react-icons/bs";

export const SearchBar = (props) => {

    // States to capture search value
    const [searchValue, setSearchValue] = useState();


    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // URL encode values
        let searchEncoded = encodeURIComponent(searchValue);

        if (searchValue !== undefined) {
            // Query String Construction
            const userQuery = `?name=${searchEncoded}`;
            // Set Query String in Callback
            props.setParam(userQuery);
        } else {
            props.setParam("");
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex shadow-sm relative mb-4">
                <input className="flex-grow px-4 py-4 focus:ring focus:ring-offset-2 rounded-lg" type="text" name="productSearch" placeholder="Search..." onChange={handleSearchChange} />
                <div className="flex align-center">
                    <button type="submit hover:text-bluecity-500">
                        <BsSearch className="absolute top-1/2 right-1 transform -translate-x-1/2 -translate-y-1/2" />
                    </button>
                </div>
            </div>
        </form>
    )
}
