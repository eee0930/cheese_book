import { atom } from 'recoil';
import { IVolumeInfo } from './apis/volumeApi';

interface IIsbnVolumInfo {
  [key: string]: {
    page: number;
    info: IVolumeInfo;
  };
}

/**
 * 페이지 너비
 */
interface IOffset {
  [key: string]: number;
}
export const offsetState = atom<IOffset>({
  key: 'offset',
  default: {
    pc: 1200,
    tablet: 768,
    mobile: 320,
  },
});

/**
 * 로그인 여부
 */
export const loginState = atom({
  key: 'cheeseLoggedIn',
  default: false,
});

/**
 * 미리보기한 책 리스트 책 정보와 마지막 읽은 페이지 {isbn: {page, info}}
 */
export const volumeInfoListOfPageState = atom<IIsbnVolumInfo[]>({
  key: 'volumeInfoList',
  default: [],
});

/**
 * 최근 본 책 목록 (10개)
 */
export const latestVolumeListState = atom<IVolumeInfo[]>({
  key: 'latestVolumeList',
  default: [],
});

export const likedVolumeListState = atom({
  key: 'likedVolumeList',
  default: [],
});
