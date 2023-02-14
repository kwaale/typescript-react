import { useState, useEffect, useRef } from "react"

type TimerArgs = {
    milisegundos : number,
}
export const Timer = ( {milisegundos} : TimerArgs) =>{
    const [segundos, setSegundos] = useState(0);
    const ref= useRef<NodeJS.Timeout>()

    useEffect(()=>{
        console.log('useEffect');
        ref.current && clearInterval(ref.current)
        ref.current = setInterval(()=>{
            setSegundos(s => s + 1)
        },milisegundos)

    },[milisegundos])
   
    return (
        <div className="mt-5">
            <h4>Timer: {segundos} </h4>
           
        </div>
    )
}