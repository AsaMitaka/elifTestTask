import { selector, useSetRecoilState } from 'recoil';
import { cartState } from '../atoms/atoms';

const addToCartSelector = selector({
  key: 'addToCartSelector',
  get: ({ get }) => undefined,
  set: ({ set }, product) => {
    set(cartState, (prevCart) => {
      const existingProductIndex = prevCart.findIndex((item) => item._id === product._id);

      if (existingProductIndex !== -1) {
        const updatedCart = prevCart.map((item, index) => {
          if (index === existingProductIndex) {
            return { ...item, count: item.count + 1 };
          }
          return item;
        });
        return updatedCart;
      } else {
        return [...prevCart, { ...product, count: 1 }];
      }
    });
  },
});

const removeOneItemFromCartSelector = selector({
  key: 'removeOneItemFromCartSelector',
  get: ({ get }) => undefined,
  set: ({ set }, product) => {
    set(cartState, (prevCart) => {
      const existingProductIndex = prevCart.findIndex((item) => item._id === product._id);

      if (existingProductIndex !== -1) {
        const updatedCart = prevCart.map((item, index) => {
          if (index === existingProductIndex) {
            const newCount = item.count - 1;
            if (newCount <= 0) {
              return null; // Return null to filter out the item from the cart
            } else {
              return { ...item, count: newCount };
            }
          }
          return item;
        });

        return updatedCart.filter((item) => item !== null); // Filter out null items
      } else {
        return [...prevCart];
      }
    });
  },
});

const clearCartSelector = selector({
  key: 'clearCartSelector',
  get: ({ get }) => undefined,
  set: ({ set }) => {
    set(cartState, []);
  },
});

const removeProductSelector = selector({
  key: 'removeProductSelector',
  get: ({ get }) => undefined,
  set: ({ set, get }, product) => {
    set(cartState, (prevCart) => {
      const updatedCart = prevCart.filter((item) => item._id !== product._id);
      return updatedCart;
    });
  },
});

export function useAddToCart() {
  const setCart = useSetRecoilState(addToCartSelector);

  return setCart;
}

export function useRemoveFromCart() {
  const removeCart = useSetRecoilState(removeOneItemFromCartSelector);

  return removeCart;
}

export function useClearCart() {
  const clearCart = useSetRecoilState(clearCartSelector);
  return clearCart;
}

export function useRemoveProduct() {
  const removeProduct = useSetRecoilState(removeProductSelector);
  return removeProduct;
}
