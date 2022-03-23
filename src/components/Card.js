import "./Card.css";
import Star from "../images/star.png";

function Card(props) {
    const starImg = <img className="card--star" src={Star} />;
    const numStars = function () {
        if (props.rating === 5) {
            return (
                <span>{starImg}{starImg}{starImg}{starImg}{starImg}</span>
            );
        } else if (props.rating === 4) {
            return (
                <span>{starImg}{starImg}{starImg}{starImg}</span>
            );
        } else if (props.rating === 3) {
            return (
                <span>{starImg}{starImg}{starImg}</span>
            );
        } else if (props.rating === 2) {
            return (
                <span>{starImg}{starImg}</span>
            );
        } else {
            return (
                <span>{starImg}</span>
            );
        }
    };

    return (
        <div className="row card--section">
            <div className="col-3 mb-5">
                <div className="card h-100">
                    {props.sale && <div className="card--sale">SALE</div>}
                    <img className="card-img-top" src={require(`../store/${props.img}`)} />
                    <div className="card-body p-4">
                        <div className="text-center">
                            <h4 className="fw-bolder">{props.title}</h4>
                            <span>{numStars()}({props.rating})</span>
                            <span></span>
                            <h6 className="card--price">${props.price}.00</h6>
                            <p>{props.details}</p>
                        </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Card;