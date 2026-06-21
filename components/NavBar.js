import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">

      <div>
        <span className="font-bold text-primary">
          ANNONCES TUNISIE
        </span>
      </div>

      <ul className="flex gap-6 font-menu">
        <li><Link href="/">Accueil</Link></li>
        <li><Link href="/annonces">Annonces</Link></li>
        <li><Link href="/publier">Publier</Link></li>
        <li><Link href="/inscription">Inscription</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>

      <Link
        href="/inscription"
        className="
          bg-primary
          text-white
          px-5 py-2
          rounded-full
          font-medium
          shadow-md
          hover:bg-secondary
          hover:shadow-lg
          hover:scale-105
          transition-all duration-300
        "
      >
        Connexion
      </Link>

    </nav>
  );
}