import axios from 'axios';
import styles from './cart.module.css';

import { useRecoilState, useRecoilValue } from 'recoil';
import { cartState } from '../../recoil/atoms/atoms';
import { useClearCart } from '../../recoil/selectors/cartSelector';
import { userInfoSelector } from '../../recoil/selectors/userSelector';
import CartItem from '../../components/CartItem/cartItem';

const Cart = () => {
  const cart = useRecoilValue(cartState);
  const clearCart = useClearCart();
  const [userInfo, setUserInfo] = useRecoilState(userInfoSelector);

  const ChangeInfo = (e) => {
    const getName = e.target.name;
    const value = e.target.value;

    setUserInfo((prev) => ({
      ...prev,
      [getName]: value,
    }));
  };

  const cartTotal = cart.reduce((total, item) => total + item.price * item.count, 0);

  const checkData = async () => {
    try {
      if (
        !(
          userInfo.name &&
          userInfo.phone &&
          userInfo.address &&
          userInfo.email &&
          cart &&
          cartTotal
        )
      ) {
        console.log('Error');
        return;
      }

      if (userInfo.address.length < 5 || userInfo.address.length > 20) {
        console.log('Error');
        return;
      }

      if (userInfo.phone.length < 5 || userInfo.phone.length > 12) {
        console.log('Error');
        return;
      }

      if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(userInfo.email)) {
        console.log('Error');
        return;
      }

      const data = {
        userInfo,
        cart,
        cartTotal,
      };

      await axios.post('/api/data/cart', data);
      clearCart();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={styles.cart}>
      <div className={styles.cartInfo}>
        <label htmlFor="name" className={styles.cartInfoLabel}>
          Name:
          <input
            type="text"
            name="name"
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
            name="email"
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
            name="phone"
            className={styles.cartInfoInput}
            placeholder="phonenumber"
            value={userInfo.phone}
            onChange={(e) => ChangeInfo(e)}
          />
        </label>
        <label htmlFor="address" className={styles.cartInfoLabel}>
          Address:
          <input
            type="text"
            name="address"
            className={styles.cartInfoInput}
            placeholder="address"
            value={userInfo.address}
            onChange={(e) => ChangeInfo(e)}
          />
        </label>
      </div>
      <div className={styles.cartProducts}>
        <h2>Products</h2>
        <div className={styles.cartProductsBlock}>
          {cart && cart.length > 0 ? (
            cart.map((item, key) => <CartItem item={item} key={key} />)
          ) : (
            <div>No Items in cart</div>
          )}
        </div>
        <div className={styles.cartProductAmount}>
          <h1>Total: {cartTotal}</h1>
        </div>
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
