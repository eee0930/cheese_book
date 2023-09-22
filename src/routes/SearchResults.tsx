import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { prevPageState } from '../atom';
// apis
import {
  IAladinBookItem,
  IAladinRequestList,
  fetchBookListByQuery,
} from '../apis/aladinApi';
// components
import { Book, BookLoader } from '../components/mixins/Book';
import CheeseHead from '../components/CheeseHead';
import EmptyData from '../components/EmptyData';
//styles
import { ContentTitle, ContentTitleSection } from '../styles/commonStyles';

const CATE_NAME = 'Search Results';
function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q') as string;
  const setPrevPage = useSetRecoilState(prevPageState);
  const [isKorea, setIsKorea] = useState(true);
  const [sortResult, setSortResult] = useState('');
  const [isSorted, setIsSorted] = useState(false);
  const [bookList, setBookList] = useState<IAladinBookItem[]>();

  const { data: books, isLoading } = useQuery<IAladinRequestList>(
    ['search', `${query} ${isKorea}`],
    () => fetchBookListByQuery(query, isKorea, 24),
    { retry: 0 }
  );

  useEffect(() => {
    setIsSorted(false);
    if (!isLoading) {
      setBookList(books?.item);
    }
    setPrevPage(`${location.pathname}${location.search}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

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
      <CheeseHead title={`${query} ${CATE_NAME}`} />
      <ContentTitleSection>
        <ContentTitle>
          <span>{CATE_NAME}</span> {query}
          <i className="fa fa-caret-down" />
        </ContentTitle>
      </ContentTitleSection>
      {isLoading ? (
        <div className="row">
          {new Array(12).fill(0).map((_, i) => (
            <BookLoader key={i} />
          ))}
        </div>
      ) : (
        <>
          {isSorted ? (
            <div className="row">
              {bookList?.map((book, i) => (
                <Book book={book} key={i} />
              ))}
            </div>
          ) : (
            <>
              {books ? (
                <div className="row">
                  {books.item?.map((book, i) => (
                    <Book book={book} key={i} />
                  ))}
                </div>
              ) : (
                <EmptyData>
                  Sorry... <br /> No search results
                </EmptyData>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}

export default SearchResults;
