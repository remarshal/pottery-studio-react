import logo from "../images/mug.png";
import "./Navbar.css";

function Navbar() {
    return (
        <nav>
            <img src={logo} className="nav--icon"/>
        </nav>
    );
}

export default Navbar;