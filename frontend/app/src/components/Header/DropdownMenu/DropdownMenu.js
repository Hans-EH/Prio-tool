import React, { useState } from 'react'
import { Link } from "react-router-dom"
//import useLocalStorage from '../../../hooks/useLocalStorage';

// Icons
import { AiOutlineLogout, AiFillSetting } from "react-icons/ai";
import {MdOutlineAdminPanelSettings} from "react-icons/md";
import InitialsBlock from './InitialsBlock/InitialsBlock';

export const DropdownMenu = () => {
    //const [user] = useLocalStorage("user");
    const [collapsed, setCollapsed] = useState(true);
    
    const menuData = [ {
        label: "Settings",
        logo: <AiFillSetting />,
        link: "/settings",
        admin: false
    }, {
        label: "Admin",
        logo: <MdOutlineAdminPanelSettings />,
        link: "/admin",
        admin: true
    }, {
        label: "Logout",
        logo: <AiOutlineLogout />,
        link: "/logout",
        admin: false
    }];

    return (

        <div className="relative inline-block text-left">
            <div>
                <button type="button" onClick={() => { setCollapsed(!collapsed) }} className="flex items-center justify-center w-full px-4 text-sm font-medium text-gray-700 focus:outline-none" id="options-menu">
                    <InitialsBlock/>
                    <svg width="20" height="20" className="text-white" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z">
                        </path>
                    </svg>
                </button>

            </div>
            <div className={`origin-top-right absolute z-50 right-0 mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-gray-800 ${collapsed && "hidden"}`}>
                <div className="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {menuData.map((entry) => {
                        return (
                            <Link to={entry.link} key={entry.label} className="flex items-center block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                {entry.logo}
                                <span className="flex flex-col ml-3">
                                    <span>
                                        {entry.label}
                                    </span>
                                </span>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}
