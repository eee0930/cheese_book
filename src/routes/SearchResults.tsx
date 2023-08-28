import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IAladinBookItem, fetchBookListByQuery } from '../apis/aladinApi';
// components
import Book from '../components/mixins/Book';
//styles
import { Loader } from '../utils/globalStyles';
import { ContentTitle } from '../utils/commonStyles';

function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');
  const [isLoading, setIsLoading] = useState(true);
  const [bookList, setBookList] = useState<IAladinBookItem[]>();
  const [sortResult, setSortResult] = useState('');

  useEffect(() => {
    setIsLoading(true);
    if (query) {
      getBookListByQuery(query);
    }
  }, [query]);

  const getBookListByQuery = async (q: string) => {
    const data = await fetchBookListByQuery(q, true, 30);
    setBookList(data?.item);
    setIsLoading(false);
  };

  const handleSort = (e: any) => {
    const sort = e.target.value;
    setSortResult(sort);
  };

  const sortBooks = (data: IAladinBookItem[]) => {
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
    setBookList(sortedBooks);
  };

  return (
    <>
      {isLoading ? (
        <Loader>
          <div>
            <div></div>
            <div></div>
          </div>
        </Loader>
      ) : (
        <>
          <ContentTitle className="title">
            Search Result <span>{query}</span>
            <i className="fa fa-caret-down" />
          </ContentTitle>
          <div className="row">
            {bookList && bookList.map((book) => <Book book={book} />)}
          </div>
        </>
      )}
    </>
  );
}

export default SearchResults;
