import { IBestSeller, IBestSellerList } from '../apis/nytApi';
import { fetchVolumeByIstn } from '../apis/volumeApi';

export interface ISortBestSeller {
  title: string;
  author: string;
  description: string;
  publisher: string;
  rank: number;
  published_date: string;
  img: string;
}

export const getBestSellerList = async (data: IBestSellerList) => {
  const newDataList = [];
  for (let i = 0; i < 10; i++) {
    const book = data?.results[i];
    const isbn = book.isbns[0].isbn10;
    const result = await fetchVolumeByIstn(isbn);
    const img =
      await result?.items[0]?.volumeInfo?.imageLinks?.thumbnail.replace(
        /^http:\/\//i,
        'https://'
      );
    const detail = book.book_details[0];
    const volume = {
      title: detail.title,
      author: detail.author,
      description: detail.description,
      publisher: detail.publisher,
      rank: book.rank,
      published_date: book.published_date,
      img,
    };
    newDataList.push(volume);
  }
  return newDataList;
};

export const getBestSeller = async (book: IBestSeller) => {
  const isbn = book.isbns[0].isbn10;
  const result = await fetchVolumeByIstn(isbn);
  const img = await result?.items[0]?.volumeInfo?.imageLinks?.thumbnail.replace(
    /^http:\/\//i,
    'https://'
  );
  const detail = book.book_details[0];
  return {
    title: detail.title,
    author: detail.author,
    description: detail.description,
    publisher: detail.publisher,
    rank: book.rank,
    published_date: book.published_date,
    img,
  };
};
