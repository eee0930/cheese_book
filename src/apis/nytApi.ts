const ROOT = process.env.REACT_APP_NYT_ROOT;
const KEY = process.env.REACT_APP_NYT_KEY;

const request = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('❌ Failed to Fetch 😇', error);
  }
};

export interface IBookDetails {
  title: string;
  description: string;
  author: string;
  publisher: string;
  primary_isbn10: string;
}

export interface IBestSeller {
  published_date: string;
  rank: number;
  rank_last_week: number;
  isbns: [
    {
      isbn10: string;
      isbn13: string;
    }
  ];
  book_details: IBookDetails[];
}

export interface IBestSellerList {
  num_results: number;
  results: IBestSeller[];
}
/**
 * 베스트셀러 목록 가져오기
 * @returns
 */
export const fetchBestSellerList = async () =>
  request(`${ROOT}lists.json?list-name=hardcover-fiction&api-key=${KEY}`);
