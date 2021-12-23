import React, { useState } from 'react'
import { Redirect } from "react-router-dom";
import AccountBlock from './AccountBlock/AccountBlock';
import UpdatePassBlock from './UpdatePassBlock/UpdatePassBlock';
import User from "../Global/UserInfo/User";


const SettingsPage = () => {
    const [adminPage] = useState(false);

    if (adminPage) {
        return <Redirect to='/admin' />
    }
    return (
        <section className="">
            <a href="/settings">
                <h1 className="text-3xl font-bold text-bluecity_dark mb-4">Account Settings</h1>
            </a>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {User() !== "empty" ? <AccountBlock user={User()[0]} /> : <></>}

                <UpdatePassBlock />
            </div>
        </section>
    )
}

export default SettingsPage
