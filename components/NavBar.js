import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">

      <div className="flex items-center gap-3">
     

        <span className="font-bold text-primary">
          ANNONCES TUNISIE
        </span>
      </div>

      <ul className="flex gap-6 font-menu">

        <li>
          <Link
            href="/"
            className="hover:text-primary transition duration-300"
          >
            Accueil
          </Link>
        </li>

        <li>
          <Link
            href="/annonces"
            className="hover:text-primary transition duration-300"
          >
            Annonces
          </Link>
        </li>

        <li>
          <Link
            href="/publier"
            className="hover:text-primary transition duration-300"
          >
            Publier
          </Link>
        </li>

        <li>
          <Link
            href="/inscription"
            className="hover:text-primary transition duration-300"
          >
            Inscription
          </Link>
        </li>

        <li>
          <Link
            href="/contact"
            className="hover:text-primary transition duration-300"
          >
            Contact
          </Link>
        </li>

      </ul>
<button
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
</button>
    </nav>
  );
}