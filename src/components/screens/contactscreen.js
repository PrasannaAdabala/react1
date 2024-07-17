import { Link, Outlet } from "react-router-dom";
import Navbar1 from "../navbars/navbar";
import { useContext } from "react";
import { Profilewrapper } from "../stack/stack";
// import doctor from "./doctorscreen"
// import engineers from "./engineerscreen"
// import Doctor from "./engineerscreen"

export const Contactscreen = () => {
  const profileinfo = useContext(Profilewrapper)
  console.log(profileinfo)
  const changename=()=>{
    debugger
   profileinfo.changename("bala sri")

  }
  return (
    <div>
      <Navbar1 />
      <h1>welcome to Contactscreen screen {profileinfo.profileinfo.name} </h1>
      <Link to={"doctors"}>doctors</Link>
      <Link to={"engineers"}>engineers</Link>
      <Outlet />
      <button onClick={changename}>changename</button>
    </div>
  );
};
