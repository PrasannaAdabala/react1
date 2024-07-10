
import { Link } from "react-router-dom"
const Navbar1=()=>{
    return(
        <div>
            {/* <BrowserRouter> */}
            <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link to={"/"}>Home</Link>
            </li>
            <li className="nav-item">
            <Link to={"/about"}>About</Link>
            </li>
            <li className="nav-item">
            <Link to={"/contact"}>Contact</Link>
            </li>
            <li className="nav-item">
            <Link to={"/settings"}>settings</Link>
            </li>
            
            
          </ul>
        </div>
      </nav>
      {/* </BrowserRouter> */}
      </div>
    )
}
export default Navbar1 
