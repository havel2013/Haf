import { useState, useEffect } from 'react';
import { Switch } from '@mui/material';

export const LedRB = () => {
    const [color, setColor] = useState("#000000");
    const [R, SetR] = useState(false);
    const [B, SetB] = useState(false);
    const [active, isActive] = useState(false);

    let colors = ["#000000","#FF0000","#0000FF","#FF00FF"];

    const rng = (length) => {
        return Math.floor(Math.random() * length)
    }
    
    useEffect(() => {
        if (!active){
        if(R == false && B == false) {
            setColor(colors[0])
        }
        if(R == true && B == false) {
            setColor(colors[1])
        }
        if(R == false && B == true) {
            setColor(colors[2])
        }
        if(R == true && B == true) {
            setColor(colors[3])
        }
        }
        if(active){
            const interval = setInterval(() => {
                setColor(colors[rng(colors.length)])
            }, 1000);
            return () => clearInterval(interval)
        }
    }, [R, B, color, active]);

    const handleChange = (event) => {
        isActive(event.target.checked)
    }

    return (
    <div>
        <p style={{alignItems:'center', display:'flex', justifyContent:'center'}}>RG Ledka</p>
        <div style={{width:200, height:200, backgroundColor:color, alignItems:'center', display:'flex', justifyContent:'center', border:'solid', borderTopLeftRadius:'100px', borderTopRightRadius:'100px'}}>
        </div> 

        <button onClick={() => SetR(!R)}>{R ? "RED ON" : "RED OFF"}</button>
        <button onClick={() => SetB(!B)}>{B ? "BLUE ON" : "BLUE OFF"}</button><a />
        <br />
        <Switch checked={active} onChange={handleChange} />
    </div>
)
}