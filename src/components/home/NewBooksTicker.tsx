import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import {
  IAladinBookItem,
  IAladinRequestList,
  fetchNewestBookList,
} from '../../apis/aladinApi';
// components
import { Ticker } from '../Ticker';
import {
  ItemTitle,
  TickerContainer,
  TickerItem,
  TickerItemCover,
  TickerJumboTitle,
  TickerLinkSection,
  TickerSubTitle,
} from '../../styles/components/tickerStyles';

interface IBestSellers {
  isKorea?: boolean;
  cateNum?: number;
  maxSize?: number;
}

function BestSellerTicker({
  isKorea = true,
  cateNum = 0,
  maxSize = 10,
}: IBestSellers) {
  const { data, isLoading } = useQuery<IAladinRequestList>(
    ['tickerNewBooks', cateNum],
    () => fetchNewestBookList(isKorea, cateNum, maxSize),
    { retry: 0 }
  );
  const imgWidth = 10;
  let bookDatas;
  if (!isLoading) {
    bookDatas = data?.item as IAladinBookItem[];
  }

  return (
    <TickerContainer>
      <TickerJumboTitle>New Books</TickerJumboTitle>
      <TickerSubTitle>
        <span>어서와! 따끈 따끈 신상 책</span>
        <TickerLinkSection>
          <Link to="/new">
            더 보기 <i className="fa-solid fa-plus" />
          </Link>
        </TickerLinkSection>
      </TickerSubTitle>
      {bookDatas && (
        <Ticker width={imgWidth}>
          {bookDatas?.map((book, i) => (
            <TickerItemCover
              key={book.isbn}
              style={{
                width: `${imgWidth}rem`,
                backgroundImage: `url(${book.cover})`,
              }}
            >
              <Link to={`/book/${book.itemId}`}>
                <TickerItem>
                  <ItemTitle>{book.title.split('-')[0]}</ItemTitle>
                </TickerItem>
              </Link>
            </TickerItemCover>
          ))}
        </Ticker>
      )}
    </TickerContainer>
  );
}

export default BestSellerTicker;
