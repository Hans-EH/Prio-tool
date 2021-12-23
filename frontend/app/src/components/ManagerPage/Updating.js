import React, { useState } from 'react'
import { Redirect } from "react-router-dom";

export const DropdownMenu = (props) => {
        const [redirect, setRedirect] = useState(false);
        if (!redirect) {
                return (<div><p>Updating settings</p><p className=" text-white-700">{setTimeout(() => { setRedirect(true) }, 1000)}</p></div>
                )
        }
        else { return <Redirect to="/admin" /> }
}

export default DropdownMenu