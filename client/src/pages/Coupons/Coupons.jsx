import { Coupon } from '../../components';
import { useRecoilValue } from 'recoil';
import { couponsState } from '../../recoil/atoms/atoms';

const Coupons = () => {
  const coupons = useRecoilValue(couponsState);

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
