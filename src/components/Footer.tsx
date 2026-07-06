import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <strong>Cascina Rezzani S.R.L. - Società Agricola</strong>
          <p>Sede legale: Via Montorfano, 3 - 25033 Cologne (BS)</p>
          <p>P.IVA e C.F.: 04623470988</p>
        </div>
        <div>
          <p>Registro Imprese: BS</p>
          <p>REA: BS - 628704</p>
          <p>Capitale sociale: 50.000 euro i.v.</p>
          <p>PEC: cascinarezzani@lamiapec.it</p>
        </div>
        <nav aria-label="Link legali">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/cookie-policy">Cookie Policy</Link>
        </nav>
      </div>
    </footer>
  );
}
