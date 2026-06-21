import AnnonceList from "../../components/AnnonceList";

export default function AnnoncesPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        Toutes les annonces
      </h1>

      <AnnonceList />
      
    </div>
  );
}