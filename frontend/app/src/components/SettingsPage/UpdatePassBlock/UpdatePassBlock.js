import React, { useState, useContext } from 'react'
import { ApiContext } from '../../../contexts/apiContext';

// Global Components
import {SuccessToast, ErrorToast } from "../../Global/PushToast/PushToast";
import StyledContainer from '../../Global/StyledContainer/StyledContainer'

const UpdatePassBlock = () => {

    const API_BASE = useContext(ApiContext);
    const [apiLink] = useState(API_BASE + "/users/setpassword");

    const [username] = useState(localStorage.getItem("user").slice(1,-1));
    const [newPass, setNewPass] = useState();
    const [newPassConfirm, setNewPassConfirm] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (newPass === newPassConfirm) {

            let formData = new FormData();
            formData.append("username", username);
            formData.append("password", newPass);

            fetch(apiLink, {
                method: "post",
                body: formData
            }).then(response => {
                response.ok ?
                    SuccessToast("Password changed!") :
                    ErrorToast("Failed to change password")
            })
        } else {
            ErrorToast("Passwords didn't match");
        }
    }


    return (

        <StyledContainer>
            <h3 className="font-bold text-2xl mb-4">Change Password</h3>
                <form className="container" onSubmit={handleSubmit}>
                    <div className="space-y-3 bg-white">
                        <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex justify-between md:space-y-0">
                            <h2 className="max-w-sm md:w-1/3">
                            New Password:
                            </h2>
                            <div className="max-w-sm md:w-2/3">
                                <div className="relative">
                                    <input type="password" onChange={(e) => { setNewPass(e.target.value) }} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-bluecity_dark focus:border-transparent" placeholder="New Password" />
                                </div>
                            </div>
                        </div>

                        <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex justify-between md:space-y-0">
                            <h2 className="max-w-sm md:w-1/3">
                            Confirm New Password:
                            </h2>
                            <div className="max-w-sm md:w-2/3">
                                <div className="relative">
                                    <input type="password" onChange={(e) => { setNewPassConfirm(e.target.value) }} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-bluecity_dark focus:border-transparent" placeholder="Retype New Password" />
                                </div>
                            </div>
                        </div>

                        <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                            <button type="submit" className="py-2 px-4 bg-bluecity_dark hover:bg-bluecity focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Save
                            </button>
                        </div>
                    </div>
                </form>
        </StyledContainer>
    )
}

export default UpdatePassBlock
