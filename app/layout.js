import { Itim, Montserrat, Poppins } from "next/font/google";
import "./globals.css";

import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

// ✅ Déclaration des fonts (OBLIGATOIRE avant usage)
const itim = Itim({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-itim",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-menu",
});

const poppins = Poppins({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "Site d'annonces ANNONCES TUNISIE",
  description:
    "Trouver les meilleures annonces en Tunisie. Vendez, achetez et publiez votre annonce près de chez vous.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${itim.variable} ${montserrat.variable} ${poppins.variable} min-h-screen flex flex-col`}
      >
        <Header />
        <NavBar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}