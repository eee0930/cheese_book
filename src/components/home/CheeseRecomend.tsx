import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Color from 'color-thief-react';
import { useRecoilState } from 'recoil';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { latestBookListState } from '../../atom';
import {
  IAladinBookItem,
  IAladinRequestList,
  fetchBlogBestBookList,
} from '../../apis/aladinApi';
// styles
import {
  ItemTitle,
  MiddleItem,
  SideItem,
  TickerContainer,
  TickerItem,
  TickerJumboTitle,
  TickerOneCollection,
  TickerOneItemCover,
  TickerSubTitle,
  TickerWrap,
  biggerItem,
  hideItem,
  middleItem,
  tickerOneVariants,
} from '../../styles/components/tickerStyles';
interface IRecomend {
  isKorea?: boolean;
  cateNum?: number;
  maxSize?: number;
}

function CheeseRecommend({
  isKorea = true,
  cateNum = 0,
  maxSize = 10,
}: IRecomend) {
  const { data, isLoading } = useQuery<IAladinRequestList>(
    ['cheeseRecommend', cateNum],
    () => fetchBlogBestBookList(isKorea, cateNum, maxSize),
    { retry: 0 }
  );
  const [latestBooks, setLatestBooks] = useRecoilState(latestBookListState);
  let bookDatas: IAladinBookItem[] | undefined;
  if (!isLoading) {
    bookDatas = data?.item as IAladinBookItem[];
  }

  const [bookIdx, setBookIdx] = useState([0, 1, 2]);
  const [tickerTimer, setTickerTimer] =
    useState<ReturnType<typeof setTimeout>>();
  useEffect(() => {
    clearTimeout(tickerTimer);
    const bannerTimeout = setTimeout(changeIdx, 3000);
    setTickerTimer(bannerTimeout);
  }, [bookIdx]);
  const changeIdx = () => {
    setBookIdx((prev) => {
      const len = data?.item?.length as number;
      const newIdx = Array.from(prev, (idx) =>
        idx + 1 >= len ? idx - len + 1 : idx + 1
      );
      return newIdx;
    });
  };
  const navigate = useNavigate();

  const handleClickBook = ({ itemId, title, cover }: IAladinBookItem) => {
    saveLastestBook(itemId, title, cover);
    navigate(`/book/${itemId}`);
  };
  const saveLastestBook = (itemId: number, title: string, cover: string) => {
    const len = latestBooks.length;
    const nowBook = { itemId, title, cover };
    const idx = latestBooks.findIndex(
      (latestBook) => latestBook.itemId === itemId
    );
    if (idx > -1) {
      setLatestBooks((prevArr) => {
        return [...prevArr.slice(0, idx), ...prevArr.slice(idx + 1), nowBook];
      });
    } else {
      setLatestBooks((prevArr) => {
        return len >= 10
          ? [...prevArr.slice(1), nowBook]
          : [...prevArr, nowBook];
      });
    }
  };
  return (
    <>
      {bookDatas && (
        <>
          <AnimatePresence>
            <Color
              src={`${bookDatas[bookIdx[1]].cover}`}
              format={'rgbArray'}
              crossOrigin={'anonymous'}
            >
              {({ data }) => (
                <>
                  <TickerContainer
                    style={{ backgroundColor: `rgb(${data?.join(',')}, 0.7)` }}
                  >
                    <div
                      style={{
                        color: `${
                          data?.find((color) => color < 90) ? '#fff' : '#000'
                        }`,
                        transition: 'color 0.3s ease',
                      }}
                    >
                      <TickerJumboTitle>Cheese's Recommend</TickerJumboTitle>
                      <TickerSubTitle>
                        <span>
                          집중집중! <br />
                          치즈북이 추천하는 이주의 도서!
                        </span>
                      </TickerSubTitle>
                    </div>

                    <TickerWrap>
                      <TickerOneCollection
                        key={bookIdx[0]}
                        variants={tickerOneVariants}
                        initial="initial"
                        animate="animate"
                        exit="end"
                        transition={{
                          ease: 'linear',
                          duration: 0.5,
                        }}
                        layoutId="tickerWrap"
                      >
                        <SideItem
                          variants={hideItem}
                          transition={{
                            duration: 0.5,
                            delay: 0.1,
                          }}
                        >
                          <Link
                            to={`/book/${bookDatas?.at(bookIdx[0])?.itemId}`}
                          >
                            <TickerOneItemCover
                              style={{
                                backgroundImage: `url(${
                                  bookDatas?.at(bookIdx[0])?.cover
                                })`,
                              }}
                            >
                              <TickerItem>
                                <ItemTitle>
                                  {
                                    bookDatas
                                      ?.at(bookIdx[0])
                                      ?.title.split('-')[0]
                                  }
                                </ItemTitle>
                              </TickerItem>
                            </TickerOneItemCover>
                          </Link>
                        </SideItem>
                        <MiddleItem
                          variants={middleItem}
                          transition={{
                            duration: 0.5,
                            delay: 0.1,
                          }}
                        >
                          <Link
                            to={`/book/${bookDatas?.at(bookIdx[1])?.itemId}`}
                          >
                            <TickerOneItemCover
                              onClick={() =>
                                handleClickBook(
                                  bookDatas?.at(bookIdx[1]) as IAladinBookItem
                                )
                              }
                              style={{
                                backgroundImage: `url(${
                                  bookDatas?.at(bookIdx[1])?.cover
                                })`,
                              }}
                            >
                              <TickerItem>
                                <ItemTitle>
                                  {
                                    bookDatas
                                      ?.at(bookIdx[1])
                                      ?.title.split('-')[0]
                                  }
                                </ItemTitle>
                              </TickerItem>
                            </TickerOneItemCover>
                          </Link>
                        </MiddleItem>
                        <SideItem
                          variants={biggerItem}
                          transition={{
                            duration: 0.5,
                            delay: 0.1,
                          }}
                        >
                          <Link
                            to={`/book/${bookDatas?.at(bookIdx[2])?.itemId}`}
                          >
                            <TickerOneItemCover
                              style={{
                                backgroundImage: `url(${
                                  bookDatas?.at(bookIdx[2])?.cover
                                })`,
                              }}
                            >
                              <TickerItem>
                                <ItemTitle>
                                  {
                                    bookDatas
                                      ?.at(bookIdx[2])
                                      ?.title.split('-')[0]
                                  }
                                </ItemTitle>
                              </TickerItem>
                            </TickerOneItemCover>
                          </Link>
                        </SideItem>
                      </TickerOneCollection>
                    </TickerWrap>
                  </TickerContainer>
                </>
              )}
            </Color>
          </AnimatePresence>
        </>
      )}
    </>
  );
}

export default CheeseRecommend;
