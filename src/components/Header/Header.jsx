import { useEffect, useState } from "react";
import styles from "./Header.module.scss";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  // const [menuOpen, setMenuOpen] = useState(false);
  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 90);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
            <a href="">Cursos</a>
          </li>
          <li>
            <a href="">Sobre</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
