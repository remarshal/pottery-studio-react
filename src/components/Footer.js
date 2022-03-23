import "./Footer.css";
import Mug from "../images/mug.png";

function Footer() {
    return (
        <footer className="bg-dark py-4 mt-auto">
            <div className="container px-5">
                <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div className="col-auto">
                        <div className="small m-0 text-white">Copyright &copy; Pottery Studio 2022</div>
                        <a className="link-light small" href="#!">Privacy</a>
                        <span className="text-white mx-1">&middot;</span>
                        <a className="link-light small" href="#!">Terms</a>
                        <span className="text-white mx-1">&middot;</span>
                        <a className="link-light small" href="#!">Contact</a>
                    </div>
                    <div className="col text-end">
                        <img src={Mug} width="50px" alt="Mug" />
                    </div>
                    <div className="col text-start">
                        <a href="https://www.instagram.com/#" className="fa fa-instagram"></a>
                        <a href="https://www.facebook.com/#" className="fa fa-facebook"></a>
                    </div>
                    <div className="col-auto">
                        <div className="small m-0 text-white">Pottery Studio</div>
                        <div className="small m-0 text-white">1234 Main Street, Avon CT 06001</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;