import React from 'react'
import { Redirect } from 'react-router';
import { ErrorToast } from '../Global/PushToast/PushToast';

const PageLogout = () => {
    const handleLogout = () => {
        try {
            // Get from local storage by key
            window.localStorage.removeItem('auth');
            window.localStorage.removeItem('user');
          } catch (error) {
            // If error TODO: 
            ErrorToast("Could not sign out");
          }
    }

    handleLogout();
    return <Redirect to="/login"/>
}

export default PageLogout
