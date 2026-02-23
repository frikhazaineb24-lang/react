import { useState, useEffect } from "react";
import Card from "./card";
import { Menu as MenuData } from "./data";

function MenuPage({ addToCart }) {
  const [search, setSearch] = useState("");
  const [filteredMenu, setFilteredMenu] = useState(MenuData);

  useEffect(() => {
    if (!search.trim()) {
      setFilteredMenu(MenuData);
      return;
    }

    const results = MenuData.map((cat) => ({
      ...cat,
      plats: cat.plats.filter((plat) =>
        plat.nom.toLowerCase().includes(search.toLowerCase())
      ),
    })).filter((cat) => cat.plats.length > 0);

    setFilteredMenu(results);
  }, [search]);

  return (
    <div className="container py-4">
      <h1 className="mb-4">Notre Menu</h1>

      <input
        type="text"
        placeholder="Rechercher un plat..."
        className="form-control mb-4 p-3 shadow-sm"
        style={{ borderRadius: "10px", fontSize: "1.2rem" }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredMenu.length === 0 ? (
        <h3>Aucun plat trouvé.</h3>
      ) : (
        filteredMenu.map((categorie) => (
          <div key={categorie.id}>
            <h2 className="mt-4 mb-3">{categorie.categorie}</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {categorie.plats.map((plat, index) => (
                <Card
                  key={index}
                  nom={plat.nom}
                  composition={plat.composition}
                  image={plat.image}
                  prix={plat.prix}
                  addToCart={() => addToCart(plat)}
                />
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default MenuPage;
