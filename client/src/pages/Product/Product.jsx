import { useState } from 'react';

const Product = ({ item, addToCart }) => {
  const [count, addCount] = useState(0);

  const addItem = () => {
    addCount((prev) => prev + 1);
  };

  return (
    <div className="product">
      <h1>{item.name}</h1>
      <img src={item.src} alt={item.name} />
      <p>{item.info}</p>
      <button onClick={addItem}>
        {item.price} Add to Cart counter: {count}
      </button>
    </div>
  );
};

export default Product;
