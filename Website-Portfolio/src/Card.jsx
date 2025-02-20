

function Card(props) {
    return(
        <div className="Card">
            <p>{props.title}</p>
            <p>{props.desc}</p>
        </div>

    );
}

export default Card;