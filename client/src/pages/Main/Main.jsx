import axios from 'axios';
import { useState, useEffect } from 'react';
import { ProductItem } from '../../components';

const Main = () => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});

  const [products, setProducts] = useState({});
  const [shops, setShops] = useState();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('/api/data');
  //       const data = response.data;
  //       setData(data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //       setError(true);
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [data]);

  return (
    <section className="main">
      <h1>Main</h1>
      <div className="main__block">
        {isError ? (
          <h2>Error</h2>
        ) : isLoading ? (
          <div>Loading...</div>
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
