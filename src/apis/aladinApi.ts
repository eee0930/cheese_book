const KEY = process.env.REACT_APP_ALADIN_KEY;
const ROOT = process.env.REACT_APP_ALADIN_ROOT;

const VERSION = '20131101';
const COVER_SIZE = 'MidBig';

const request = async (url: string) => {
  const options = `&TTBKey=${KEY}&Cover=${COVER_SIZE}&Output=js&Version=${VERSION}`;
  try {
    const response = await fetch(`${url}${options}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('❌', error);
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
  categoryId?: number;
  categoryName?: string;
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
 * @param isHome
 * @returns
 */
export const fetchNewestBookList = async (isHome: boolean, maxResult: number) =>
  (await request(
    `${ROOT}ItemList.aspx?QueryType=ItemNewSpecial&SearchTarget=${
      isHome ? 'book' : 'Foreign'
    }&MaxResults=${maxResult}`
  )) as IAladinRequestList;

/**
 * 이주의 베스트 셀러 (국내/ 해외)
 * @param isHome
 * @param categoryId
 * @returns
 */
export const fetchBestSellerBookList = async (
  isHome: boolean,
  categoryId: number,
  maxResult: number
) =>
  (await request(
    `${ROOT}ItemList.aspx?QueryType=Bestseller&categoryId=${categoryId}&SearchTarget=${
      isHome ? 'Book' : 'Foreign'
    }&MaxResults=${maxResult}`
  )) as IAladinRequestList;

/**
 * 도서 검색 결과 목록
 * @param query
 * @param isHome
 * @returns
 */
export const fetchBookListByQuery = async (
  query: string,
  isHome: boolean,
  maxResult: number
) =>
  (await request(
    `${ROOT}ItemSearch.aspx?Query=${query}&SearchTarget=${
      isHome ? 'book' : 'Foreign'
    }&MaxResults=${maxResult}`
  )) as IAladinRequestList;

/**
 * 도서상세정보
 * @param isbn13
 * @returns
 */
export const fetchBookDetailByIsbn = async (isbn: string, isbn13: string) => {
  let type = 'ISBN13';
  let itemId = isbn13;
  if (!isbn13) {
    type = 'ISBN';
    itemId = isbn;
  }
  return (await request(
    `${ROOT}ItemLookUp.aspx?ItemIdType=${type}&ItemId=${itemId}&OptResult=cardReviewImgList,ratingInfo,bestSellerRank`
  )) as IAladinRequestList;
};
