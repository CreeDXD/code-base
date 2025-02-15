export function Footer() {
  return (
    <footer className="container__footer">
      <div className="container__footer--content">
        <h2>Contactez-nous</h2>
        <p>
          Vous avez des questions ou besoin d'assistance ? N'hésitez pas à nous
          contacter :
        </p>
        <p>
          Email : <a href="mailto:contact@example.com">contact@example.com</a>
        </p>
        <p>
          Téléphone : <a href="tel:+123456789">+1 234 567 89</a>
        </p>
      </div>
      <div className="footer__bottom">
        <p>
          &copy; {new Date().getFullYear()} Nom de l'entreprise. Tous droits
          réservés.
        </p>
      </div>
    </footer>
  )
}
