import { useState, useEffect } from "react";

export const AdnCompoment = () => {
    const [a, SetA] = useState(false);
    const [b, SetB] = useState(false);
    const [y, SetY] = useState(false);

    useEffect(() => {
        SetY(a && b);
    }, [a, b]);
        
    return (
        <div>
            <button onClick={() => SetA(!a)}>{a ? "A - 1" : "A - 0"}</button>
            <button onClick={() => SetB(!b)}>{b ? "B - 1" : "B - 0"}</button>
            <h2>Vysledek AND: {y ? "True" : "False"} </h2>
        </div>
    )
}