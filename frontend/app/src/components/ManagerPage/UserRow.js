import React, { useState, useContext } from 'react'
import { ApiContext } from '../../contexts/apiContext';
import { toast } from "react-toastify";
import DropdownMenu from "./DropdownMenu";
import { Redirect } from "react-router-dom";


const UserRow = (props) => {
    const API_BASE = useContext(ApiContext);
    const [apiLinkResetPassword] = useState(API_BASE + "/users/setpassword");
    const [apiLinkResignUser] = useState(API_BASE + "/users/resign");
    const [redirect, setRedirect] = useState(false);
    //change privilege buttom starts here
    const resetPasswordHandleFailed = (data) => {
        toast.error('Failed to reset ' + props.user.username + 's password', {
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

    const resetPasswordHandleSuccess = async (data) => {
        toast.success(props.user.username + 's Password reset to "password" ', {
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

    const resetPasswordHandleSubmit = async (e) => {
        e.preventDefault()

        let formData = new FormData();
        formData.append("username", props.user.username);
        formData.append("password", "password");
        fetch(apiLinkResetPassword, {
            method: "post",
            body: formData
        }).then(response => {
            response.ok ?
                resetPasswordHandleSuccess(response.text()) :
                resetPasswordHandleFailed(response)
        })
    }
    //change privilege buttom ends here

    //resign user starts here
    const resignHandleFailed = (data) => {
        toast.error("Failed to resign " + props.user.username, {
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

    const resignHandleSuccess = async (data) => {
        toast.success("Forcefully resigned " + props.user.username, {
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

    const resignHandleSubmit = async (e) => {
        e.preventDefault()
        let formData = new FormData();
        formData.append("username", props.user.username);

        fetch(apiLinkResignUser, {
            method: "post",
            body: formData
        }).then(response => {
            response.ok ?
                resignHandleSuccess(response.text()) :
                resignHandleFailed(response)
        })
    }
    //resign user ends here
    if(redirect){return <Redirect to="/updating" />}else{
    return (
        <tr>
            <td className="px-5 py-5 border-b border-gray-200  text-sm">
                <p className="text-gray-900 break-all">
                    {props.user.username}
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200  text-sm">
                    <DropdownMenu user={props.user} />
                
            </td>
            <td className="px-5 py-5 border-b border-gray-200  text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {props.user.dateRegistered}
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200  text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {props.user.dateResigned == null ? <>Still working</> : <>{props.user.dateResigned}</>}
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200  text-sm">

                <form onSubmit={resetPasswordHandleSubmit}>
                    <button className="py-2 px-4 bg-red-700 hover:bg-red-500 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " title='Resets the users password to "password"' type="submit">Reset</button>
                </form>

            </td>
            <td className="px-5 py-5 border-b border-gray-200  text-sm">

                <form onSubmit={resignHandleSubmit}>
                    <button className="py-2 px-4 bg-red-700 hover:bg-red-500 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " type="submit">Force Resign</button>
                </form>

            </td>
        </tr>
    )}
}

export default UserRow
