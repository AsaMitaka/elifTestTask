import styles from './productItem.module.css';

const ProductItem = ({ item, addToCart }) => {
  return (
    <div className={styles.productMini}>
      <h1>{item.name}</h1>
      <img src={item.src} alt={item.name} />
      <button onClick={() => addToCart(item)} className={styles.productMiniBtn}>
        {item.price} Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
