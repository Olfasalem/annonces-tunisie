import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Logo / Nom */}
        <div className="text-center sm:text-left">
          <p className="font-itim text-lg">
            ANNONCES TUNISIE
          </p>

          <p className="text-xs mt-1 text-white/80">
            © 2026 Tous droits réservés
          </p>
        </div>

        {/* Réseaux sociaux avec icônes */}
        <div className="flex items-center gap-4">

          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-primary hover:bg-gray-200 transition"
          >
            <FaFacebookF />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-primary hover:bg-gray-200 transition"
          >
            <FaInstagram />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-primary hover:bg-gray-200 transition"
          >
            <FaLinkedinIn />
          </a>

        </div>

      </div>
    </footer>
  );
}