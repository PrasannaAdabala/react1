import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react"

const UseStateexample=()=>{
   const intialState=10;
   const  [count, setcount]= useState(intialState);
//   const countIncreaseHandler=()=>{
//   setcount((count)=>count + 1);
//    }
//    const ()=>counthandler("increment")=()=>{
//     if(count>0)
//     setcount((count)=>count-1)
//    }
//    const countresethandler=()=>{
//     setcount((count)=>0)
//    }
const counthandler=(type,scale)=>{
    switch(type){
        case "increment":
            setcount((count)=>count + scale);
            break;
            case "decrement":
                if(count>0)
            setcount((count)=>count - scale);
            break;
            case "reset":
            setcount((count)=>0);
            break;
            default:
                break;

    };
};
  

  
 
    return(
        <div>
            <h3>{count}</h3>
        <button onClick={()=>counthandler("increment",10)}>count increase</button>
        <button onClick={()=>counthandler("decrement",10)}>count decrease</button>
        <button onClick={()=>counthandler("reset")}>count reset</button>
        </div>
    )
}
export default UseStateexample