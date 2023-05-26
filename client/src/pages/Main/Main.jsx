import { useState } from 'react';
import { ProductItem } from '../../components';

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  const [products, setProducts] = useState({});
  const [shops, setShops] = useState();
  // useEffect(() => {
  //   get all products from mongodb
  //   setLoading(false);
  // }, data);

  return (
    <section className="main">
      <h1>Main</h1>
      <div className="main__block">
        {loading ? (
          <div>Loading </div>
        ) : (
          <>
            <div className="main__block-shops">
              {shops.length > 0 ? (
                shops.map((item, key) => (
                  <div className="shop" key={key}>
                    {item.name}
                  </div>
                ))
              ) : (
                <h2 className="main__block-error">No Shops</h2>
              )}
            </div>
            <div className="main__block-products">
              {products.length > 0 ? (
                products.map((item, key) => <ProductItem key={key} item={item} />)
              ) : (
                <h2 className="main__block-error">No Products</h2>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Main;
