import { useState } from 'react';
import styles from './cart.module.css';

const Cart = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const [cartData, setCartData] = useState();

  const ChangeInfo = (e) => {
    const getType = e.target.type;
    const value = e.target.value;
    setUserInfo((prev) => ({
      ...prev,
      [getType]: value,
    }));
  };

  const checkData = () => {
    if (!userInfo) {
      return;
    }

    if (!cartData) {
      return;
    }
  };

  return (
    <section className={styles.cart}>
      <div className={styles.cartInfo}>
        <label htmlFor="name" className={styles.cartInfoLabel}>
          Name:
          <input
            type="text"
            className={styles.cartInfoInput}
            placeholder="name"
            value={userInfo.name}
            onChange={(e) => ChangeInfo(e)}
          />
        </label>
        <label htmlFor="email" className={styles.cartInfoLabel}>
          Email:
          <input
            type="email"
            className={styles.cartInfoInput}
            placeholder="email"
            value={userInfo.email}
            onChange={(e) => ChangeInfo(e)}
          />
        </label>
        <label htmlFor="phone" className={styles.cartInfoLabel}>
          Phone:
          <input
            type="number"
            className={styles.cartInfoInput}
            placeholder="phonenumber"
            value={userInfo.number}
            onChange={(e) => ChangeInfo(e)}
          />
        </label>
        <label htmlFor="address" className={styles.cartInfoLabel}>
          Name:
          <input
            type="address"
            className={styles.cartInfoInput}
            placeholder="address"
            value={userInfo.address}
            onChange={(e) => ChangeInfo(e)}
          />
        </label>
      </div>
      <div className={styles.cartProducts}>
        <h2>Products</h2>
      </div>
      <div className={styles.cartBlockButton}>
        <button onClick={checkData} className={styles.cartButton}>
          SUBMIT
        </button>
      </div>
    </section>
  );
};
export default Cart;
