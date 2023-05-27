import axios from 'axios';
import { useState, useEffect } from 'react';
import { Coupon } from '../../components';

// const Coupons = ({ coupons, isLoading, isError }) => {
const Coupons = ({ coupons }) => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('/api/data');
  //       const data = response.data;
  //       setCoupons(data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //       setError(true);
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [coupons]);

  return (
    <section className="coupons">
      <h2>Coupons</h2>

      <div className="coupons__block">
        {/* {isError ? (
          <h2>Error</h2>
        ) : isLoading ? (
          <h3>Loading</h3>
        ) : (
          <>
            {coupons && coupons.length > 0 ? (
              coupons.map((item, key) => <Coupon key={key} item={item} />)
            ) : (
              <h2 className="coupons__block-error">U dont have any coupons </h2>
            )}
          </>
        )} */}
        {coupons && coupons.length > 0 ? (
          coupons.map((item, key) => <Coupon key={key} item={item} />)
        ) : (
          <h2 className="coupons__block-error">U dont have any coupons </h2>
        )}
      </div>
    </section>
  );
};

export default Coupons;
