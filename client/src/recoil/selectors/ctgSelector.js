import { selector } from 'recoil';
import { selectedCtgState, productsState } from '../atoms/atoms';

export const selectedCtgSelector = selector({
  key: 'selectedCtgSelector',
  get: ({ get }) => {
    const selectedCtg = get(selectedCtgState);
    const products = get(productsState);

    if (selectedCtg === null) {
      return products;
    } else {
      return products.filter((product) => product.ctg === selectedCtg);
    }
  },
});
