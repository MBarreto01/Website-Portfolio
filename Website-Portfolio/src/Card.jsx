

function Card(props) {
    return(
        <div className="card">
            <p className="cardTitle">{props.title}</p>
            <p>{props.desc}</p>
        </div>

    );
}

export default Card;