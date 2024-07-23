import axios from "axios"

const { useEffect, useState } = require("react")

 export const Countrieslist=()=>{
    const[countries,setcountries]=useState([])
    const[selectcountries,setselectcountries]=useState(null)
    useEffect(()=>{
        Fetchdata()
    },[])
    const Fetchdata=async()=>{
        const response =await axios.get("https://restcountries.com/v3.1/all")
        console.log(response,"response")
        const result=Countriesdata(response.data)
        console.log(result)
        setcountries(result)
    }
    const Countriesdata=(data)=>{
    return data.map((each)=>each.name.official)
       
    }
    const countrieshandler=(event)=>{
        setselectcountries(event.target.value)
        Secondapi(event.target.value)
    }       
    const Secondapi=async(selectcountries)=>{
    const response=await axios.get(`https://restcountries.com/v3.1/name/{name} ${selectcountries}`)
    console.log(response)
    }
    return(
        <div>
          <h1>Countrieslist</h1>  
          {
            <select value={selectcountries} onChange={countrieshandler}>
              
               
               {countries.map((eachcountry)=>(
                <option value={eachcountry}>{eachcountry } </option>
                ))}

               
            </select>
          
          }
          <h2>{selectcountries}</h2>
        </div>
    )
}