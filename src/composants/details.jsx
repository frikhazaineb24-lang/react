import { useState } from "react";

function Details(props) {
  const { composition, prix } = props.compositions;

  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <button
        className="btn btn-outline-primary mb-2"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide details" : "Show details"}
      </button>

      {showDetails && (
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Composition :</strong> {composition}
          </li>

          <li className="list-group-item">
            <strong>Prix :</strong> {prix}
          </li>
        </ul>
      )}
    </>
  );
}

export default Details;
