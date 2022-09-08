import React, {useState} from "react";
import './Counter.css';

function Count() {

    const [counter, setNum] = useState("");

    const IncNum = () => {
        setNum(Number(counter) + 1);
    }

    const DecNum = () => {
        setNum(counter - 1);
    }

    const Reset = () =>{
        setNum(0);
    }

    return (
       <div className="count">
       <input className="num" value={counter} onChange={(e) => setNum(e.target.value)}></input><br/><br/>
       <button onClick={IncNum}>Increment</button>
       <button onClick={DecNum}>Decrement</button>
       <button onClick={Reset}>Reset</button>
       </div>
    );

} 

export  default Count;