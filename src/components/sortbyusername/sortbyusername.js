import { useState } from "react"

const Username=()=>{
    const[data,setdata]=useState([
       
         {name:"Prasanna"},
         {name:"Mounika"},
        { name:"Bhargavi"},
         {name:"Gowtham"},
        { name:"Tharun"},
        {name:"Ashish"}

])
    const buttonhandler=()=>{
     const sortdata=[...data.sort((a,b)=>{
        if(a.name>b.name){
            return 1
        }
        if(b.name>a.name){
            return -1
        }
     })]
     setdata(sortdata)
    }
return(
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex items-center justify-center" style={{backgroundColor:"#708871"}}>
<div className="p-8 bg-white rounded shadow-lg" style={{backgroundColor:"#606676",color:"white"}}>
    
     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"style={{ border: "none" }} onClick={buttonhandler}>Click Here </button>
   {
    data.map((eachdata)=>(
        <>
        <h1>{eachdata.name}</h1>
        </>
    ))
   }
    </div>
</div>
)
}
export default Username
