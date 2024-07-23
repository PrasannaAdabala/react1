import { useEffect, useState } from "react"

const hocexample=(Wrappedcomponent)=>{
return(props)=>{
    const[data,setdata]=useState({})
    useEffect(()=>{
     const data1={
        name:"prasanna",
        age:"21"
     }
     setdata(data1)
    },[])
    return <Wrappedcomponent data={data} {...props}/>

}
}
export default hocexample