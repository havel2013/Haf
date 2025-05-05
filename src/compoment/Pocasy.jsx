import { useEffect, useState } from 'react';

export const FetchUsers = () => {
    const [weather, setWeather] = useState([]);

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=')
        .then(response => response.json())
        .then(data => setUsers(data));
    }, []);
    
    setWeather()

    return (
        <p>
            Takovy je pocasi: {users.map(user => <li key={user.id}>{user.name}-{user.email}</li>)}
        </p>
        <button onClick={() => setTime(new Date().toLocaleTimeString()) }>Aktualizuj</button>
    );
};