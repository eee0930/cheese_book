const ROOT = process.env.REACT_APP_API_ROOT;
const KEY = process.env.REACT_APP_API_KEY;

const request = async (url: string) => {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw new Error('❌ Failed to Fetch 😇');
};

interface IAccessInfo {
  pdf: {
    isAvailable: boolean;
  };
  webReaderLink: string;
}
interface IVolumeInfo {
  title: string;
  subtitle: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  pageCount: number;
  printType: string;
  categories: string[];
  averageRating: number;
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
  };
  language: string;
  previewLink: string;
}
interface IVolume {
  kind: string;
  id: string;
  etag: string;
  volumeInfo: IVolumeInfo;
  accessInfo: IAccessInfo;
}
export interface ISearchResult {
  totalItems: number;
  items: IVolume[];
}
/**
 * 도서 검색 결과 가져오기 (GET)
 * @param query
 * @param isPartial // 미리보기 가능 도서만 가져오기
 * @returns
 */
export const fetchVolumeListByQuery = (query: string, isPartial: boolean) =>
  request(
    `${ROOT}volumes?q=${query}${isPartial && '&filter=partial'}&key=${KEY}`
  );
