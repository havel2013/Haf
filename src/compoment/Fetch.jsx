import { useEffect, useState } from 'react';

export const FetchUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data));
    }, []);
    
    return (
        <ul>
            <button onClick={() => Fetch()}>načíst znova</button>  
            {users.map(user => <li key={user.id}>{user.name}-{user.email}</li>)}
        </ul>
    );
};

function Fetch(){
    
}