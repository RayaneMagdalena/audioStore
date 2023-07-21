// Styles
import styles from "./NavBarHome.module.css";
// Icons
import menu from "../../../public/images/icon-menu-variant.svg";
import logo from "../../../public/images/logo.svg";
import close from "../../../public/images/close.png";
import arrow from "../../../public/images/right-arrow.png";
// React-Router
import { NavLink } from "react-router-dom";
// Hooks
import { useState } from "react";


const NavBarHome = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={styles.navBarContainer}>
      <button onClick={toggleMenu} className={styles.buttonMenu}>
        <img
          src={menuOpen ? close : menu}
          alt=""
          className={menuOpen ? styles.closeIcon : ""}
        />
      </button>

      <div className={styles.buttonLogo}>
        <img src={logo} alt="" />
        <h1 className={styles.title}>Audio</h1>
      </div>

      <div></div>

      {menuOpen && (
        <div className={styles.menuContainer}>
          <NavLink to="/search" className={styles.menuItem} onClick={closeMenu}>
            Search
            <img src={arrow} alt="" className={styles.iconMenuItem} />
          </NavLink>

          <NavLink
            to="/products"
            className={styles.menuItem}
            onClick={closeMenu}
          >
            Explore Products
            <img src={arrow} alt="" className={styles.iconMenuItem} />
          </NavLink>

          <NavLink to="/cart" className={styles.menuItem} onClick={closeMenu}>
            Shopping Cart
            <img src={arrow} alt="" className={styles.iconMenuItem} />
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default NavBarHome;
