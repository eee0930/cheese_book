import { useQuery } from 'react-query';
import { fetchDetailImagesById } from '../../apis/fetching';
import { Loader } from '../../styles/globalStyles';
import {
  BookContainer,
  BookImagesCovers,
  FrontCover,
  SideCover,
  SideImgCover,
  UndefinedImg,
} from '../../styles/components/coverStyles';
import { useLayoutEffect, useRef, useState } from 'react';
import SideCoverImage from './SideCoverImage';

interface IDetailImages {
  itemId: number;
  title: string;
  cover: string;
}
function DetailImages({ itemId, title, cover }: IDetailImages) {
  const { data: images, isLoading } = useQuery(
    ['bookCovers', itemId],
    () => fetchDetailImagesById(itemId),
    { retry: 0 }
  );

  // const sideCover = useRef<HTMLImageElement>(null);
  // const [sideCoverSize, setSideCoverSize] = useState(0);

  // useLayoutEffect(() => {
  //   const handleResize = () => {
  //     setSideCoverSize(sideCover.current?.offsetWidth || 0);
  //   };
  //   handleResize();
  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, [sideCover.current]);
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
          {!images || !images[0] || !images[1] ? (
            <BookContainer>
              <UndefinedImg src={cover} alt={title} />
            </BookContainer>
          ) : (
            <BookContainer>
              <BookImagesCovers>
                {/* <SideImgCover style={{ left: `${sideCoverSize / -2}px` }}>
                  <SideCover ref={sideCover} src={images[1]} alt={title} />
                </SideImgCover> */}
                <SideCoverImage cover={images[1]} />
                <FrontCover src={images[0]} alt={title} />
              </BookImagesCovers>
            </BookContainer>
          )}
        </>
      )}
    </>
  );
}

export default DetailImages;
