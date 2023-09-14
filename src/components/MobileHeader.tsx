import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { MobileMenu } from './SideMenu';
import { mainColors } from '../data/cheeseMainData';

const MobileHeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;
const MobileHeaderCover = styled.div`
  margin: 1rem 1rem 0;
  width: calc(100vw - 2rem);
  max-width: 34.5rem;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 3px solid rgb(26, 26, 26);
  background-color: rgb(249, 245, 242);
  padding: 0px 10px;
  position: relative;
`;
const MenuBtnSection = styled.div`
  overflow: hidden;
  position: relative;
  display: grid;
  height: 4rem;
  place-content: center;
`;
const MenuButton = styled.button`
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
const MenuButtonValue = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  line-height: 80%;
  text-transform: uppercase;
  &.small {
    font-size: 0.75rem;
  }
`;
const LogoSection = styled.div`
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
const LogoText = styled.h1`
  text-transform: uppercase;
  font-family: ${(props) => props.theme.title};
  color: ${(props) => props.theme.black.darker};
  font-size: 1.4rem;
  width: 100%;
  text-align: center;
  letter-spacing: -0.9px;
`;
function MobileHeader() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [randomIdx, setRandomIdx] = useState(0);
  const settingRandomIdx = () => {
    const len = mainColors.length;
    const num = Math.floor(Math.random() * len);
    setRandomIdx(num);
  };
  const openMenu = () => {
    settingRandomIdx();
    setIsOpenSearch(false);
    setIsOpenMenu(true);
  };
  const openSearchForm = () => {
    settingRandomIdx();
    setIsOpenMenu(false);
    setIsOpenSearch(true);
  };
  return (
    <>
      {isOpenMenu && <MobileMenu themeIdx={randomIdx} />}
      {isOpenSearch}
      <MobileHeaderContainer>
        <MobileHeaderCover>
          <MenuBtnSection>
            <MenuButton onClick={openMenu}>
              <MenuButtonValue>menu</MenuButtonValue>
            </MenuButton>
          </MenuBtnSection>
          <LogoSection>
            <Link to="/">
              <LogoText>cheese book</LogoText>
            </Link>
          </LogoSection>
          <MenuBtnSection>
            <MenuButton onClick={openSearchForm}>
              <MenuButtonValue className="small">search</MenuButtonValue>
            </MenuButton>
          </MenuBtnSection>
        </MobileHeaderCover>
      </MobileHeaderContainer>
    </>
  );
}

export default MobileHeader;
