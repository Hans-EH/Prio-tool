import React, { useState, useContext } from 'react'

import { Redirect } from "react-router-dom";

import useLocalStorage from '../../hooks/useLocalStorage';

import { SuccessToast, ErrorToast } from "../Global/PushToast/PushToast";

// Contexts
import { UserContext } from '../../contexts/userContext';
import { ApiContext } from '../../contexts/apiContext';

const PageLogin = () => {

    // SetUser function from Context
    const { setUser } = React.useContext(UserContext);

    const API_BASE = useContext(ApiContext);
    const [apiLink] = useState(API_BASE + "/auth");
    const [authKey, setAuthKey] = useLocalStorage("auth", null);
    const [userKey, setUserKey] = useLocalStorage("user", null);

    const [redirect, setRedirect] = useState(false);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (e) => {

        const getUserData = async (username) => {
            const response = await fetch(API_BASE + `/users?username=${username}`);
            const userJson = await response.json();
            if (userJson) {
                setUser(userJson[0]);
            }
        }


        e.preventDefault()

        let formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);
        const response = await fetch(apiLink, { method: "post", body: formData });
        const responseText = await response.text();
        if (response.ok) {
            setAuthKey(responseText);
            setUserKey(username);
            getUserData(username);
            SuccessToast(`${username} logged in`);
            if (authKey !== undefined && userKey !== undefined) {
                setRedirect(true);
            }
        } else {
            ErrorToast('Auth credentials not correct!');
        }
    }

    if (redirect) {
        return <Redirect to="/" />
    } else {
        return (
            <main className="body-bg min-h-screen pt-16 md:pt-24 pb-6 px-2 md:px-0 bg-gray-200">
                <div className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                    <section>
                        <h3 className="font-bold text-2xl">Welcome back to <span className="text-bluecity_dark">Priotool</span></h3>
                        <p className="text-gray-700 pt-2">Sign in to your account.</p>
                    </section>

                    <section className="mt-10">
                        <form className="flex flex-col" onSubmit={handleSubmit}>
                            <div className="mb-6 pt-3 rounded bg-gray-100">
                                <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="email">Full name</label>
                                <input type="text" id="username" onChange={(e) => { setUsername(e.target.value) }} className="bg-gray-100 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-bluecity_dark transition duration-500 px-3 pb-3" />
                            </div>
                            <div className="mb-6 pt-3 rounded bg-gray-100">
                                <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="password">Password</label>
                                <input type="password" id="password" onChange={(e) => { setPassword(e.target.value) }} className="bg-gray-100 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-bluecity_dark transition duration-500 px-3 pb-3" />
                            </div>
                            <button className="bg-bluecity_dark hover:bg-blue-700 py-4 text-white font-bold rounded shadow-lg hover:shadow-xl transition duration-200 mb-2" type="submit">Sign In</button>
                            
                            <p className='text-sm text-gray-400'>If your password has just been reset, then your password is "password"</p>

                        </form>
                    </section>
                </div>
            </main>
        )
    }
}

export default PageLogin
