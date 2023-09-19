import { styled } from 'styled-components';

export const ContentContainer = styled.div`
  margin: 1rem 0 2rem;
  @media (min-width: 768px) {
    margin: 1rem -0.2rem 5rem;
  }
  @media (min-width: 1199.5px) {
    margin: 1rem -0.5rem 6rem;
  }
`;
export const PageTitleCover = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    margin: 1.5rem 0;
    justify-content: center;
    align-items: center;
  }
`;
export const PageTitleImg = styled.div`
  width: 60px;
  height: 60px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (min-width: 1199.5px) {
    width: 70px;
    height: 70px;
  }
`;
export const PageTitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-family: ${(props) => props.theme.title}, cursive;
  font-size: 1.6rem;
  color: ${(props) => props.theme.main1.main1};
  @media (min-width: 768px) {
    font-size: 2.2rem;
    letter-spacing: -0.2px;
  }
`;
export const ContentTitleSection = styled.div`
  margin: 1.5rem 0;
  @media (min-width: 768px) {
    margin: 2rem 0;
  }
  @media (min-width: 1199.5px) {
    margin: 2rem 0 2.5rem;
  }
`;
export const ContentTitle = styled.h1`
  align-self: center;
  padding: 0 5px;
  font-size: 1.5rem;
  font-family: ${(props) => props.theme.title}, cursive;
  letter-spacing: -0.04em;
  word-spacing: 0.03em;
  line-height: 0.83;
  font-weight: 400;
  color: ${(props) => props.theme.black.darker};
  span {
    font-size: 1.1em;
    color: ${(props) => props.theme.main1.main1};
  }
  i {
    width: 1.5em;
    position: relative;
    left: 5px;
  }
  &.active {
    color: ${(props) => props.theme.main1.main2};
  }
  @media (min-width: 768px) {
    font-size: 2rem;
    padding: 0 0.3rem;
  }
  @media (min-width: 1199.5px) {
    padding: 0 0.5rem;
  }
`;
export const TitleBtnSection = styled.div`
  align-self: center;
  text-align: right;
  padding: 0 5px;
  @media (min-width: 768px) {
    padding: 0 0.3rem;
  }
  @media (min-width: 1199.5px) {
    padding: 0 0.5rem;
  }
`;
