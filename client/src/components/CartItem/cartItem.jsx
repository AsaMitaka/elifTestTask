import styles from './cartItem.module.css';
import {
  useAddToCart,
  useRemoveFromCart,
  useRemoveProduct,
} from '../../recoil/selectors/cartSelector';

const CartItem = ({ item }) => {
  const addToCart = useAddToCart();
  const removeFromCart = useRemoveFromCart();
  const removeProduct = useRemoveProduct();

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  const handleDeleteFromCart = (item) => {
    removeFromCart(item);
  };

  return (
    <div className={styles.cartItem}>
      <h1>{item.name}</h1>
      <p className={styles.cartItemPrice}>Price: {item.price}</p>
      <div className={styles.cartItemBtnsBlock}>
        <button className={styles.cartItemBtn} onClick={() => handleDeleteFromCart(item)}>
          -
        </button>
        <p className={styles.cartItemAmount}>{item.count}</p>
        <button className={styles.cartItemBtn} onClick={() => handleAddToCart(item)}>
          +
        </button>
      </div>
      <button className={styles.cartItemBtnDelete} onClick={() => removeProduct(item)}>
        x
      </button>
    </div>
  );
};

export default CartItem;
