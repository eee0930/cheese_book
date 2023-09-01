import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// apis
import {
  IAladinBookItem,
  IAladinRequestList,
  fetchBookListByQuery,
} from '../apis/aladinApi';
// components
import Book from '../components/mixins/Book';
//styles
import { Loader } from '../utils/globalStyles';
import { ContentTitle } from '../utils/commonStyles';

function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q') as string;
  const [isHome, setIsHome] = useState(true);
  const [sortResult, setSortResult] = useState('');
  const [bookList, setBookList] = useState<IAladinBookItem[]>();

  const { data: books, isLoading } = useQuery<IAladinRequestList>(
    'search',
    () => fetchBookListByQuery(query, isHome, 36),
    { retry: 0 }
  );
  useEffect(() => {
    if (!isLoading) {
      setBookList(books?.item);
    }
  }, []);
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
          <HelmetProvider>
            <Helmet>
              <title>{query} 검색 | Cheese Book</title>
            </Helmet>
          </HelmetProvider>
          <ContentTitle className="title">
            <span>Search Result</span> {query}
            <i className="fa fa-caret-down" />
          </ContentTitle>
          <div className="row">
            {books?.item?.map((book, i) => (
              <Book book={book} key={i} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default SearchResults;