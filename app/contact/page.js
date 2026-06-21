import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="container">
      <h1>Contactez-nous</h1>

      <div className="contact-grid">
        <ContactForm />

        <div className="contact-info">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
            alt="Contact"
          />

          <h2>Informations de contact</h2>

          <p>📍 Avenue Habib Bourguiba, Tunis</p>
          <p>📞 +216 20 123 456</p>
          <p>📧 contact@annonces.tn</p>
        </div>
      </div>
    </div>
  );
}