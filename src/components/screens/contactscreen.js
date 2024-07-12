import { Link, Outlet } from "react-router-dom";
import Navbar1 from "../navbars/navbar";
// import doctor from "./doctorscreen"
// import engineers from "./engineerscreen"
// import Doctor from "./engineerscreen"

export const Contactscreen = () => {
  return (
    <div>
      <Navbar1 />
      <h1>welcome to Contactscreen screen</h1>
      <Link to={"doctors"}>doctors</Link>
      <Link to={"engineers"}>engineers</Link>
      <Outlet />
    </div>
  );
};
