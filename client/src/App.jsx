import { useState } from 'react';
import styles from './app.module.css';
import { Routes, Route } from 'react-router-dom';
import { Footer, Header } from './components';
import { Coupons, Main, Cart } from './pages';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/coupons" element={<Coupons />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

/* react-router-dom  */
