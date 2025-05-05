import { useEffect, useState } from 'react';
export const ShowDate = () => {
    const [day, setDay] = useState('');
    

    useEffect(() => {

        const dny = ["neděle", "pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota" ];
        setDay(dny[new Date().getDay()]);


        return () => console.log("komponenta odpojena");
    }, []);
    return (
        <>
            <p>Dnes je: {day}</p>
        </>
    );
};