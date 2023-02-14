import { useState } from "react"

export const Counter = () =>{
    const [counter, setCounter] = useState(0);

    const incrementar = ():void =>{
        setCounter(counter + 1);
    }
    const decrementar = (numero : number = 1) : void =>{
        setCounter(counter - numero);
    }
    
    return (
        <div className="mt-5">
            <h4>Counter + Type</h4>
            <span>Valor: {counter}</span>
            <button
            className="btn btn-outline-primary mt-2"
            onClick={incrementar}
            >
               +
            </button>
            <button
            className="btn btn-outline-primary mt-2"
            onClick={()=>decrementar(2)}
            >
               -
            </button>
            <button
            className="btn btn-outline-danger mt-2"
            onClick={()=>(setCounter(0))}
            >
               Reset
            </button>
        </div>
    )
}