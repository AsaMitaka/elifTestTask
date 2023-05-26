import { useState } from 'react';
import { Coupon } from '../../components';

const Coupons = () => {
  const [coupons, setCoupons] = useState();

  //   useEffect(() => {
  //     get data from mongoose coupons
  //   }, coupons);

  return (
    <section className="coupons">
      <h2>Coupons</h2>

      <div className="coupons__block">
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
