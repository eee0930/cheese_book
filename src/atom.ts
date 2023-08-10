import { atom } from 'recoil';

export const loginState = atom({
  key: 'cheeseLoggedIn',
  default: false,
});
