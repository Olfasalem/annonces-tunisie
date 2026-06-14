import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center mt-10">
      <h2 className="text-4xl font-bold text-primary">
        Bienvenue sur ANNONCES TUNISIE
      </h2>

      <p className="mt-4">
        Achetez, vendez et trouvez les meilleures offres.
      </p>

      <Link
        href="/contact"
        className="text-sm border border-primary text-primary
                   px-4 py-2 rounded-md mt-6 inline-block
                   hover:bg-primary hover:text-white
                   transition-all duration-300"
      >
        Contactez-nous
      </Link>
    </div>
  );
}