import { Button, Switch } from '@mui/material';
import { useState, useEffect } from 'react';

export const ColBox = () => {
    const [color, setColor] = useState("#FF5733");
    const [active, isActive] = useState(true);

    

    const rng = (length) => {
        return Math.floor(Math.random() * length)
    }

    const rnghex = () => {
        let hex = [0,1,2,3,4,5,6,7,8,9, 'A','B','C','D','E','F']
        let hexcolor = "#"

        for (let i = 0; i < 6; i++) {
            hexcolor += hex[rng(hex.length)]; 
        }

        return hexcolor;
    }

    useEffect(() => {
        if (active){
        const interval = setInterval(() => {
            setColor(rnghex())
        }, 3000);
        return () => clearInterval(interval)
    }}, [color,active]);

    const handleChange = (event) => {
        isActive(event.target.checked)
    }

    return (
        <>
        <div style={{width:200, height:200, backgroundColor:color, alignItems:'center', display:'flex', justifyContent:'center'}}>
            <p>{color}</p>
        </div>  
        <Switch checked={active} onChange={handleChange} />
        </>
    );
}

