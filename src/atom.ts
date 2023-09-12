import { atom } from 'recoil';

interface ILatestVolume {
  itemId: number;
  cover: string;
  title: string;
}
interface ILatestVolumeList {
  size: number;
  volumeList: ILatestVolume[];
}

/**
 * 최근 본 책 목록 (10개)
 */
export const latestVolumeListState = atom<ILatestVolumeList>({
  key: 'latestVolumeList',
  default: {
    size: 0,
    volumeList: [],
  },
});

export const likedVolumeListState = atom({
  key: 'likedVolumeList',
  default: [],
});

export const prevPageState = atom({
  key: 'prevPage',
  default: '/',
});
