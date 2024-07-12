import { Outlet } from "react-router-dom"

const Engineers=()=>{
    return(
        <div>
            <h3>no of engineers</h3>
            <Outlet/>
        </div>
    )
}
export default Engineers