import { useQuery } from 'react-query';
import { fetchDetailImagesById } from '../../apis/fetching';
import { Loader } from '../../styles/globalStyles';
import {
  BookContainer,
  BookImagesCovers,
  FrontCover,
  FrontImageCover,
  SideCover,
  SideImgCover,
  UndefinedImg,
} from '../../styles/components/coverStyles';

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
                <SideImgCover className="side">
                  <SideCover src={images[1]} alt={title} />
                </SideImgCover>
                <FrontImageCover className="front">
                  <FrontCover src={images[0]} alt={title} />
                </FrontImageCover>
              </BookImagesCovers>
            </BookContainer>
          )}
        </>
      )}
    </>
  );
}

export default DetailImages;
