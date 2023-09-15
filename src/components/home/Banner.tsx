import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Color from 'color-thief-react';
import { bannerMent } from '../../data/cheeseMainData';
import {
  IAladinRequestList,
  fetchBestSellerBookList,
} from '../../apis/aladinApi';
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
  JumpBookVariants,
  JumpTitle,
  JumpTitleVariants,
} from '../../styles/components/bannerStyles';

const BANNER_LEN = bannerMent.length;

function Banner() {
  const { data, isLoading } = useQuery<IAladinRequestList>(
    'bestSellersBanner',
    () => fetchBestSellerBookList(true, 0, BANNER_LEN)
  );
  const navigate = useNavigate();
  const handleClickBanner = (id: number) => navigate(`/book/${id}`);

  const [index, setIndex] = useState(0);

  const handlePrevIdx = () =>
    setIndex((prev) => (prev === 0 ? BANNER_LEN - 1 : prev - 1));
  const handleNextIdx = () =>
    setIndex((prev) => (prev === BANNER_LEN - 1 ? 0 : prev + 1));
  return (
    <BannerContainer>
      {!isLoading && (
        <>
          <Color
            src={`${data?.item[index].cover}`}
            format={'hex'}
            crossOrigin={'anonymous'}
          >
            {({ data }) => (
              <>
                <BannerBackground style={{ backgroundColor: data }} />
                <BannerPagination>
                  <BannerBtn onClick={handlePrevIdx} style={{ color: data }}>
                    <i className="fa-solid fa-angle-left" />
                  </BannerBtn>
                  <BannerPages>
                    {new Array(BANNER_LEN).fill(0).map((_, i) => {
                      if (i === index) {
                        return <i className="fa-solid fa-circle active" />;
                      } else {
                        return <i className="fa-solid fa-circle" />;
                      }
                    })}
                  </BannerPages>
                  <BannerBtn onClick={handleNextIdx} style={{ color: data }}>
                    <i className="fa-solid fa-angle-right" />
                  </BannerBtn>
                </BannerPagination>
              </>
            )}
          </Color>
          <AnimatePresence>
            <BookCoverContainer
              variants={JumpBookVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              key={'book' + index}
              onClick={() =>
                handleClickBanner(data?.item[index]?.itemId as number)
              }
            >
              <BookCoverPerspect>
                <BookCover
                  style={{
                    backgroundImage: `url(${data?.item[index].cover})`,
                  }}
                />
              </BookCoverPerspect>
              <BannerBook
                alt="cheese book"
                src={`${process.env.PUBLIC_URL}/img/banner_book2.png`}
              />
            </BookCoverContainer>
            <BannerTitle
              variants={JumpTitleVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              key={'title' + index}
              onClick={() =>
                handleClickBanner(data?.item[index]?.itemId as number)
              }
            >
              <motion.div variants={JumpTitle}>
                {bannerMent[index][0]}
              </motion.div>
              <motion.div variants={JumpTitle}>
                {bannerMent[index][1]}
              </motion.div>
            </BannerTitle>
          </AnimatePresence>
        </>
      )}
    </BannerContainer>
  );
}

export default Banner;
