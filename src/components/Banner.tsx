import { useQuery } from 'react-query';
import { styled } from 'styled-components';
import { fetchBanners } from '../apis/fetching';

const BannerContainer = styled.div`
  margin-left: -1rem;
  margin-right: -1rem;
  padding-top: 5px;
  padding-left: 1rem;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    padding-left: 0;
    padding-top: 2rem;
    padding-left: 0.2rem;
    margin-left: 0;
    margin-right: -1rem;
    margin-bottom: 8rem;
  }
  @media (min-width: 1199.5px) {
    padding-left: 0.5rem;
    margin-right: -2rem;
  }
`;
const BannerCover = styled.div`
  width: 100%;
  height: 30vh;
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: left center;
  @media (min-width: 768px) {
    height: 50vh;
  }
`;

function Banner() {
  const { data: bannerArr, isLoading } = useQuery('banners', fetchBanners, {
    retry: 0,
  });
  return (
    <BannerContainer>
      {!isLoading && bannerArr && (
        <BannerCover
          style={{ backgroundImage: `url(${bannerArr[0]?.image})` }}
        />
      )}
    </BannerContainer>
  );
}

export default Banner;
