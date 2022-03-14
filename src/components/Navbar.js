import logo from "../images/mug.png";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="index.html" id="navBrand"><img class="img-fluid" src={logo} alt="Mug" width="150px" />Pottery Studio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a class="nav-link active" aria-current="page" href="index.html">Home</a></li>
                        <li className="nav-item"><a class="nav-link" href="about.html">About</a></li>
                        <li className="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                        <li className="nav-item"><a class="nav-link" href="contact.html">Shop</a></li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;