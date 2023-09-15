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
} from '../styles/components/sideMenuStyles';

interface ISideMenu {
  isFolded: boolean;
  handleMenuBtn: () => void;
}

export function SideMenu({ isFolded, handleMenuBtn }: ISideMenu) {
  const searchMatch = useMatch('/search/*');
  const location = useLocation();
  const prevPage = useRecoilValue(prevPageState);
  const [searchField, setSearchField] = useState('');

  const navigate = useNavigate();
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchField(e.target.value);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?q=${searchField}`);
    setSearchField('');
  };

  return (
    <SideMenuContainer className={`${isFolded && 'fold'}`}>
      <SideMenuCover>
        <LogoImg
          className="jelly"
          alt="cheese book"
          src={`${process.env.PUBLIC_URL}/coco.png`}
        />
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
            <SearchCover className={`${searchMatch && 'active'}`}>
              <i className="fa-solid fa-magnifying-glass" />
              <form method="get" onSubmit={handleSubmit}>
                <input
                  type="search"
                  name="search"
                  placeholder="search"
                  value={searchField}
                  onChange={handleSearchInput}
                  autoComplete="off"
                />
              </form>
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
          {cheesePaths.map((cheesePath) => {
            const { name, path } = cheesePath;
            return (
              <MenuLi variants={menuUp} key={path}>
                <Link to={path} onClick={callback}>
                  <MenuNameCover>
                    <MenuName>
                      <span>{name}</span>
                    </MenuName>
                    {/* {(location.pathname === path || prevPage === path) && (
                      <ActiveMenuImg
                        layoutId="active"
                        src={`${process.env.PUBLIC_URL}/coco.png`}
                        alt="cheese book"
                      />
                    )} */}
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
