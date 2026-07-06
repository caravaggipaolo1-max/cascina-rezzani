import Image from "next/image";
import Link from "next/link";

type HeaderProps = {
  compact?: boolean;
};

export function Header({ compact = false }: HeaderProps) {
  return (
    <header className={compact ? "site-header compact" : "site-header"}>
      <Link className="brand" href="/" aria-label="Torna alla home">
        <Image
          className="brand-logo"
          src="/images/logos/cascina-rezzani-logo.png"
          width={972}
          height={264}
          alt=""
          priority
        />
      </Link>
      <nav className="site-nav" aria-label="Navigazione principale">
        <a href="/#storia">La nostra storia</a>
        <a href="/#prodotti">Prodotti</a>
        <a href="/#contatti">Contatti</a>
      </nav>
    </header>
  );
}
