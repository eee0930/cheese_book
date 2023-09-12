import { useState } from 'react';
import { Link, useMatch, useNavigate } from 'react-router-dom';
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
  MobileMenuContainer,
  MobileMenuCover,
  IconCover,
  MenuName,
  MenuBtnCover,
  MenuBtn,
  TitleSection,
} from '../styles/components/sideMenuStyles';

interface ISideMenu {
  isFolded: boolean;
  handleMenuBtn: () => void;
}

export function SideMenu({ isFolded, handleMenuBtn }: ISideMenu) {
  const homeMatch = useMatch('/');
  const newMatch = useMatch('/new/*');
  const bestMatch = useMatch('/best/*');
  const tasteMatch = useMatch('/taste/*');
  const myMatch = useMatch('/my/*');
  const searchMatch = useMatch('/search/*');

  const [searchField, setSearchField] = useState('');

  const navigate = useNavigate();
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchField(e.target.value);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?q=${searchField}`);
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
            <li className={`${homeMatch && 'active'}`}>
              <Link to="/">
                <span className="icon-cover">
                  <i className="fa-solid fa-house-chimney-window" />
                </span>
                <span className="text-cover">Home</span>
              </Link>
            </li>
            <li className={`${newMatch && 'active'}`}>
              <Link to="/new">
                <span className="icon-cover">
                  <i className="fa-solid fa-rocket" />
                </span>
                <span className="text-cover">New Books</span>
              </Link>
            </li>
            <li className={`${bestMatch && 'active'}`}>
              <Link to="/best">
                <span className="icon-cover">
                  <i className="fa-solid fa-trophy" />
                </span>
                <span className="text-cover">Best Sellers</span>
              </Link>
            </li>
            <li className={`${tasteMatch && 'active'}`}>
              <Link to="/taste">
                <span className="icon-cover">
                  <i className="fa-solid fa-flask" />
                </span>
                <span className="text-cover">Your Taste</span>
              </Link>
            </li>
            <li className={`${myMatch && 'active'}`}>
              <Link to="/my">
                <span className="icon-cover">
                  <i className="fa-solid fa-book" />
                </span>
                <span className="text-cover">My Books</span>
              </Link>
            </li>
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

export function MobileMenu() {
  const homeMatch = useMatch('/');
  const newMatch = useMatch('/new/*');
  const bestMatch = useMatch('/best/*');
  const tasteMatch = useMatch('/taste/*');
  const myMatch = useMatch('/my/*');
  return (
    <MobileMenuContainer>
      <MobileMenuCover className="row">
        <div className="col">
          <Link to="/" className={`${homeMatch && 'active'}`}>
            <IconCover>
              <i className="fa-solid fa-house-chimney-window" />
            </IconCover>
            <MenuName>home</MenuName>
          </Link>
        </div>
        <div className="col">
          <Link to="/new" className={`${newMatch && 'active'}`}>
            <IconCover>
              <i className="fa-solid fa-rocket" />
            </IconCover>
            <MenuName>new</MenuName>
          </Link>
        </div>
        <div className="col">
          <Link to="/best" className={`${bestMatch && 'active'}`}>
            <IconCover>
              <i className="fa-solid fa-trophy" />
            </IconCover>
            <MenuName>best</MenuName>
          </Link>
        </div>
        <div className="col">
          <Link to="/taste" className={`${tasteMatch && 'active'}`}>
            <IconCover>
              <i className="fa-solid fa-flask" />
            </IconCover>
            <MenuName>taste</MenuName>
          </Link>
        </div>
        <div className="col">
          <Link to="/my" className={`${myMatch && 'active'}`}>
            <IconCover>
              <i className="fa-solid fa-book" />
            </IconCover>
            <MenuName>my</MenuName>
          </Link>
        </div>
      </MobileMenuCover>
    </MobileMenuContainer>
  );
}
