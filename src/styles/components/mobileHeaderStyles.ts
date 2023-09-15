import { styled } from 'styled-components';

export const MobileHeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;
export const MobileHeaderCover = styled.div`
  margin: 1rem 1rem 0;
  width: calc(100vw - 2rem);
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 3px solid rgb(26, 26, 26);
  background-color: rgb(249, 245, 242);
  padding: 0px 5px;
  position: relative;
  overflow: hidden;
  transition: margin 0.3s ease, width 0.3s ease;
  &.active {
    margin: 1.5rem 1.5rem 0;
    width: calc(100vw - 3rem);
    height: 44px;
  }
`;
export const MenuBtnSection = styled.div`
  overflow: hidden;
  position: relative;
  display: grid;
  height: 4rem;
  place-content: center;
`;
export const HeaderBtn = styled.button`
  cursor: pointer;
  border: 0px;
  padding: 8px 0;
  font: inherit;
  color: inherit;
  background-color: transparent;
  border-radius: 0px;
  text-align: left;
  outline: none;
  transform: scaleX(0.9);
`;
export const MenuButton = styled(HeaderBtn)`
  transform: translateY(16px);
  transition: transform 0.3s ease-in-out;
  &.active {
    transform: translateY(-16px);
  }
`;
export const SearchButton = styled(HeaderBtn)``;
export const MenuButtonValue = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  line-height: 80%;
  text-transform: uppercase;
  &.small {
    font-size: 0.75rem;
  }
`;
export const LogoSection = styled.div`
  height: 44px;
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LogoText = styled.h1`
  text-transform: uppercase;
  font-family: ${(props) => props.theme.title};
  color: ${(props) => props.theme.black.darker};
  font-size: 1.4rem;
  width: 100%;
  text-align: center;
  letter-spacing: -0.9px;
`;
