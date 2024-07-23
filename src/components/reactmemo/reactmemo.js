import { useState } from "react"
import Heading2 from "./headings"

const Reactmemo=()=>{
    const[data,setdata]=useState(false)
    return(
        <div>
         <Heading2/>
         <button onClick={()=>setdata(!data)}>click here</button>
         {
            data?<h1>true</h1>:<h1>false</h1>
         }
        </div>
    )
}
export default Reactmemo