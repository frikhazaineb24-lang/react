import React from "react";

function Home() {
  return (
    <div className="container mt-4">
      <div className="text-center mb-5">
        <h1>Bienvenue chez nous</h1>
        <img
          src="https://media.istockphoto.com/id/1294443950/photo/two-young-female-friends-cooking-in-the-kitchen.jpg?s=612x612&w=0&k=20&c=zH4KS3X3GBpvhC4AWiUJETcBrOoelUgeulPfCCtLAE8="
          alt="Cuisine amicale"
          style={{ maxWidth: "100%", height: "auto", borderRadius: "12px" }}
        />
      </div>

      
      <p>
  Chez Restaurant Délice, nous croyons que chaque repas est une expérience unique.
  Notre cuisine met en valeur des recettes authentiques revisitées avec une touche moderne.
  Nous sélectionnons soigneusement nos ingrédients pour garantir fraîcheur, qualité et goût exceptionnel.
  Que ce soit pour un déjeuner rapide, un dîner en famille ou une occasion spéciale,
  nous vous accueillons dans une ambiance chaleureuse et conviviale.
</p>
    </div>
  );
}

export default Home;
