import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Outlet, useMatch, useNavigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// apis
import {
  IAladinBookItem,
  IAladinRequestList,
  fetchBookDetailByIsbn,
} from '../apis/aladinApi';
import { fetchVolumeByIsbn } from '../apis/volumeApi';
// styles
import { Loader } from '../utils/globalStyles';

import { styled } from 'styled-components';
import { useQuery } from 'react-query';

export const BookContentResultContainer = styled.div`
  margin: 1rem 0;
`;
export const CategoryContainer = styled.div`
  padding: 5px;
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.black.lighter};
  span {
    padding: 0 3px;
  }
  @media (min-width: 768px) {
    padding: 0.7rem;
  }
  @media (min-width: 1199.5px) {
    padding: 1rem;
  }
`;
export const BookContentContainer = styled.div`
  margin-top: 1rem;
  padding: 5px;
  @media (min-width: 768px) {
    padding: 0.7rem;
    margin-top: 2rem;
  }
  @media (min-width: 1199.5px) {
    padding: 1rem;
    margin-top: 2.5rem;
  }
`;
export const TitleSection = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  h1 {
    font-family: ${(props) => props.theme.title};
    font-size: 1.8rem;
    color: ${(props) => props.theme.black.veryDark};
    margin-bottom: 1rem;
  }
  h3 {
    font-size: 1rem;
    color: ${(props) => props.theme.black.lighter};
  }
  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
  @media (min-width: 1199.5px) {
    margin-bottom: 2.5rem;
  }
`;
export const BookContentSection = styled.div`
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
  @media (min-width: 1199.5px) {
    margin-bottom: 2.5rem;
  }
`;
export const BookImageSection = styled.div`
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.5s;
`;
export const BookFront = styled.div`
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  transition: transform 0.5s cubic-bezier(0.45, 0.05, 0.55, 0.95);
  margin-bottom: 1rem;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0px 0px 12px 3px rgba(0, 0, 0, 0.05);
  }
`;
export const BookImage = styled.img`
  width: 100%;
  box-shadow: -5px 5px 15px rgba(0, 0, 0, 0.3);
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  transition: transform 0.5s cubic-bezier(0.45, 0.05, 0.55, 0.95);
`;
export const PreviewBtnSection = styled.div`
  margin-top: 1rem;
`;
export const PreviewBtn = styled.button`
  border: none;
`;

export const BoxContainer = styled.div`
  display: none;
  position: fixed;
  z-index: 100;
  top: 5px;
  left: 5px;
  bottom: 5px;
  right: 5px;
  width: 100%;
  max-width: calc(100vw - 10px);
  height: calc(100vh - 10px);
  background-color: pink;
  border-radius: 10px;
  @media (min-width: 768px) {
    top: 1rem;
    left: 1rem;
    bottom: 1rem;
    right: 1rem;
    max-width: calc(100vw - 2rem);
    height: calc(100vh - 2rem);
  }
  @media (min-width: 1199.5px) {
    top: 1rem;
    left: 50%;
    bottom: 3rem;
    right: unset;
    max-width: 33vw;
    height: calc(100vh - 4rem);
    transform: translateX(-50%);
  }
`;

function ViewDetail() {
  const navigator = useNavigate();
  const useIsbn = useMatch(`/book/:isbn`);
  const isbn = useIsbn?.params.isbn as string;
  const [isCanPreview, setIsCanPrieview] = useState(false);

  const box = useRef<HTMLDivElement>(null);

  const { data: book, isLoading } = useQuery<IAladinRequestList>(
    'bookDetail',
    () => fetchBookDetailByIsbn(isbn),
    { retry: 0 }
  );

  useEffect(() => {
    getPreviewInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPreviewInfo = async () => {
    if (isbn) {
      const fetchedData = await fetchVolumeByIsbn(isbn);
      if (fetchedData?.items) {
        const embeddable = fetchedData?.items[0]?.accessInfo?.embeddable;
        if (embeddable) {
          setIsCanPrieview(true);
        }
      } else {
        setIsCanPrieview(false);
      }
    }
  };
  const handlePreview = (id: string | undefined) => {
    if (id) {
      if (box.current) {
        box.current.style.display = 'block';
      }
      navigator(`/book/${isbn}/viewer`);
    } else {
      console.log('isbn is not found.');
      return;
    }
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
              <title>{book?.item[0]?.title + ' | '}Cheese Book</title>
            </Helmet>
          </HelmetProvider>
          <BookContentResultContainer>
            <CategoryContainer>
              <Link to="/">
                <i className="fa fa-home" />
              </Link>
              {book?.item[0]?.categoryName?.split('>').map((cate, i) => {
                return (
                  <span key={i}>
                    {i !== 0 && '/ '}
                    {cate}
                  </span>
                );
              })}
            </CategoryContainer>
            <BookContentContainer>
              <TitleSection>
                <h1>{book?.item[0]?.title}</h1>
                <h3>{book?.item[0]?.author}</h3>
              </TitleSection>
              <BookContentSection className="row">
                <BookImageSection className="col-12 col-lg-4">
                  <BookFront>
                    <BookImage
                      src={book?.item[0]?.cover}
                      alt={book?.item[0]?.title}
                    />
                  </BookFront>
                  {/* <BookRight /> */}
                  {isCanPreview && (
                    <PreviewBtnSection>
                      <PreviewBtn
                        onClick={() => handlePreview(book?.item[0]?.isbn)}
                      >
                        미리보기
                      </PreviewBtn>
                    </PreviewBtnSection>
                  )}
                </BookImageSection>
              </BookContentSection>
            </BookContentContainer>
          </BookContentResultContainer>
          <BoxContainer ref={box}>
            <Outlet context={{ isbn }} />
          </BoxContainer>
        </>
      )}
    </>
  );
}

export default ViewDetail;
