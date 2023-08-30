import { styled } from 'styled-components';

const BannerContainer = styled.div`
  margin-left: -1rem;
  margin-right: -1rem;
  @media (min-width: 768px) {
    padding-top: 5px;
    padding-left: 0.2rem;
    margin-left: 0;
    margin-right: -1rem;
  }
  @media (min-width: 1200px) {
    padding-left: 0.5rem;
    margin-right: -2rem;
  }
`;
const BannerCover = styled.div`
  width: 100%;
  height: 50vh;
  background-color: ${(props) => props.theme.main4.main1};
  @media (min-width: 768px) {
    border-radius: 3rem 0 0 0;
  }
`;

function Banner() {
  return (
    <BannerContainer>
      <BannerCover>hi</BannerCover>
    </BannerContainer>
  );
}

export default Banner;
