import { useState, useEffect } from 'react';


export const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        if (running) {
            const interval = setInterval(() => {
            setTime(time + 1);
        }, 1000);
        return () => clearInterval(interval);
        }
    }, [running, time]);

    return (
        <div>
            <p>Čas: {time} s</p>
          <button onClick={() => setRunning(true) }>Start</button>
          <button onClick={() => setRunning(false) }>Stop</button>
          <button onClick={() => {setTime(0); setRunning(false); }}>Reset</button>
        </div>
    );
};