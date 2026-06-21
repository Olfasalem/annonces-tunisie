import Link from "next/link";

export default function Home() {
  return (
    <section
      className="h-[80vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/banner.jpg')",
      }}
    >
      <div className="bg-black/50 p-10 rounded-lg text-center text-white">
        <h1 className="text-5xl font-bold mb-4">
          ANNONCES TUNISIE
        </h1>

        <p className="mb-6">
          Achetez, vendez et trouvez les meilleures offres.
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            href="/annonces"
            className="bg-blue-600 px-6 py-3 rounded hover:bg-blue-700"
          >
            Annonces
          </Link>

          <Link
            href="/publier"
            className="bg-green-600 px-6 py-3 rounded hover:bg-green-700"
          >
            Publier
          </Link>
        </div>
      </div>
    </section>
  );
}