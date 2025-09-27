import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { TfiAlignJustify } from "react-icons/tfi";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 90);
      setMenuOpen(false); // fecha o menu ao rolar
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <h1 className={styles.title}>Rede Escola +</h1>

        <nav className={styles.nav}>
          <ul>
            <li className={styles.active}>
              <a href="#">Início</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Cursos</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </nav>

        <TfiAlignJustify
          className={styles["icon-menu"]}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu mobile"
        />
      </header>

      {menuOpen && (
        <aside className={styles.dropdownMenu}>
          <ul>
            <li>
              <a href="#" onClick={() => setMenuOpen(false)}>
                Início
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setMenuOpen(false)}>
                Sobre
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setMenuOpen(false)}>
                Cursos
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setMenuOpen(false)}>
                Contato
              </a>
            </li>
          </ul>
        </aside>
      )}
    </>
  );
}

export default Header;
