import fetchJsonp from 'fetch-jsonp';

const KEY = process.env.REACT_APP_ALADIN_KEY;
const ROOT = process.env.REACT_APP_ALADIN_ROOT;
const VERSION = '20131101';

const request = async (url: string) => {
  const options = `&TTBKey=${KEY}&Output=js&Version=${VERSION}`;
  const result = fetchJsonp(`${url}${options}`, { timeout: 3000 });
  try {
    const response = await result;
    return await response.json();
  } catch (err) {
    return console.log('parsing failed', err);
  }
};

interface ISubInfo {
  itemPage?: number;
  originalTitle?: string;
  previewImgList?: string[];
  cardReviewImgList?: string[];
  ratingInfo?: {
    ratingScore: number;
  };
}

export interface IAladinBookItem {
  title: string;
  author: string;
  pubDate: string;
  description: string;
  isbn: string;
  isbn13: string;
  itemId: number;
  priceStandard: number;
  cover: string;
  categoryId: number;
  categoryName: string;
  publisher: string;
  adult?: boolean;
  customerReviewRank: number;
  bestDuration?: string;
  bestRank?: number;
  subInfo?: ISubInfo;
}

export interface IAladinRequestList {
  pubDate: string;
  totalResults: number;
  startIndex: number;
  itemsPerPage: number;
  item: IAladinBookItem[];
}

/**
 * 신간 목록
 * @param isKorea
 * @param categoryId
 * @param maxResult
 * @returns
 */
export const fetchNewestBookList = async (
  isKorea: boolean,
  categoryId: number,
  maxResult: number
) =>
  await request(
    `${ROOT}ItemList.aspx?QueryType=ItemNewSpecial&Cover=Big&categoryId=${categoryId}&SearchTarget=${
      isKorea ? 'book' : 'Foreign'
    }&MaxResults=${maxResult}`
  );

/**
 * 이주의 베스트 셀러 (국내/ 해외)
 * @param isKorea
 * @param categoryId
 * @param maxResult
 * @returns
 */
export const fetchBestSellerBookList = async (
  isKorea: boolean,
  categoryId: number,
  maxResult: number
) =>
  await request(
    `${ROOT}ItemList.aspx?QueryType=Bestseller&Cover=Big&categoryId=${categoryId}&SearchTarget=${
      isKorea ? 'Book' : 'Foreign'
    }&MaxResults=${maxResult}`
  );

const searchRequest = async (url: string) => {
  const options = `&TTBKey=${KEY}&Output=js&Version=${VERSION}`;
  try {
    const response = fetch(`${url}${options}`);
    return (await response).json();
  } catch (error) {
    console.log('❌', error);
  }
};

/**
 * 도서 검색 결과 목록
 * @param query
 * @param isKorea
 * @returns
 */
export const fetchBookListByQuery = async (
  query: string,
  isKorea: boolean,
  maxResult: number
) =>
  await searchRequest(
    `${ROOT}ItemSearch.aspx?Query=${query}&Cover=MidBig&SearchTarget=${
      isKorea ? 'book' : 'Foreign'
    }&MaxResults=${maxResult}`
  );

/**
 * 도서상세정보
 * @param isbn13
 * @returns
 */
const DETAIL_OPTIONS = 'cardReviewImgList,ratingInfo,bestSellerRank';
export const fetchBookDetailById = async (itemId: number) =>
  await request(
    `${ROOT}ItemLookUp.aspx?ItemIdType=itemId&ItemId=${itemId}&Cover=Big&OptResult=${DETAIL_OPTIONS}`
  );
