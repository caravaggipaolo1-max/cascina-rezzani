import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <strong>Società Agricola Cascina Rezzani</strong>
          <p>P.IVA: Inserire P.IVA</p>
          <p>Indirizzo: Inserire indirizzo</p>
        </div>
        <div>
          <p>Email: Inserire email</p>
          <p>Telefono: Inserire telefono</p>
        </div>
        <nav aria-label="Link legali">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/cookie-policy">Cookie Policy</Link>
        </nav>
      </div>
    </footer>
  );
}
