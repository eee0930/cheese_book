import { atom } from 'recoil';

/**
 * 라이트 모드 여부
 */
export const themeState = atom({
  key: 'isLightTheme',
  default: true,
});

/**
 * 로그인 여부
 */
export const loginState = atom({
  key: 'cheeseLoggedIn',
  default: false,
});

/**
 * bestSeller api 호출 여부 (중복 호출을 막기 위해)
 */
export const bestSellerFetchedState = atom({
  key: 'bestSellerFetched',
  default: false,
});
