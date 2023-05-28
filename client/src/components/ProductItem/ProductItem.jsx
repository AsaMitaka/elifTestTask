import styles from './productItem.module.css';
import { useAddToCart } from '../../recoil/selectors/cartSelector';
import { useRecoilValue } from 'recoil';
import { cartState } from '../../recoil/atoms/atoms';
import { useState, useEffect } from 'react';

const ProductItem = ({ item }) => {
  const [error, setError] = useState('');
  const cart = useRecoilValue(cartState);
  const addToCart = useAddToCart();

  const handleAddToCart = () => {
    if (cart.length === 0 || cart.every((cartItem) => cartItem.ctg === item.ctg)) {
      addToCart(item);
    } else {
      setError('You can only add items from the same category to the cart.');
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError('');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div className={styles.productMini}>
      <h1>{item.name}</h1>
      {error && <div className={styles.productNotification}>{error}</div>}
      <button onClick={() => handleAddToCart()} className={styles.productMiniBtn}>
        {item.price} Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
