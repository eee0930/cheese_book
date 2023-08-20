import { useState } from 'react';
import BestSeller from '../components/BestSellerList';
import BookViewer from '../components/BookViewer';
import {
  IBookItem,
  IRequestList,
  fetchBookListByQuery,
} from '../apis/aladinApi';

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchResult, setSearchResult] = useState<IBookItem[]>();
  const [searchField, setSearchField] = useState('');
  const [sortResult, setSortResult] = useState('');

  const handleSearch = (e: any) => setSearchField(e.target.value);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const data = (await fetchBookListByQuery(
      searchField,
      true
    )) as IRequestList;
    setSearchResult(data?.item);
    setIsLoading(false);
  };
  const handleSort = (e: any) => {
    const sort = e.target.value;
    setSortResult(sort);
  };
  const cleanData = (data: IBookItem[]) => {
    const cleanedData = data.map((book) => {
      if (book.hasOwnProperty('pubDate') === false) {
        book['pubDate'] = '0000';
      } else if (book.hasOwnProperty('cover') === false) {
        book['cover'] = process.env.PUBLIC_URL + '/img/default_profile.jpg';
      }
      return book;
    });
    return cleanedData;
  };
  const sortBooks = (data: IBookItem[]) => {
    const sortedBooks = data.sort((a, b) => {
      if (sortResult === 'Newest') {
        return (parseInt(b.pubDate.substring(0, 4)) -
          parseInt(a.pubDate.substring(0, 4))) as number;
      } else if (sortResult === 'Oldest') {
        return (parseInt(a.pubDate.substring(0, 4)) -
          parseInt(b.pubDate.substring(0, 4))) as number;
      } else {
        return 0;
      }
    });
    setSearchResult(sortedBooks);
  };
  return (
    <div>
      <BookViewer isbn={'1982182199'} />
      <form onSubmit={handleSubmit}>
        <div>
          <input type="search" value={searchField} onChange={handleSearch} />
        </div>
        <div>
          <button>search</button>
        </div>
      </form>
      {!isLoading && (
        <div>
          <ul>
            {searchResult?.map((book) => (
              <li key={book.isbn}>{book?.title}</li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <h3>Best Seller</h3>
        <BestSeller />
      </div>
    </div>
  );
}

export default Home;
