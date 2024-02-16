import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { AnimatePresence, motion } from 'framer-motion';
import Color from 'color-thief-react';
import { bannerMent } from '../../data/cheeseMainData';
import {
  IAladinRequestList,
  fetchBestSellerBookList,
} from '../../apis/aladinApi';
import { latestBookListState } from '../../atom';
import {
  BannerBackground,
  BannerBook,
  BannerBtn,
  BannerContainer,
  BannerPages,
  BannerPagination,
  BannerTitle,
  BookCover,
  BookCoverContainer,
  BookCoverPerspect,
  jumpBookVariants,
  jumpTitle,
  jumpTitleVariants,
  PageDots,
} from '../../styles/components/bannerStyles';

const BANNER_LEN = bannerMent.length;

function Banner() {
  const navigate = useNavigate();
  const [latestBooks, setLatestBooks] = useRecoilState(latestBookListState);
  const { data, isLoading } = useQuery<IAladinRequestList>(
    'bestSellersBanner',
    () => fetchBestSellerBookList(true, 0, BANNER_LEN + 2)
  );

  const [index, setIndex] = useState(0);
  const [bookStyleIdx, setBookStyleIdx] = useState(1);
  const [bannerTimer, setBannerTimer] =
    useState<ReturnType<typeof setTimeout>>();

  const handlePrevIdx = () =>
    setIndex((prev) => (prev === 0 ? BANNER_LEN - 1 : prev - 1));
  const handleNextIdx = () =>
    setIndex((prev) => (prev === BANNER_LEN - 1 ? 0 : prev + 1));
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
  const handleClickBanner = (itemId: number, title: string, cover: string) => {
    saveLastestBook(itemId, title, cover);
    navigate(`/book/${itemId}`);
  };

  useEffect(() => {
    clearTimeout(bannerTimer);
    setBookStyleIdx(Math.floor(index / 3) + 1);
    const bannerTimeout = setTimeout(handleNextIdx, 3500);
    setBannerTimer(bannerTimeout);
  }, [index]);

  return (
    <BannerContainer>
      {!isLoading && (
        <>
          <Color
            src={`${data?.item[index]?.cover}`}
            format={'hex'}
            crossOrigin={'anonymous'}
          >
            {({ data }) => (
              <>
                <BannerBackground style={{ backgroundColor: data }} />
              </>
            )}
          </Color>

          <BannerPagination>
            <BannerBtn onClick={handlePrevIdx}>
              <i className="fa-solid fa-angle-left" />
            </BannerBtn>
            <BannerPages>
              {bannerMent.map((_, i) => {
                if (i === index) {
                  return <PageDots key={i} className="active" />;
                } else {
                  return <PageDots key={i} onClick={() => setIndex(i)} />;
                }
              })}
            </BannerPages>
            <BannerBtn onClick={handleNextIdx}>
              <i className="fa-solid fa-angle-right" />
            </BannerBtn>
          </BannerPagination>
          <AnimatePresence>
            <BookCoverContainer
              variants={jumpBookVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              key={'book' + index}
              onClick={() =>
                handleClickBanner(
                  data?.item[index]?.itemId as number,
                  data?.item[index]?.title as string,
                  data?.item[index]?.cover as string
                )
              }
            >
              <BookCoverPerspect className={`style${bookStyleIdx}`}>
                <BookCover
                  className={`style${bookStyleIdx}`}
                  style={{
                    backgroundImage: `url(${data?.item[index]?.cover})`,
                  }}
                />
              </BookCoverPerspect>
              <BannerBook
                alt="cheese book"
                src={`${process.env.PUBLIC_URL}/img/banner_book${bookStyleIdx}.png`}
              />
            </BookCoverContainer>
            <BannerTitle
              variants={jumpTitleVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              key={'title' + index}
              onClick={() =>
                handleClickBanner(
                  data?.item[index]?.itemId as number,
                  data?.item[index]?.title as string,
                  data?.item[index]?.cover as string
                )
              }
            >
              {bannerMent[index].map((ment, i) => (
                <motion.div variants={jumpTitle} key={i}>
                  {ment}
                </motion.div>
              ))}
            </BannerTitle>
          </AnimatePresence>
        </>
      )}
    </BannerContainer>
  );
}

export default Banner;
