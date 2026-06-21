import { annonces } from "@/data/annonces";
import DetailsAnnonceCard from "@/components/DetailsAnnonceCard";

export default async function Page({ params }) {
  const { id } = await params;

  const annonce = annonces.find(
    (a) => a.id === Number(id)
  );

  if (!annonce) {
    return (
      <h1 className="text-center mt-10 text-red-600">
        Annonce introuvable
      </h1>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <DetailsAnnonceCard annonce={annonce} />
    </div>
  );
}