import React, { useState, useEffect, useContext } from 'react'
import { ApiContext } from '../../contexts/apiContext';
import UserRow from "./UserRow";


const UserTable = () => {
    const API_BASE = useContext(ApiContext);
    const [apiLink] = useState(API_BASE + "/users");

    const [users, setUsers] = useState([]);

    // Fetch data from API
    useEffect(() => {
        let isComponentMounted = true;
        const fetchData = async () => {
            const response = await fetch(apiLink);
            const responseJson = await response.json();
            if (isComponentMounted) {
                setUsers(responseJson);
            }
        };
        fetchData();
        return () => {
            isComponentMounted = false;
        };
    }, [apiLink]);

    return (
        <div>
            <section>
                <h3 className="font-bold mb-4 text-2xl">Administrate Users</h3>
            </section>
            <table>
                <thead>
                    <tr>
                        <th
                            scope="col"
                            className="px-12 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                        >
                            Name
                        </th>
                        <th
                            scope="col"
                            className="px-12 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                        >
                            Role
                        </th>
                        <th
                            scope="col"
                            className="px-12 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                        >
                            START DATE
                        </th>
                        <th
                            scope="col"
                            className="px-12 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                        >
                            END DATE
                        </th>
                        <th
                            scope="col"
                            className="px-12 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                        >
                            reset Password
                        </th>
                        <th
                            scope="col"
                            className="px-12 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                        >
                            Resign User
                        </th>
                    </tr>
                </thead>
                <tbody>

                        {users.length > 0 ? (
                            <>
                                {users
                                    .map((user, key) => {
                                        return <UserRow user={user} key={key} />
                                    })}
                            </>
                        ) : (
                            <></>
                        )}
                </tbody>
            </table>
        </div>
    )
}

export default UserTable