import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MobileMenu } from './SideMenu';
import {
  LogoSection,
  LogoText,
  MenuBtnSection,
  MenuButton,
  MenuButtonValue,
  MobileHeaderContainer,
  MobileHeaderCover,
  SearchButton,
} from '../styles/components/mobileHeaderStyles';
import { MobileSearchForm } from './SearchForm';
import { mainColors } from '../data/cheeseMainData';

function MobileHeader() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [randomIdx, setRandomIdx] = useState(0);
  const [headerActive, setHeaderActive] = useState(false);
  const settingRandomIdx = () => {
    const len = mainColors.length;
    const num = Math.floor(Math.random() * len);
    setRandomIdx(num);
  };
  const openMenu = () => {
    settingRandomIdx();
    setHeaderActive(true);
    setIsOpenSearch(false);
    setIsOpenMenu(true);
  };
  const closeMenu = () => {
    setHeaderActive(false);
    setIsOpenMenu(false);
  };
  const toggleSearchForm = () => {
    setIsOpenMenu(false);
    setIsOpenSearch((prev) => {
      if (prev) {
        setHeaderActive(false);
      } else {
        settingRandomIdx();
        setHeaderActive(true);
      }
      return !prev;
    });
  };

  return (
    <>
      {isOpenMenu && <MobileMenu themeIdx={randomIdx} callback={closeMenu} />}
      {isOpenSearch && (
        <MobileSearchForm themeIdx={randomIdx} callback={toggleSearchForm} />
      )}
      <MobileHeaderContainer>
        <MobileHeaderCover className={`${headerActive && 'active'}`}>
          <MenuBtnSection>
            <MenuButton
              onClick={openMenu}
              className={`${isOpenMenu && 'active'}`}
            >
              <MenuButtonValue>menu</MenuButtonValue>
            </MenuButton>
            <MenuButton
              onClick={closeMenu}
              className={`${isOpenMenu && 'active'}`}
            >
              <MenuButtonValue>close</MenuButtonValue>
            </MenuButton>
          </MenuBtnSection>
          <LogoSection>
            <Link to="/">
              <LogoText>cheese book</LogoText>
            </Link>
          </LogoSection>
          <MenuBtnSection>
            <SearchButton onClick={toggleSearchForm}>
              <MenuButtonValue className="small">search</MenuButtonValue>
            </SearchButton>
          </MenuBtnSection>
        </MobileHeaderCover>
      </MobileHeaderContainer>
    </>
  );
}

export default MobileHeader;
