import { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchDetailImagesById } from '../apis/fetching';
import { Loader } from '../styles/globalStyles';
import {
  BookContainer,
  FrontCover,
  SideCover,
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
  );
}

export default DetailImages;
