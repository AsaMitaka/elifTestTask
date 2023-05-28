import axios from 'axios';
import styles from './app.module.css';

import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Footer, Header, ProductItem } from './components';
import { Coupons, Main, Cart } from './pages';
import { useRecoilState } from 'recoil';
import { cartState, productsState, isLoadingState, isErrorState } from './recoil/atoms/atoms';

function App() {
  const [cart, setCart] = useRecoilState(cartState);
  const [products, setProducts] = useRecoilState(productsState);
  const [isLoading, setLoading] = useRecoilState(isLoadingState);
  const [isError, setError] = useRecoilState(isErrorState);

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

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product/:id" element={<ProductItem />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/coupons" element={<Coupons />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
