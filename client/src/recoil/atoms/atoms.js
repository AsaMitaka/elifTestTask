import { recoilPersist } from 'recoil-persist';
import { atom } from 'recoil';

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: sessionStorage,
});

export const cartState = atom({
  key: 'cartState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const couponsState = atom({
  key: 'couponsState',
  default: [],
});

export const productsState = atom({
  key: 'productsState',
  default: [],
});

export const isLoadingState = atom({
  key: 'isLoadingState',
  default: true,
});

export const isErrorState = atom({
  key: 'isErrorState',
  default: false,
});

export const userState = atom({
  key: 'userState',
  default: {
    name: '',
    email: '',
    phone: '',
    address: '',
  },
  effects_UNSTABLE: [persistAtom],
});
