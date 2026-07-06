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
          src="/images/logos/logo-placeholder.png"
          width={42}
          height={42}
          alt=""
          priority
        />
        <span>Società Agricola Cascina Rezzani</span>
      </Link>
      <nav className="site-nav" aria-label="Navigazione principale">
        <a href="/#storia">La nostra storia</a>
        <a href="/#prodotti">Prodotti</a>
        <a href="/#contatti">Contatti</a>
      </nav>
    </header>
  );
}
