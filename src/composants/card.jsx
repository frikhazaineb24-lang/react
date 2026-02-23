import Details from "./details";

function Card(props) {
  let compositions = {
    composition: props.composition,
    prix: props.prix
  };

  return (
    <div className="col">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={props.image}
          className="card-img-top"
          alt={props.nom}
          width={100}
          height={300}
        />
        <div className="card-body">
          <h5 className="card-title">{props.nom}</h5>

          <Details compositions={compositions} />

          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <button 
                className="btn btn-primary"
                onClick={props.addToCart}
              >
                Choisir
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
