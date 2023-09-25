import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import {
  IAladinBookItem,
  IAladinRequestList,
  fetchBestSellerBookList,
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
    ['tickerBestSellers', cateNum],
    () => fetchBestSellerBookList(isKorea, cateNum, maxSize),
    { retry: 0 }
  );
  const imgWidth = 10;
  let bookDatas;
  if (!isLoading) {
    bookDatas = data?.item as IAladinBookItem[];
  }

  return (
    <TickerContainer>
      <TickerJumboTitle>Best Sellers</TickerJumboTitle>
      <TickerSubTitle>
        <span>급상승! 많이 보고 있는 책</span>
        <TickerLinkSection>
          <Link to="/best">
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
