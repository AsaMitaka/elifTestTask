import styles from './productItem.module.css';
import { useAddToCart, useRemoveFromCart } from '../../recoil/selectors/cartSelector';

const ProductItem = ({ item }) => {
  const addToCart = useAddToCart();
  const removeFromCart = useRemoveFromCart();

  const handleAddToCart = () => {
    addToCart(item);
  };

  const handleDeleteFromCart = () => {
    removeFromCart(item);
  };

  return (
    <div className={styles.productMini}>
      <h1>{item.name}</h1>
      <img src={item.src} alt={item.name} />
      <button onClick={() => handleAddToCart()} className={styles.productMiniBtn}>
        {item.price} Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
