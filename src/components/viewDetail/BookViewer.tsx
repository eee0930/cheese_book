import { useEffect, useState } from 'react';
import { ICoverImages, fetchViewerImagesById } from '../../apis/fetching';
import { styled } from 'styled-components';
import { Loader } from '../../styles/globalStyles';

interface IIsbn {
  itemId: number;
  title: string;
  cover: string;
}

export const Img = styled.img`
  height: 300px;
`;

function BookViewer({ itemId, title, cover }: IIsbn) {
  const [isLoading, setIsLoading] = useState(true);
  const [isOnePage, setIsOnePage] = useState(true);
  const [imageList, setImageList] = useState<string[]>();
  const [failed, setfailed] = useState(false);

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
        <Img src={cover} />
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
        imageList?.map((images, i) => {
          if (isOnePage) {
            return <Img src={images} alt={title} key={i} />;
          } else {
            if (images.length > 2) {
              return (
                <div key={i}>
                  <Img src={images[1]} alt={title} />
                  <Img src={images[2]} alt={title} />
                  <Img src={images[0]} alt={title} />
                </div>
              );
            } else {
              return (
                <div key={i}>
                  <Img src={images[0]} alt={title} />
                  <Img src={images[1]} alt={title} />
                </div>
              );
            }
          }
        })
      )}
    </>
  );
}

export default BookViewer;
