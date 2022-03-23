import "./Card.css";

function Card(props) {
    return (
        <div>
            <img src={require(`../store/${props.img}`)} />
            <h4>{props.title}</h4>
            <h5>({props.rating})</h5>
            <p>${props.price}.00</p>
            <p>{props.details}</p>
            <a className="btn btn-secondary btn-lg px-4 me-sm-3" href="shop.html">Add to cart</a>
        </div>
    )
}

export default Card;