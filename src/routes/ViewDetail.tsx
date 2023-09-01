import { useRef } from 'react';
import { Link, Outlet, useMatch, useNavigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useQuery } from 'react-query';
// apis
import {
  IAladinBookItem,
  IAladinRequestList,
  fetchBookDetailByIsbn,
} from '../apis/aladinApi';
// import { ISearchResult, IVolume, fetchVolumeByIsbn } from '../apis/volumeApi';
// styles
import { Loader } from '../utils/globalStyles';
import {
  BookContentContainer,
  BookContentResultContainer,
  BookContentSection,
  BookFront,
  BookImage,
  BookImageSection,
  BoxContainer,
  TitleSection,
  CategoryContainer,
  PreviewBtn,
  PreviewBtnSection,
} from '../utils/screens/viewDetailStyles';

function ViewDetail() {
  const navigator = useNavigate();
  const useIsbn = useMatch(`/book/:isbn`);
  const isbn = useIsbn?.params.isbn as string;
  //const [isEmbeddable, setIsEmbeddable] = useState(false);

  const box = useRef<HTMLDivElement>(null);

  const { data: book, isLoading } = useQuery<
    IAladinRequestList,
    any,
    IAladinBookItem
  >('bookDetail', () => fetchBookDetailByIsbn(isbn), {
    retry: 0,
    select: (bookDetail) => bookDetail.item[0],
  });

  // const previewInfo = useQuery<ISearchResult, any, IVolume[]>(
  //   'bookInfo',
  //   () => fetchVolumeByIsbn(isbn),
  //   { retry: 0, select: (bookInfo) => bookInfo.items }
  // );

  // useEffect(() => {
  //   getPreviewInfo();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const getPreviewInfo = async () => {
  //   const { isLoading, data } = previewInfo;
  //   if (!isLoading) {
  //     if (data) {
  //       if (data[0]?.accessInfo?.embeddable) {
  //         setIsEmbeddable(true);
  //       }
  //     } else {
  //       setIsEmbeddable(false);
  //     }
  //   }
  // };
  // const handlePreview = (id: string | undefined) => {
  //   if (id) {
  //     if (box.current) {
  //       box.current.style.display = 'block';
  //     }
  //     navigator(`/book/${isbn}/viewer`);
  //   } else {
  //     console.log('isbn is not found.');
  //     return;
  //   }
  // };

  const handlePreview = () => {
    if (box.current) {
      box.current.style.display = 'block';
    }

    navigator(`/book/${isbn}/viewer`);
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
              <title>{book?.title + ' | '}Cheese Book</title>
            </Helmet>
          </HelmetProvider>
          <BookContentResultContainer>
            <CategoryContainer>
              <Link to="/">
                <i className="fa fa-home" />
              </Link>
              {book?.categoryName?.split('>').map((cate, i) => {
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
                <h1>{book?.title}</h1>
                <h3>{book?.author}</h3>
              </TitleSection>
              <BookContentSection className="row">
                <BookImageSection className="col-12 col-lg-4">
                  <BookFront>
                    <BookImage src={book?.cover} alt={book?.title} />
                  </BookFront>
                  <PreviewBtnSection>
                    <PreviewBtn onClick={handlePreview}>미리보기</PreviewBtn>
                  </PreviewBtnSection>

                  {/* <BookRight /> */}
                  {/* {isEmbeddable && (
                    <PreviewBtnSection>
                      <PreviewBtn onClick={() => handlePreview(book?.isbn)}>
                        미리보기
                      </PreviewBtn>
                    </PreviewBtnSection>
                  )} */}
                </BookImageSection>
              </BookContentSection>
            </BookContentContainer>
          </BookContentResultContainer>
          <BoxContainer ref={box}>
            <Outlet context={{ id: book?.itemId, title: book?.title, isbn }} />
          </BoxContainer>
        </>
      )}
    </>
  );
}

export default ViewDetail;
