import styles from './productItem.module.css';
import { useAddToCart } from '../../recoil/selectors/cartSelector';

const ProductItem = ({ item }) => {
  const addToCart = useAddToCart();

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <div className={styles.productMini}>
      <h1>{item.name}</h1>
      <button onClick={() => handleAddToCart()} className={styles.productMiniBtn}>
        {item.price} Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
