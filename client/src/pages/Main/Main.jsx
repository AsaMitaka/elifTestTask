import { ProductItem } from '../../components';
import styles from './main.module.css';

const Main = ({ products, isLoading, isError, addToCart }) => {
  return (
    <section className={styles.main}>
      <h1>Main</h1>
      <div className={styles.mainBlock}>
        {isError ? (
          <h2>Error</h2>
        ) : isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            {/* <div className="main__block-shops">
              {shops.length > 0 ? (
                shops.map((item, key) => (
                  <div className="shop" key={key}>
                    {item.name}
                  </div>
                ))
              ) : (
                <h2 className="main__block-error">No Shops</h2>
              )}
            </div> */}
            <div className={styles.mainBlockProducts}>
              {products.length > 0 ? (
                products.map((item, key) => (
                  <ProductItem addToCart={addToCart} key={key} item={item} />
                ))
              ) : (
                <h2 className={styles.mainBlockError}>No Products</h2>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Main;
