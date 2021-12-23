import React, { useState, useEffect, useContext } from 'react';
import { Route, Redirect, useHistory, useLocation } from 'react-router-dom';
import { ApiContext } from '../../../contexts/apiContext';
import useLocalStorage from '../../../hooks/useLocalStorage';

// Global
import { ErrorToast } from '../PushToast/PushToast';

// Components
import { Header } from '../../Header/Header';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    let history = useHistory();
    let location = useLocation();

    // Get Value for key: Auth in Localstorage
    const [auth] = useLocalStorage(['auth']);
    const [user] = useLocalStorage(['user']);
    const [redirect, setRedirect] = useState(false);

    // Values for checking Cookie
    const API_BASE = useContext(ApiContext);
    const usernameQuery = `username=${user}`;
    const authQuery = `sessionCookie=${auth}`;
    const [apiLink] = useState(`${API_BASE}/auth/validate_session_cookie?${usernameQuery}&&${authQuery}`);

    useEffect(() => {
        let isComponentMounted = true;
        const checkSession = async () => {
            const response = await fetch(apiLink, { method: "post" });
            if (!response.ok) {
                ErrorToast("Invalid Session Key");
                setRedirect(true);
            }
        }

        if (isComponentMounted) {
            checkSession()
        }

        return () => {
            isComponentMounted = false;
        }

    }, [apiLink, auth, user, history, location]);


    if (redirect) {
        return <Redirect to="/login" />
    }

    return (
        <>
            <Header />
            <div className="container mt-8 mx-auto w-full md:w-4/5 pb-12">
                <Route {...rest} render={
                    props => <Component {...rest} {...props} />
                } />
            </div>

        </>
    )
}

export default ProtectedRoute;
