import { styled } from 'styled-components';

export const ButtonCover = styled.button`
  margin-left: 0.2rem;
  margin-top: 0.2rem;
  position: relative;
  border: 0.2rem solid ${(props) => props.theme.black.darker};
  background-color: ${(props) => props.theme.black.darker};
  border-radius: 0.6rem;
  transition: transform 0.3s ease 0s, color 1s ease-in-out 0s,
    background-color 1s ease-in-out 0s;
  font-family: ${(props) => props.theme.title};
  font-weight: 400;
  z-index: 1;
  span {
    position: relative;
    top: -0.15rem;
    left: -0.15rem;
    display: block;
  }
  &.sm {
    margin-left: 0.1rem;
    margin-top: 0.1rem;
    border-radius: 0.5rem;
  }
  &.sm span {
    top: -0.075rem;
    left: -0.075rem;
    font-size: 0.75rem;
    padding: 0.2rem 0.2rem;
  }
  &.md span {
    font-size: 1rem;
    padding: 0.4rem 0.8rem;
  }
  &.lg span {
    font-size: 1.3rem;
    padding: 0.5rem 0.9rem;
  }
  &.square span {
    padding: 0.2rem 0.3rem 0.35rem;
  }
  &.btn-primary span {
    color: ${(props) => props.theme.white.lighter};
  }
  &.btn-secondary span,
  &.btn-third span {
    color: ${(props) => props.theme.black.darker};
  }

  &::before {
    content: '';
    top: -0.4rem;
    left: -0.4rem;
    position: absolute;
    z-index: 0;
    border: inherit;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }
  &.sm::before {
    top: -0.3rem;
    left: -0.3rem;
  }
  &.btn-primary::before {
    background-color: ${(props) => props.theme.main1.main1};
  }
  &.btn-secondary::before {
    background-color: ${(props) => props.theme.main3.main2};
  }
  &.btn-third::before {
    background-color: ${(props) => props.theme.white.lighter};
  }
`;

export const ButtonGroupContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    position: sticky;
    top: 1rem;
    display: flex;
    z-index: 15;
    align-items: center;
    justify-content: center;
    padding: 1rem 1.5rem;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(15px);
    margin: 3rem 0;
  }
  @media (min-width: 991.5px) {
    justify-content: start;
  }
`;
export const ButtonGroupEle = styled.a`
  margin-right: 0.8rem;
  font-weight: bold;
  font-size: 15px;
  color: ${(props) => props.theme.black.lighter};
  transition: color 0.3s ease;
  &:hover {
    color: ${(props) => props.theme.main1.main1};
  }
  @media (min-width: 991.5px) {
    margin-right: 1.5rem;
  }
`;

export const HeartButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: transparent;
  color: #bdbdbd;
  border: none;
  outline: none;
  font-size: 2rem;
  &.active {
    color: ${(props) => props.theme.main1.main2};
  }
  &:focus i {
    animation: bigToSmall 0.5s ease;
  }
`;

export const NavTapsContainer = styled.div`
  margin: 2rem 0 3rem;
  padding: 0 0.5rem;
  border-bottom: ${(props) => props.theme.boxLine.sm};
  display: flex;
  align-items: center;
  @media (min-width: 991.5px) {
    border-bottom: ${(props) => props.theme.boxLine.md};
  }
  @media (min-width: 1199.5px) {
    border-bottom: ${(props) => props.theme.boxLine.lg};
  }
`;
export const HomeTapsContainer = styled.div`
  display: none;
  margin: 0 0 3rem;
  padding: 0 0.5rem;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const MainMenuConver = styled.div`
  margin: 0 20px;
  text-align: center;
`;
export const MainMenuImg = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 1rem;
  background-color: #fff;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const MainMenuText = styled.div`
  margin-top: 0.5rem;
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => props.theme.black.darker};
  letter-spacing: -0.01em;
  font-family: ${(props) => props.theme.title};
`;
