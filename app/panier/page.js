"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function PanierPage() {
  const [panier, setPanier] = useState([]);

  // Charger panier
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("panier")) || [];
    setPanier(data);
  }, []);

  // Supprimer un produit
  const supprimer = (id) => {
    const updated = panier.filter((item) => item.id !== id);
    setPanier(updated);
    localStorage.setItem("panier", JSON.stringify(updated));
  };

  // Vider panier
  const viderPanier = () => {
    setPanier([]);
    localStorage.removeItem("panier");
  };

  // Total prix
  const total = panier.reduce((sum, item) => sum + item.prix, 0);

  return (
    <div className="container mx-auto p-8">

      <h1 className="text-3xl font-bold mb-6">
        🛒 Mon Panier
      </h1>

      {panier.length === 0 ? (
        <div>
          <p>Votre panier est vide</p>

          <Link href="/annonces" className="text-blue-600">
            Voir les annonces
          </Link>
        </div>
      ) : (
        <>
          {/* LISTE PRODUITS */}
          <div className="grid gap-4">
            {panier.map((item) => (
              <div
                key={item.id}
                className="border p-4 rounded shadow flex justify-between items-center"
              >
                <div>
                  <h2 className="font-bold">{item.nom}</h2>
                  <p className="text-green-600">{item.prix} €</p>
                </div>

                <button
                  onClick={() => supprimer(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Supprimer
                </button>
              </div>
            ))}
          </div>

          {/* TOTAL */}
          <div className="mt-6 text-xl font-bold">
            Total : {total.toFixed(2)} €
          </div>

          {/* ACTIONS */}
          <div className="flex gap-3 mt-4">
            <button
              onClick={viderPanier}
              className="bg-gray-800 text-white px-4 py-2 rounded"
            >
              Vider le panier
            </button>

            <button
              onClick={() => alert("Commande validée ✅")}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Commander
            </button>
          </div>
        </>
      )}
    </div>
  );
}