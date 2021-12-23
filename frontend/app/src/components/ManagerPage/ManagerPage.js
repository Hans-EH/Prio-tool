import React, { useState, useContext } from 'react'
import { ApiContext } from '../../contexts/apiContext';
import UserTable from './UserTable';
import StyledContainer from '../Global/StyledContainer/StyledContainer';
import User from "../Global/UserInfo/User";
import { toast } from "react-toastify";

// Toast 
import { ErrorToast } from '../Global/PushToast/PushToast';

const ManagerPage = () => {

    const API_BASE = useContext(ApiContext);
    const [apiLink] = useState(API_BASE + "/register");

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [confirmPass, setConfirmPass] = useState();

    //const [registerSuccessful, setRegisterSuccessful] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (password === confirmPass) {
            let formData = new FormData();
            formData.append("username", username);
            formData.append("password", password);

            fetch(apiLink, {
                method: "post",
                body: formData
            }).then(response => {
                response.ok ?
                    handleSuccess("Registration successful!"):
                    ErrorToast("Bad credentials, check if name is atleast 4 letters & password is  atleast 7 characters")
            })
        } else {
            ErrorToast("Password's dont match");
        }
    }

    const handleSuccess = async (data) => {

        toast.success(data, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
        });
    }
    return (
        <main>
            <a href="/admin">
                <h1 className="text-3xl font-bold text-bluecity_dark mb-4">Manager Page</h1>
            </a>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {User() === "empty" ? <>Authorizing...</> : User()[0].userPrivilege !== "FULL_ACCESS" ? <>Not authorized to access this page</> :
                    <>
                        <div className="md:col-span-3">
                            <StyledContainer>
                                <UserTable />
                            </StyledContainer>
                        </div>

                        <div className="md:col-span-3">
                            <StyledContainer>
                                <h3 className="font-bold text-2xl mb-4">Register new user</h3>
                                <form className="container" onSubmit={handleSubmit}>
                                    <div className="space-y-3 bg-white">
                                        <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex justify-between md:space-y-0">
                                            <h2 className="max-w-sm md:w-1/3">
                                                Username:
                                            </h2>
                                            <div className="max-w-sm md:w-2/3">
                                                <div className="relative">
                                                    <input type="text" onChange={(e) => { setUsername(e.target.value) }} className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-bluecity_dark focus:border-transparent" placeholder="Username" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex justify-between md:space-y-0">
                                            <h2 className="max-w-sm md:w-1/3">
                                                Password:
                                            </h2>
                                            <div className="max-w-sm md:w-2/3">
                                                <div className="relative">
                                                    <input type="password" onChange={(e) => { setPassword(e.target.value) }} className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-bluecity_dark focus:border-transparent" placeholder="Password" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex justify-between md:space-y-0">
                                            <h2 className="max-w-sm md:w-1/3">
                                                Confirm Password:
                                            </h2>
                                            <div className="max-w-sm md:w-2/3">
                                                <div className="relative">
                                                    <input type="password" onChange={(e) => { setConfirmPass(e.target.value) }} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-bluecity_dark focus:border-transparent" placeholder="Password" />
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
                        </div>

                    </>
                }
            </div>
        </main>
    )
}

export default ManagerPage
