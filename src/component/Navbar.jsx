import styles from './Navbar.module.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul className={styles.topnav}>
          <li><Link to="/" className={styles.navLink}>Home</Link></li>
          <li><Link to="/about" className={styles.navLink}>About</Link></li>
          <li><Link to="/menu" className={styles.navLink}>Menu</Link></li>
          <li><Link to="/booking" className={styles.navLink}>Booking</Link></li>
          <div className={styles.list}>Foodeader</div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
