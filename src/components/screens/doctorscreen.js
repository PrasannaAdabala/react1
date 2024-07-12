import { Outlet } from "react-router-dom"

export const Doctor=()=>{
    return(
        <div>
            <h3>no of doctors</h3>
            <Outlet/>
        </div>
    )
}