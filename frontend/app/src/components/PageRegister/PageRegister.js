import React, { useState, useContext } from 'react'
import { ApiContext } from '../../contexts/apiContext';
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";


const PageLogin = () => {

    const API_BASE = useContext(ApiContext);
    const [apiLink] = useState(API_BASE + "/register");

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();



    const handleFailed = (data) => {
        toast.error("Bad credentials, check if name is atleast 4 letters & password is  atleast 7 characters", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
        });
    }

    const handleSuccess = async (data) => {
        toast.success("Registration successful!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
        });
        

        <Redirect to='/login' />
        }

    const handleSubmit = async (e) => {
        e.preventDefault()

        let formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);

        fetch(apiLink, {
            method: "post",
            body: formData
        }).then(response => {
            response.ok ?
                handleSuccess(response.text()) :
                handleFailed(response)
            })
    }

    return (
        <main className="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0 bg-bluecity">
            <header className="max-w-lg mx-auto">
                <a href="/">
                    <h1 className="text-4xl font-bold text-white text-center">Priotool</h1>
                </a>
            </header>

            <div className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                <section>
                    <h3 className="font-bold text-2xl">Welcome to Priotool</h3>
                    <p className="text-gray-600 pt-2">Register your account</p>
                </section>

                <section className="mt-10">
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <div className="mb-6 pt-3 rounded bg-gray-100">
                            <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="email">Full Name</label>
                            <input type="text" id="username" onChange={(e) => { setUsername(e.target.value) }} className="bg-gray-100 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-bluecity_dark transition duration-500 px-3 pb-3" />
                        </div>
                        <div className="mb-6 pt-3 rounded bg-gray-100">
                            <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={(e) => { setPassword(e.target.value) }} className="bg-gray-100 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-bluecity_dark transition duration-500 px-3 pb-3" />
                        </div>
                        <button className="bg-bluecity_dark hover:bg-blue-700 py-4 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Sign Up</button>
                    </form>
                </section>
            </div>
        </main>
    )
}

export default PageLogin
