const KEY = process.env.REACT_APP_ALADIN_KEY;
const ROOT = process.env.REACT_APP_ALADIN_ROOT;

const VERSION = '20131101';
const MAX_RESULTS = 20;
const START = 1;

export interface IBookItem {
  title: string;
  author: string;
  pubDate: string;
  isbn: string;
  itemId: string;
  priceStandard: number;
  cover: string;
  categoryName: string;
  publisher: string;
  adult: boolean;
  customerReviewRank: number;
}

export interface IRequestList {
  pubDate: string;
  totalResults: number;
  startIndex: number;
  itemsPerPage: number;
  item: IBookItem[];
}

const request = async (url: string) => {
  const options = `&TTBKey=${KEY}&Cover=MidBig&Output=js&MaxResults=${MAX_RESULTS}&start=${START}&Version=${VERSION}`;
  try {
    const response = await fetch(`${url}${options}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('❌', error);
  }
};

/**
 * 신간 목록
 * @param isHome
 * @returns
 */
export const fetchNewestBookList = async (isHome: boolean) =>
  (await request(
    `${ROOT}ItemList.aspx?QueryType=ItemNewSpecial&SearchTarget=${
      isHome ? 'book' : 'Foreign'
    }`
  )) as IRequestList;

/**
 * 이주의 베스트 셀러
 * @returns
 */
export const fetchTotalBestSellerList = async () =>
  (await request(
    `${ROOT}ItemList.aspx?QueryType=Bestseller&SearchTarget=All`
  )) as IRequestList;
/**
 * 베스트셀러 목록 (국내/ 해외)
 * @param isHome
 * @returns
 */
export const fetchBestSellerBookList = async (
  isHome: boolean,
  categoryId: number
) =>
  (await request(
    `${ROOT}ItemList.aspx?QueryType=Bestseller&categoryId=${categoryId}&SearchTarget=${
      isHome ? 'book' : 'Foreign'
    }`
  )) as IRequestList;

/**
 * 도서 검색 결과 목록
 * @param query
 * @param isHome
 * @returns
 */
export const fetchBookListByQuery = async (query: string, isHome: boolean) =>
  (await request(
    `${ROOT}ItemSearch.aspx?Query=${query}&SearchTarget=${
      isHome ? 'book' : 'Foreign'
    }`
  )) as IRequestList;
