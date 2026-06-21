"use client";

import { useState } from "react";

export default function DetailsAnnonceCard({ annonce }) {
  const [message, setMessage] = useState("");

  // Commander
  const commander = () => {
    alert("Commande confirmée");
  };

  // Ajouter au panier
  const ajouterPanier = () => {
    const panier = JSON.parse(localStorage.getItem("panier")) || [];

    const existe = panier.find((p) => p.id === annonce.id);

    if (!existe) {
      panier.push(annonce);
      localStorage.setItem("panier", JSON.stringify(panier));
      setMessage("Ajouté au panier 🛒");
    } else {
      setMessage("Déjà dans le panier");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">

      <img
        src={annonce.image}
        alt={annonce.nom}
        className="w-full h-80 object-cover rounded-lg"
      />

      <h1 className="text-3xl font-bold mt-4">
        {annonce.nom}
      </h1>

      <p className="mt-3">{annonce.description}</p>

      <p className="text-green-600 font-bold mt-2">
        {annonce.prix} €
      </p>

      {/* BOUTONS */}
      <div className="flex gap-3 mt-5">

        <button
          onClick={commander}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Commander
        </button>

        <button
          onClick={ajouterPanier}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Ajouter au panier 🛒
        </button>

      </div>

      {/* MESSAGE */}
      {message && (
        <p className="mt-3 text-green-600 font-bold">
          {message}
        </p>
      )}
    </div>
  );
}