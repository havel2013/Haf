import { useState, useEffect } from 'react';

export const Counter = () => {
    const [count, setCount] = useState(0);
    const [doubler, setDoubler] = useState(false);
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        if (doubler){
            setCounter(2);
        } else {
            setCounter(1);
        }
    }, [doubler]);

    return (
        <div>
            <p>Počet: {count}</p>
            <button onClick={() => setCount(prevCount => prevCount >= 10 ? 10 : prevCount + counter) }>Přidat</button>
            <button onClick={() => setCount(prevCount => prevCount <= -10 ? -10 : prevCount - counter) }>Odebrat</button>
            <button onClick={() => setCount(0) }>Reset</button>
            <button style={{backgroundColor: doubler ? 'green' : 'red'}} onClick={() => setDoubler(prevDoubler => !prevDoubler) }>Double</button>
        </div>
    );
};