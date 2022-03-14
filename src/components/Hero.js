import "./Hero.css";
import hero from "../images/studio.png";

function Hero() {
    
    return (
        <header>
            <div className="container">
                <div className="row">

                    {/* <div className="col-lg-6">
                        <h1 className="hero--header my-5 mx-5">Next Restock</h1>
                        <p className="hero--text my-5 mx-5">Join our mailing list and never miss shop restocks!</p>
                    </div> */}

                    <div className="col-lg-6">
                        <div className="my-5 text-center text-xl-start">
                            <h1 className="fw-bolder mb-2">NEXT</h1>
                            <h1 className="fw-bolder mb-2">RESTOCK</h1>
                            <div id="typed-strings">
                                <p className="typed-msg">Mark your calendars</p>
                                <p className="typed-msg">Mid-April!</p>
                            </div>
                            <span id="typed"></span>
                            <p className="lead fw-normal text-black-50 mb-4">Join our mailing list and never miss shop restocks!</p>
                            <div clasNames="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                <a className="btn btn-primary btn-lg px-4 me-sm-3" href="shop.html">Let's Go Shopping!</a>
                                <a className="btn fw-bolder btn-outline-dark btn-lg px-4" href="about.html">Read Our Story</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <img src={hero} className="hero--img img-fluid my-5"></img>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Hero;