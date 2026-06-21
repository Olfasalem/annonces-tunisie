import Image from "next/image";
import Link from "next/link";

export default function AnnonceCard({ annonce }) {
  return (
    <div className="border rounded-lg shadow-md p-4">
      <Image
        src={annonce.image}
        alt={annonce.nom}
        width={300}
        height={200}
        className="rounded"
      />

      <h2 className="text-xl font-bold mt-3">
        {annonce.nom}
      </h2>

      <p className="text-gray-600">
        {annonce.categorie}
      </p>

      <p className="text-green-600 font-bold">
        {annonce.prix} DT
      </p>

      <Link
        href={`/annonces/${annonce.id}`}
        className="mt-3 inline-block bg-blue-500 text-white px-4 py-2 rounded"
      >
        Voir détails
      </Link>
    </div>
  );
}