import { styled } from 'styled-components';

export const ContentContainer = styled.div`
  margin: 1rem 0 2rem;
  @media (min-width: 768px) {
    margin: 1rem -0.2rem 2rem;
  }
  @media (min-width: 1199.5px) {
    margin: 1rem -0.5rem 3rem;
  }
`;

export const ContentTitle = styled.h1`
  margin: 1rem 0;
  padding: 0 5px;
  font-size: 1.5rem;
  font-family: ${(props) => props.theme.title}, cursive;
  letter-spacing: -0.04em;
  word-spacing: 0.03em;
  line-height: 0.83;
  font-weight: 400;
  color: ${(props) => props.theme.main1.main1};
  span {
    font-size: 1.1em;
    color: ${(props) => props.theme.black.darker};
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
    padding: 0 0.7rem;
  }
  @media (min-width: 1199.5px) {
    margin: 1.5rem 0;
    padding: 0 1rem;
  }
`;
