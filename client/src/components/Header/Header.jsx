import { Link } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.headerList}>
        <li className={styles.headerListLi}>
          <Link to="/" className={styles.headerListLink}>
            Logo
          </Link>
        </li>
        <li className={styles.headerListLi}>
          <Link to="/coupons" className={styles.headerListLink}>
            Coupons
          </Link>
        </li>
        <li className={styles.headerListLi}>
          <Link to="/cart" className={styles.headerListLink}>
            Cart
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
