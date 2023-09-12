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
import { Loader } from '../styles/globalStyles';
import { ContentTitle, ContentTitleSection } from '../styles/commonStyles';
import { useSetRecoilState } from 'recoil';
import { prevPageState } from '../atom';

function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q') as string;
  const setPrevPage = useSetRecoilState(prevPageState);
  const [isHome, setIsHome] = useState(true);
  const [sortResult, setSortResult] = useState('');
  const [isSorted, setIsSorted] = useState(false);
  const [bookList, setBookList] = useState<IAladinBookItem[]>();

  const { data: books, isLoading } = useQuery<IAladinRequestList>(
    ['search', `${query} ${isHome}`],
    () => fetchBookListByQuery(query, isHome, 36),
    { retry: 0 }
  );

  useEffect(() => {
    setIsSorted(false);
    if (!isLoading) {
      setBookList(books?.item);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    setPrevPage(location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sort = e.target.value;
    setIsSorted(true);
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
          <ContentTitleSection>
            <ContentTitle>
              <span>Search Result</span> {query}
              <i className="fa fa-caret-down" />
            </ContentTitle>
          </ContentTitleSection>
          {isSorted ? (
            <div className="row">
              {bookList?.map((book, i) => (
                <Book book={book} key={i} />
              ))}
            </div>
          ) : (
            <div className="row">
              {books?.item?.map((book, i) => (
                <Book book={book} key={i} />
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
}

export default SearchResults;
