import "./Hero.css";
import hero from "../images/studio.png";

function Hero() {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="hero--header">Next Restock</h1>
                        <p className="hero--text">Join our mailing list and never miss shop restocks!</p>
                    </div>
                    <div className="col-lg-6">
                        <img src={hero} className="hero--photo img-fluid rounded-3 my-5"></img>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Hero;