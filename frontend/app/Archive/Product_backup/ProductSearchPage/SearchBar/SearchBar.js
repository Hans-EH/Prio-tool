import React, { useState } from 'react'

import { BsSearch } from "react-icons/bs";

export const SearchBar = (props) => {

    // States to capture values
    //const [selectValue, setSelectValue] = useState();
    const [searchValue, setSearchValue] = useState();


    const selectOptions = [{
        key: 0,
        label: "All",
        value: "",
        default: true
    }, {
        key: 1,
        label: "iPhones",
        value: "iphone"
    }, {
        key: 2,
        label: "Macbooks",
        value: "macbook"
    }, {
        key: 3,
        label: "iPads",
        value: "ipad"
    }, {
        key: 4,
        label: "Smartphones",
        value: "smartphone"
    }, {
        key: 5,
        label: "Laptops",
        value: "laptop"
    }, {
        key: 6,
        label: "Tablets",
        value: "tablet"
    }]

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // URL encode values
        //let selectEncoded = encodeURIComponent(selectValue);
        let searchEncoded = encodeURIComponent(searchValue);

        if (searchValue !== "") {
            // Query String Construction
            const userQuery = `?name=${searchEncoded}`;

            // Set Query String in Callback
            props.setParam(userQuery);
        } else {
            props.setParam();
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex shadow-sm relative">
                {/* onChange={handleSelectChange} <-- belongs to select */}
                <select className="px-4 py-4 rounded-l-lg" name="typeSelection" >
                    {selectOptions.map((option) => {
                        return (
                            <option value={option.value} key={option.key} default={option.default}>{option.label}</option>
                        )
                    })}
                </select>
                <input className="flex-grow px-4 py-4 ring-green-500 rounded-r-lg" type="text" name="productSearch" placeholder="Search" onChange={handleSearchChange} />
                <div className="flex align-center">
                    <button type="submit hover:text-bluecity-500">
                        <BsSearch className="absolute top-1/2 right-1 transform -translate-x-1/2 -translate-y-1/2" />
                    </button>
                </div>
            </div>
        </form>
    )
}
