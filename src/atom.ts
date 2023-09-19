import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'cheeseBookStorage',
  storage: localStorage,
});

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
  effects_UNSTABLE: [persistAtom],
});

export const likedBookListState = atom<ILatestBook[]>({
  key: 'likedBookList',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const prevPageState = atom({
  key: 'prevPage',
  default: '/',
});

export const latestSearchListState = atom({
  key: 'latestSearchList',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const myTasteResultState = atom({
  key: 'myTasteResult',
  default: 'CHEESE',
  effects_UNSTABLE: [persistAtom],
});
