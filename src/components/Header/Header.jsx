import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { TfiAlignJustify } from "react-icons/tfi";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 90);
      setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Início", id: "home" },
    { label: "Sobre", id: "about" },
    { label: "Cursos", id: "courses" },
    { label: "Contato", id: "contact" },
  ];

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <h1 className={styles.title}>Rede Escola +</h1>

        <nav className={styles.nav}>
          <ul>
            {menuItems.map((item, index) => (
              <li
                key={item.label}
                className={index === activeIndex ? styles.active : ""}
                onClick={() => setActiveIndex(index)}
              >
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.getElementById(item.id);
                    if (section) section.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
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
              <a href="#home" onClick={() => setMenuOpen(false)}>
                Início
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                Sobre
              </a>
            </li>
            <li>
              <a href="#courses" onClick={() => setMenuOpen(false)}>
                Cursos
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
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
