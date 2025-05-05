import { useEffect, useState } from 'react';
export const ShowTime = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        setTime(new Date().toLocaleTimeString());
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 10000);
        



        return () => console.log("komponenta odpojena");
    }, []);
    return (
        <>
            <p>Aktuální čas: {time}</p>
            <button onClick={() => setTime(new Date().toLocaleTimeString()) }>Aktualizuj</button>
        </>
    );
};