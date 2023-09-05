import { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchDetailImagesById } from '../apis/fetching';
import { Loader } from '../styles/globalStyles';
import {
  BookContainer,
  FrontCover,
  SideCover,
  UndefinedImg,
} from '../styles/components/coverStyles';

interface IDetailImages {
  itemId: number;
  title: string;
  cover: string;
}
function DetailImages({ itemId, title, cover }: IDetailImages) {
  const [isFront, setIsFront] = useState(true);
  const { data: images, isLoading } = useQuery(
    'bookCovers',
    () => fetchDetailImagesById(itemId),
    { retry: 0 }
  );
  if (!isLoading) {
    console.log(images);
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
          {!images || !images[0] ? (
            <BookContainer>
              <UndefinedImg src={cover} alt={title} />
            </BookContainer>
          ) : (
            <BookContainer>
              {images && (
                <>
                  <SideCover src={images[1]} alt={title} />
                  <FrontCover src={images[0]} alt={title} />
                </>
              )}
            </BookContainer>
          )}
        </>
      )}
    </>
  );
}

export default DetailImages;
