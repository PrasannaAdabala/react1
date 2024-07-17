import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homescreen } from "../screens/homescreen";
import { Aboutscreen } from "../screens/aboutscreen";
import { Contactscreen } from "../screens/contactscreen";
import { Settingsscreen } from "../screens/settingsscreen";
import { Invalidscreen } from "../screens/invalidscreen";
import Productlisting from "../screens/productlisting";
import { Doctor } from "../screens/doctorscreen";
import Engineers from "../screens/engineerscreen";
import { createContext,  useState } from "react";

 export const Profilewrapper = createContext()
export const Stack = () => {
  const [profileinfo,setprofileinfo]=useState({
    name:"prasanna"
  })
  const changename=(name)=>{
    debugger
    setprofileinfo({...profileinfo, name:name})
  }
  return (
    <Profilewrapper.Provider value={{
      profileinfo:profileinfo,
      changename,
    }}>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/about" element={<Aboutscreen />} />
          <Route path="/contact" element={<Contactscreen />}>
            <Route path="doctors" element={<Doctor />} />
            <Route path="engineers" element={<Engineers />} />
          </Route>
          <Route path="/settings" element={<Settingsscreen />} />
          <Route path="*" element={<Invalidscreen />} />
          <Route
            path="/:location/:restaurant/info"
            element={<Productlisting />}
          />
        </Routes>
      </BrowserRouter>
     
    </div>
    </Profilewrapper.Provider>
  
  );
};
