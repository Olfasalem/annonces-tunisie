import { annonces } from "../data/annonces";
import AnnonceCard from "./AnnonceCard";



export default function AnnonceList() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {annonces.map((annonce) => (
        <AnnonceCard
          key={annonce.id}
          annonce={annonce}
        />
      ))}
    </div>
  );
}