import { ProductItem } from '../../components';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
  isErrorState,
  isLoadingState,
  productsState,
  selectedCtgState,
} from '../../recoil/atoms/atoms';
import { selectedCtgSelector } from '../../recoil/selectors/ctgSelector';
import styles from './main.module.css';

const Main = () => {
  const isError = useRecoilValue(isErrorState);
  const isLoading = useRecoilValue(isLoadingState);
  const [selectedCtg, setSelectedCtg] = useRecoilState(selectedCtgState);
  const selectedProducts = useRecoilValue(selectedCtgSelector);
  const products = useRecoilValue(productsState);

  const categories = [...new Set(products.map((product) => product.ctg))];

  const handleCategorySelect = (category) => {
    setSelectedCtg(category);
  };

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
            <div className={styles.mainBlockCtg}>
              <button
                onClick={() => handleCategorySelect(null)}
                className={selectedCtg === null ? styles.mainActiveA : styles.mainA}>
                All
              </button>
              {categories.length > 0 ? (
                categories.map((ctg, key) => (
                  <button
                    key={key}
                    onClick={() => handleCategorySelect(ctg)}
                    className={selectedCtg === ctg ? styles.mainActiveA : styles.mainA}>
                    {ctg}
                  </button>
                ))
              ) : (
                <h2 className={styles.mainBlockError}>No Categories</h2>
              )}
            </div>
            <div className={styles.mainBlockProducts}>
              {selectedProducts.length > 0 ? (
                selectedProducts.map((item, key) => <ProductItem key={key} item={item} />)
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
