import { useEffect, useState } from 'react';
import { getViewerImagesByIsbnId } from '../../apis/fetching';
import { Loader } from '../../styles/globalStyles';
import {
  BookImagesGroup,
  CoverSideImage,
  nexPageVariants,
} from '../../styles/components/viewerStyles';
import { AnimatePresence } from 'framer-motion';

interface IIsbn {
  itemId: number;
  isbn: string;
  title: string;
  cover: string;
}

function BookViewer({ itemId, isbn, title, cover }: IIsbn) {
  const [isLoading, setIsLoading] = useState(true);
  const [imageList, setImageList] = useState<string[][]>();
  const [index, setIndex] = useState(0);
  const [totalIdx, setTotalIdx] = useState(0);
  const [mobileIdx, setMobileIdx] = useState(0);
  const [isNext, setIsNext] = useState(true);
  const [prevent, setPrevent] = useState(false);

  useEffect(() => {
    const imageListArr = getViewerImagesByIsbnId(isbn, itemId);
    setImageList(imageListArr);
    setTotalIdx(imageListArr.length - 1);
    setIsLoading(false);
  }, [isbn, itemId]);

  const handleErrorCallback = () => {
    if (index !== 0) {
      setTotalIdx(index - 1);
      setIndex((prev) => prev - 1);
    } else {
      setPrevent(true);
    }
  };
  const handleClickViewer = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>,
    isRight: boolean
  ) => {
    if (prevent) {
      event.preventDefault();
      return;
    }
    if (isRight) {
      setIsNext(true);
      if (index === 0) {
        return;
      }
      setIndex((prev) => prev - 1);
    } else {
      setIsNext(false);
      if (index === totalIdx) {
        return;
      }
      setIndex((prev) => prev + 1);
    }
  };
  const onImageError = (
    target: EventTarget & HTMLImageElement,
    isReplace: boolean
  ) => {
    target.onerror = null;
    handleErrorCallback();
    if (isReplace) {
      target.src = cover;
    } else {
      target.style.display = 'none';
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
          {imageList && (
            <BookImagesGroup
              key={`key${index}`}
              variants={nexPageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <CoverSideImage
                src={
                  index === 0
                    ? (imageList?.at(index)?.at(1) as string)
                    : (imageList?.at(index)?.at(0) as string)
                }
                alt={title}
                onError={({ currentTarget }) =>
                  onImageError(currentTarget, false)
                }
                onClick={(event) => handleClickViewer(event, true)}
              />
              <CoverSideImage
                key={`key${index}-1`}
                src={
                  index === 0
                    ? (imageList?.at(index)?.at(0) as string)
                    : (imageList?.at(index)?.at(1) as string)
                }
                alt={title}
                onError={({ currentTarget }) =>
                  onImageError(currentTarget, true)
                }
                onClick={(event) => handleClickViewer(event, false)}
              />
            </BookImagesGroup>
          )}
        </>
      )}
    </>
  );
}

export default BookViewer;
