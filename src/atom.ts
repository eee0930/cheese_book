import { atom } from 'recoil';

export interface ILatestBook {
  itemId: number;
  title: string;
  cover: string;
}

/**
 * 최근 본 책 목록 (10개)
 */
export const latestBookListState = atom<ILatestBook[]>({
  key: 'latestBookList',
  default: [],
});

export const likedBookListState = atom<ILatestBook[]>({
  key: 'likedBookList',
  default: [],
});

export const prevPageState = atom({
  key: 'prevPage',
  default: '/',
});

export const latestSearchListState = atom({
  key: 'latestSearchList',
  default: [],
});
