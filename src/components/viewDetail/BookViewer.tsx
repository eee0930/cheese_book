import { useEffect, useState } from 'react';
import { ICoverImages, fetchViewerImagesById } from '../../apis/fetching';
import { Loader } from '../../styles/globalStyles';
import {
  BookImagesGroup,
  LeftSideImage,
  RightSideImage,
  MiddleSideImage,
} from '../../styles/components/viewerStyles';

interface IIsbn {
  itemId: number;
  title: string;
  cover: string;
}

function BookViewer({ itemId, title, cover }: IIsbn) {
  const [isLoading, setIsLoading] = useState(true);
  const [isOnePage, setIsOnePage] = useState(true);
  const [imageList, setImageList] = useState<string[]>();
  const [failed, setfailed] = useState(false);
  const [setIdx, setSetIdx] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    getImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemId]);

  const getImages = async () => {
    const fetchedImgs = await fetchViewerImagesById(itemId);
    if (!fetchedImgs || fetchedImgs.length === 0) {
      setfailed(true);
      console.log('Book Viewer를 불러오는데 실패하였습니다.');
      return;
    }
    setIsOnePage(typeof fetchedImgs[0] === 'string');
    setImageList(fetchedImgs as ICoverImages<undefined | string[]>);
    setIsLoading(false);
  };

  if (failed) {
    return (
      <div>
        <LeftSideImage src={cover} />
      </div>
    );
  }
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
          {isOnePage ? (
            <LeftSideImage src={imageList?.at(0)} alt={title} />
          ) : (
            <BookImagesGroup>
              <LeftSideImage src={imageList?.at(setIdx)?.at(1)} alt={title} />
              {imageList?.at(setIdx)?.at(2) && (
                <MiddleSideImage
                  src={imageList?.at(setIdx)?.at(2)}
                  alt={title}
                />
              )}
              <RightSideImage src={imageList?.at(setIdx)?.at(0)} alt={title} />
            </BookImagesGroup>
          )}
        </>
      )}
    </>
  );
}

export default BookViewer;
