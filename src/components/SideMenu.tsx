import { useEffect, useState } from 'react';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { loginState, offsetState } from '../atom';
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
  isFolded?: boolean;
  handleMenuBtn?: () => void;
}

function SideMenu({ isFolded, handleMenuBtn }: ISideMenu) {
  const loggedIn = useRecoilValue(loginState);
  const offsetInfo = useRecoilValue(offsetState);

  const homeMatch = useMatch('/');
  const newestMatch = useMatch('/new/*');
  const bestSellerMatch = useMatch('/best/*');
  const tasteMatch = useMatch('/taste/*');
  const myMatch = useMatch('/my/*');
  const searchMatch = useMatch('/search/*');

  const [searchField, setSearchField] = useState('');
  const [offset, setOffset] = useState<string>();

  const windowWidth = window.innerWidth;
  useEffect(() => {
    if (!offset) {
      setOffset('pc');
      if (windowWidth < offsetInfo.pc && windowWidth > offsetInfo.tablet) {
        setOffset('tablet');
      } else if (windowWidth < offsetInfo.tablet) {
        setOffset('mobile');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowWidth]);

  const navigate = useNavigate();
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchField(e.target.value);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?q=${searchField}`);
  };

  return (
    <>
      {offset &&
        (offset === 'pc' || offset === 'tablet' ? (
          <SideMenuContainer className={`${isFolded && 'fold'}`}>
            <SideMenuCover>
              <LogoImg
                className="jelly"
                src={`${process.env.PUBLIC_URL}/coco.png`}
              />
              <AnimationBoxCover>
                <AnimationBox />
              </AnimationBoxCover>
              <SideMenuIn>
                {isFolded ? (
                  <TitleSection />
                ) : (
                  <TitleCover>
                    <div className="title">
                      <Link to="/">cheese book</Link>
                    </div>
                  </TitleCover>
                )}
                <SideMenus className={`${isFolded && 'fold'}`}>
                  <li className={`${homeMatch && 'active'}`}>
                    <Link to="/">
                      <span className="icon-cover">
                        <i className="fa-solid fa-house-chimney-window" />
                      </span>
                      <span className="text-cover">Home</span>
                    </Link>
                  </li>
                  <li className={`${newestMatch && 'active'}`}>
                    <Link to="/new">
                      <span className="icon-cover">
                        <i className="fa-solid fa-rocket" />
                      </span>
                      <span className="text-cover">New Books</span>
                    </Link>
                  </li>
                  <li className={`${bestSellerMatch && 'active'}`}>
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
                  {!loggedIn && (
                    <li className={`${myMatch && 'active'}`}>
                      <Link to="/my">
                        <span className="icon-cover">
                          <i className="fa-solid fa-book" />
                        </span>
                        <span className="text-cover">My Books</span>
                      </Link>
                    </li>
                  )}
                </SideMenus>
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
        ) : (
          <MobileMenuContainer>
            <MobileMenuCover className="row">
              <div className="col">
                <Link to="/" className="active">
                  <IconCover>
                    <i className="fa-solid fa-house-chimney-window" />
                  </IconCover>
                  <MenuName>home</MenuName>
                </Link>
              </div>
              <div className="col">
                <Link to="/new">
                  <IconCover>
                    <i className="fa-solid fa-rocket" />
                  </IconCover>
                  <MenuName>new</MenuName>
                </Link>
              </div>
              <div className="col">
                <Link to="/best">
                  <IconCover>
                    <i className="fa-solid fa-trophy" />
                  </IconCover>
                  <MenuName>best</MenuName>
                </Link>
              </div>
              <div className="col">
                <Link to="/taste">
                  <IconCover>
                    <i className="fa-solid fa-flask" />
                  </IconCover>
                  <MenuName>taste</MenuName>
                </Link>
              </div>
              <div className="col">
                <Link to="/my">
                  <IconCover>
                    <i className="fa-solid fa-book" />
                  </IconCover>
                  <MenuName>my</MenuName>
                </Link>
              </div>
            </MobileMenuCover>
          </MobileMenuContainer>
        ))}
    </>
  );
}

export default SideMenu;
