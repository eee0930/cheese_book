import { useEffect, useState } from 'react';
import { getDetailImagesByIsbnId } from '../../apis/fetching';
//styles
import { Loader } from '../../styles/globalStyles';
import {
  BookContainer,
  BookImagesCovers,
  FrontImageCover,
  SideImgCover,
} from '../../styles/components/coverStyles';
import CoverImage from '../mixins/CoverImage';

interface IDetailImages {
  itemId: number;
  isbn: string;
  title: string;
  cover: string;
}
function DetailImages({ itemId, isbn, title, cover }: IDetailImages) {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState<string[]>();
  useEffect(() => {
    const imageList = getDetailImagesByIsbnId(isbn, itemId);
    setImages(imageList);
    setIsLoading(false);
  }, [isbn, itemId]);

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
          {images && (
            <BookContainer>
              <BookImagesCovers>
                <SideImgCover className="side">
                  <CoverImage
                    src={images?.at(1) as string}
                    alt={title}
                    className={'SideCover'}
                  />
                </SideImgCover>
                <FrontImageCover className="front">
                  <CoverImage
                    src={images?.at(0) as string}
                    alt={title}
                    className={'FrontCover'}
                    replace={cover}
                  />
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
