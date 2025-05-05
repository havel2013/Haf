import { useState } from 'react';


export const Counter = () => {
    const [count, setCount] = useState(0);

    const [buttonValue, setButtonValue] = useState(1)

return (
    <div>
        <p>Počet: {count}</p>
        <button onClick={() => pridat(setCount, count, buttonValue) }>Přidat</button>
        <button onClick={() => odebrat(setCount, count, buttonValue) }>Odebrat</button>
        <button onClick={() => setCount((count) => 0) }>Reset</button>
        <button onClick={() => double(setButtonValue, buttonValue) } value={buttonValue} >double</button>
    </div>
    );
};


function pridat(setCount, count, buttonValue) {
    if  (count != 10  && count < 10) setCount((count) => count + buttonValue);
}

function odebrat(setCount, count, buttonValue) {
    if  (count != -10 && count > -10) setCount((count) => count - buttonValue);
}

function double(setButtonValue, buttonValue) {
    if (buttonValue == 1) setButtonValue((buttonValue) => 2);
    else setButtonValue((buttonValue) => 1);
}