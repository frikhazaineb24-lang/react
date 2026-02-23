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
        Depuis sa création, Restaurant Délice s’est donné pour mission de
        partager la richesse de la cuisine traditionnelle et internationale
        avec passion et authenticité. Chaque plat est préparé avec soin,
        des ingrédients frais et locaux, pour offrir à nos clients une expérience
        gustative inoubliable. Notre équipe dévouée allie savoir‑faire culinaire
        et service chaleureux pour faire de chaque visite un moment unique.
      </p>
    </div>
  );
}

export default Home;
