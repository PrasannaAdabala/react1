import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Homescreen } from "../screens/homescreen"
import { Aboutscreen } from "../screens/aboutscreen"
import { Contactscreen } from "../screens/contactscreen"
import { Settingsscreen } from "../screens/settingsscreen"
import { Invalidscreen } from "../screens/invalidscreen"
import Productlisting from "../screens/productlisting"

export const Stack=()=>{
    return(
        <div>
           <BrowserRouter>
           <Routes>
            <Route path="/" Component={Homescreen}/>
            <Route path="/about" Component={Aboutscreen}/>
            <Route path="/contact" Component={Contactscreen}/>
            <Route path="/settings" Component={Settingsscreen}/>
            <Route path="*" Component={Invalidscreen}/>
            <Route path="/:location/:restaurantid/info" Component={Productlisting}/>

           </Routes>
           
           </BrowserRouter>
        </div>
    )
}