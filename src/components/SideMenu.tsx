import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Link, useLocation, useMatch, useNavigate } from 'react-router-dom';

import { prevPageState } from '../atom';
import { cheesePaths, mainColors } from '../data/cheeseMainData';

// styles
import {
  SideMenuContainer,
  SideMenuCover,
  LogoImg,
  AnimationBoxCover,
  AnimationBox,
  SideMenuIn,
  TitleCover,
  SideMenus,
  SearchSection,
  SearchCover,
  MenuBtnCover,
  MenuBtn,
  TitleSection,
  MobileAnimationBoxCover,
  MobileAnimationBox,
  MobileMenuList,
  MobileMenuContainer,
  MobileMenuCover,
  MenuLi,
  MenuName,
  MenuNameCover,
  menuFade,
  menuIn,
  menuUp,
  ActiveMenuImg,
} from '../styles/components/sideMenuStyles';
import { SearchForm } from './SearchForm';

interface ISideMenu {
  isFolded: boolean;
  handleMenuBtn: () => void;
}

export function SideMenu({ isFolded, handleMenuBtn }: ISideMenu) {
  const searchMatch = useMatch('/search/*');
  const location = useLocation();
  const prevPage = useRecoilValue(prevPageState);
  const [searchField, setSearchField] = useState('');

  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const navigate = useNavigate();
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchField(e.target.value);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?q=${searchField}`);
    setSearchField('');
  };

  return (
    <>
      {isOpenSearch && <SearchForm callback={() => setIsOpenSearch(false)} />}
      <SideMenuContainer className={`${isFolded && 'fold'}`}>
        <SideMenuCover>
          {isFolded ? (
            <LogoImg
              className="jelly fold"
              alt="cheese book"
              src={`${process.env.PUBLIC_URL}/img/cheese0.png`}
            />
          ) : (
            <LogoImg
              className="jelly"
              alt="cheese book"
              src={`${process.env.PUBLIC_URL}/cheese.png`}
            />
          )}
          <AnimationBoxCover>
            <AnimationBox />
          </AnimationBoxCover>
          <SideMenuIn>
            {/* [타이틀 영역] */}
            {isFolded ? (
              <TitleSection />
            ) : (
              <TitleCover>
                <div className="title">
                  <Link to="/">cheese book</Link>
                </div>
              </TitleCover>
            )}
            {/* 사이드 메뉴 list */}
            <SideMenus className={`${isFolded && 'fold'}`}>
              {cheesePaths.map((cheesePath) => {
                const { name, icon, path } = cheesePath;
                return (
                  <li
                    key={path}
                    className={`${
                      (location.pathname === path || prevPage === path) &&
                      'active'
                    }`}
                  >
                    <Link to={path}>
                      <span className="icon-cover">
                        <i className={icon} />
                      </span>
                      <span className="text-cover">{name}</span>
                    </Link>
                  </li>
                );
              })}
            </SideMenus>
            {/* 검색 */}
            <SearchSection>
              <SearchCover
                className={`${searchMatch && 'active'} ${isFolded && 'fold'}`}
                onClick={() => setIsOpenSearch(true)}
              >
                <i className="fa-solid fa-magnifying-glass" />
              </SearchCover>
            </SearchSection>
          </SideMenuIn>
          <MenuBtnCover>
            <MenuBtn onClick={handleMenuBtn}>
              {isFolded ? (
                <i className="fa-solid fa-angles-right" />
              ) : (
                <i className="fa-solid fa-angles-left" />
              )}
            </MenuBtn>
          </MenuBtnCover>
        </SideMenuCover>
      </SideMenuContainer>
    </>
  );
}

interface IMobileMenu {
  themeIdx: number;
  callback: () => void;
}
export function MobileMenu({ themeIdx, callback }: IMobileMenu) {
  const location = useLocation();
  const prevPage = useRecoilValue(prevPageState);
  return (
    <MobileMenuContainer
      variants={menuFade}
      initial="initial"
      animate="animate"
      exit="end"
      style={{ backgroundColor: mainColors[themeIdx][0] }}
    >
      <MobileAnimationBoxCover>
        <MobileAnimationBox
          style={{ backgroundColor: mainColors[themeIdx][0] }}
        />
      </MobileAnimationBoxCover>
      <MobileMenuCover variants={menuIn}>
        <MobileMenuList style={{ color: mainColors[themeIdx][1] }}>
          {cheesePaths.map((cheesePath, i) => {
            const { name, path } = cheesePath;
            return (
              <MenuLi variants={menuUp} key={path}>
                <Link to={path} onClick={callback}>
                  <MenuNameCover>
                    <MenuName>
                      <span>{name}</span>
                    </MenuName>
                    {(location.pathname === path || prevPage === path) && (
                      <ActiveMenuImg
                        src={`${process.env.PUBLIC_URL}/img/cheese${i}.png`}
                        alt="cheese book"
                        className={`style${i}`}
                      />
                    )}
                  </MenuNameCover>
                </Link>
              </MenuLi>
            );
          })}
        </MobileMenuList>
      </MobileMenuCover>
    </MobileMenuContainer>
  );
}
