function Panier({ cart, setCart }) {
  const total = cart.reduce((acc, plat) => {
    const prixNum = parseFloat(plat.prix.replace(/[^\d]/g, '')) || 0;
    return acc + prixNum;
  }, 0);
  const removeFromCart = (indexToRemove) => {
    const newCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(newCart);
  };

  return (
    <div className="container py-5">
      <h1>Panier</h1>
      {cart.length === 0 ? (
        <p>Votre panier est vide pour le moment</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.map((plat, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h5>{plat.nom}</h5>
                  <small>{plat.composition}</small>
                </div>
                <div>
                  <span className="badge bg-primary rounded-pill me-2">{plat.prix}</span>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeFromCart(index)}
                  >
                    Supprimer
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h4>Total : {total} TND</h4>
        </>
      )}
    </div>
  );
}

export default Panier;
