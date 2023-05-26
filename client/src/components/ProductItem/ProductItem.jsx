import { useState } from 'react';

const ProductItem = (item) => {
  const [count, addCount] = useState(0);

  const addItem = () => {
    addCount((prev) => prev + 1);
  };

  return (
    <div className="product__mini">
      <h1>{item.name}</h1>
      <img src={item.src} alt={item.name} />
      <button onClick={addItem}>
        {item.price} Add to Cart counter: {count}
      </button>
    </div>
  );
};

export default ProductItem;
