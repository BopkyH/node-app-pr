import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function UsersList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('/api/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users', error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    <Link to={`/users/${user.id}`}>{user.username}</Link>
                </li>
            ))}
        </ul>
    );
}

export default UsersList;
