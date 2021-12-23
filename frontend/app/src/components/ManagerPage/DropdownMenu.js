import React, { useState, useContext } from 'react'
import { ApiContext } from '../../contexts/apiContext';
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";

export const DropdownMenu = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    const [privilege, setPrivilege] = useState();
    const API_BASE = useContext(ApiContext);
    const [apiLinkChangePrivilege] = useState(API_BASE + "/users/setprivilege");
    const [redirect, setRedirect] = useState(false);

    const menuData = [{
        label: "Manager",
        role: "FULL_ACCESS"
    }, {
        label: "Technician",
        role: "SEMI_ACCESS"
    }, {
        label: "Unassigned",
        role: "UNASSIGNED"
    }];

    const handleFailed = (data) => {

        toast.error("Failed to change privilege of " + props.user.username, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
        });
        setRedirect(true);

    }

    const handleSuccess = async (data) => {
 
        toast.success("Privilege of " + props.user.username + " changed successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
        });
        setRedirect(true);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        let formData = new FormData();
        formData.append("username", props.user.username);
        formData.append("userPrivilege", privilege);

        fetch(apiLinkChangePrivilege, {
            method: "post",
            body: formData
        }).then(response => {
            response.ok ?
                handleSuccess(response.text()) :
                handleFailed(response)
        })
    }
    if (redirect) {
        return <Redirect to="/updating" />
    }else {
    return (

        <div className="relative inline-block text-left">
            <div>
                <button type="button" onClick={() => { setCollapsed(!collapsed) }} className="flex items-center justify-center w-full px-4 text-sm font-medium text-gray-700 focus:outline-none" id="options-menu">
                {props.user.userPrivilege === "FULL_ACCESS" ? <>Manager▼</> : props.user.userPrivilege === "SEMI_ACCESS" ? <>Technician▼</> : <>Unassigned▼</>}
                </button>

            </div>
            <div className={`origin-top-right absolute z-50 right-0 mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-gray-800 ${collapsed && "hidden"}`}>
                <div className="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    {menuData.map((entry, key) => {
                        return (
                            <button key={key} className="flex items-center block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem" type="submit" onClick={async () => { setPrivilege(entry.role); }}>
                                <span className="flex flex-col ml-3">
                                    <span>
                                        Set role to {entry.label}
                                    </span>
                                </span>
                            </button >
                        )
                    })}
                    </form>
                </div>
            </div>
        </div>

    )}
}

export default DropdownMenu