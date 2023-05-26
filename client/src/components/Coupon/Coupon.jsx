import styles from './coupon.module.css';

const Coupon = (item) => {
  <div className={styles.coupon}>
    <h2>{item.name}</h2>
    <img src={item.src} alt={item.name} />
    <button>Copy Coupon</button>
    {/* copy to clipboard */}
  </div>;
};

export default Coupon;
