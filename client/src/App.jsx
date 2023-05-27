import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './app.module.css';

import { Routes, Route } from 'react-router-dom';
import { Footer, Header, ProductItem } from './components';
import { Coupons, Main, Cart } from './pages';

function App() {
  const [cart, setCart] = useState([]);
  const [coupons, setCoupons] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/data/');
        const responseData = response.data.data;
        setLoading(false);
        setProducts(responseData);
      } catch (error) {
        setError(true);
        setLoading(false);
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item._id === product._id);

    if (existingProductIndex !== -1) {
      const updatedCart = cart.map((item, index) => {
        if (index === existingProductIndex) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, { ...product, count: 1 }]);
    }
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('/api/data/coupons');
  //       const responseData = response.data;
  //       setLoading(false);
  //       setCoupons(responseData);
  //     } catch (error) {
  //       setError(true);
  //       setLoading(false);
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, [coupons]);

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Routes>
          <Route
            path="/"
            element={
              <Main
                products={products}
                addToCart={addToCart}
                isLoading={isLoading}
                isError={isError}
              />
            }
          />
          <Route path="/product/:id" element={<ProductItem addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route
            path="/coupons"
            element={
              <Coupons
                coupons={coupons}
                // isLoading={isLoading} isError={isError}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
