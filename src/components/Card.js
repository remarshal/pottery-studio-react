import "./Card.css";
import mug1 from "../store/mug-1.png"
import mug2 from "../store/mug-2.png"
import mug3 from "../store/mug-3.png"
import mug4 from "../store/mug-4.png"

function Card() {
    return (
        <div>
            <img src={mug1} />
            <h3>Nantahala</h3>
            <p>$105.00</p>
            <p>4.25" in tall by 4" in wide</p>
            <a className="btn btn-secondary btn-lg px-4 me-sm-3" href="shop.html">Add to cart</a>
        </div>
    )
}

export default Card;