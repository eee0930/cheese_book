const ROOT = process.env.REACT_APP_API_ROOT;
const KEY = process.env.REACT_APP_API_KEY;

const request = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('❌ Failed to Fetch 😇', error);
    return;
  }
};

interface IAccessInfo {
  pdf: {
    isAvailable: boolean;
  };
  webReaderLink: string;
}
export interface IVolumeInfo {
  title: string;
  subtitle?: string;
  authors: string[];
  publisher?: string;
  publishedDate: string;
  description?: string;
  pageCount: number;
  printType: string;
  categories?: string[];
  averageRating?: number;
  imageLinks?: {
    smallThumbnail: string;
    thumbnail: string;
  };
  language: string;
  previewLink: string;
}
export interface IVolume {
  kind: string;
  id: string;
  etag: string;
  volumeInfo: IVolumeInfo;
  accessInfo: IAccessInfo;
}
export interface ISearchResult {
  kind: string;
  totalItems: number;
  items: IVolume[];
}
/**
 * 도서 검색 결과 가져오기
 * @param query
 * @param isPartial // 미리보기 가능 도서만 가져오기
 * @returns
 */
export const fetchVolumeListByQuery = async (
  query: string,
  isPartial: boolean
) =>
  await request(
    `${ROOT}volumes?q=${query}${isPartial && '&filter=partial'}&key=${KEY}`
  );

/**
 * 도서 상세보기
 * @param id
 * @returns
 */
export const fetchVolumeById = async (id: string) =>
  await request(`${ROOT}volumes/${id}?key=${KEY}`);

/**
 * 도서 표지 이미지 가져오기
 * @param isbn
 * @returns
 */
export const fetchVolumeByIstn = async (isbn: string) =>
  await request(`${ROOT}volumes?q=isbn:${isbn}&key=${KEY}`);
