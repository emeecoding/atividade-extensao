import { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import styles from "./Header.module.scss";

function Header() {
  const [scrolled, setScrolled] = useState(false);

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
          <li className={styles.dropdown}>
            <a href="#">Cursos</a>
            <MdKeyboardArrowDown className={styles.iconArrow} />
            <ul className={styles.dropdownMenu}>
              <li>
                <a href="#">Informática</a>
              </li>
              <li>
                <a href="#">Inglês</a>
              </li>
              <li>
                <a href="#">Educação Financeira</a>
              </li>
              <li>
                <a href="#">ENEM</a>
              </li>
            </ul>
          </li>
          <li className={styles.contato}>
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
