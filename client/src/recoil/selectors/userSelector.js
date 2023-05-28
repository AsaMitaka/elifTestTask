import { userState } from '../atoms/atoms';
import { selector } from 'recoil';

export const userInfoSelector = selector({
  key: 'userInfoSelector',
  get: ({ get }) => {
    const userInfo = get(userState);
    return userInfo;
  },
  set: ({ set }, updatedInfo) => {
    set(userState, (prevInfo) => ({
      ...prevInfo,
      ...updatedInfo,
    }));
  },
});
