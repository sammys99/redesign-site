import React from "react";
import styles from "./header.module.css";


function Header() {
 return(
<header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a href="#home" className={styles.navLink}>Home</a></li>
          <li className={styles.navItem}><a href="#about" className={styles.navLink}>About</a></li>
          <li className={styles.navItem}><a href="#works" className={styles.navLink}>Works</a></li>
          <li className={styles.navItem}><a href="#contact" className={styles.navLink}>Contact</a></li>
          <li className={styles.navItem}><a href="#tools-and-skills" className={styles.navLink}>Tools & Skills</a></li>
        </ul>
      </nav>
    </header>
 );
}

export default Header;