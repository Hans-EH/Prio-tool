import { useState, useContext, useEffect } from 'react'
import { ApiContext } from '../../../contexts/apiContext';

export const User = () => {
    const API_BASE = useContext(ApiContext);
    const username = localStorage.getItem("user").slice(1,-1);
    const [user,setUser] = useState(["empty"]);
    const [apiLink] = useState(`${API_BASE}/users?username=${username}`);
    // Fetch data from API
    useEffect(() => {
        let isComponentMounted = true;
        const fetchData = async () => {
          const response = await fetch(apiLink);
          const responseJson = await response.json();
          if (isComponentMounted) {
            setUser(responseJson);
          }
        };
        fetchData();
        return () => {
          isComponentMounted = false;
        };
      }, [apiLink]);
      return user;
}
export default User;

