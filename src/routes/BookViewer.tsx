import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { fetchViewerImagesById } from '../apis/fetching';
import { styled } from 'styled-components';

interface IIsbn {
  id: number;
  title: string;
  isbn: string;
}

export const Img = styled.img`
  height: 300px;
`;

function BookViewer() {
  const { id, title, isbn } = useOutletContext<IIsbn>();
  const [isLoading, setIsLoading] = useState(true);
  const [isOnePage, setIsOnePage] = useState(true);
  const [imageList, setImageList] = useState<string[]>();
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getImages = async () => {
    const fetchedImgs = await fetchViewerImagesById(id);
    if (!fetchedImgs || fetchedImgs.length === 0) {
      setClosed(true);
      console.log('Book Viewer를 불러오는데 실패하였습니다.');
      return;
    }
    setIsOnePage(typeof fetchedImgs[0] === 'string');
    setImageList(fetchedImgs);
    setIsLoading(false);
  };

  if (closed) {
    return <div> 잉잉</div>;
  }
  return (
    <>
      {!isLoading &&
        imageList &&
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
        })}
    </>
  );
}

export default BookViewer;
