
import { NavLink } from "react-router-dom"
import "./navbar.css"
const Navbar1=()=>{
    return(
        <div>
            {/* <BrowserRouter> */}
            <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
            <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to={"/about"}>About</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to={"/contact"}>Contact</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to={"/settings"}>settings</NavLink>
            </li>
            
            
          </ul>
        </div>
      </nav>
      {/* </BrowserRouter> */}
      </div>
    )
}
export default Navbar1 
