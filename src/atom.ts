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
