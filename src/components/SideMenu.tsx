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
} from '../utils/components/sideMenuStyles';

function SideMenu() {
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
  const handleSearch = (e: any) => setSearchField(e.target.value);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    navigate(`/search?q=${searchField}`);
  };

  return (
    <>
      {offset &&
        (offset === 'pc' || offset === 'tablet' ? (
          <SideMenuContainer>
            <SideMenuCover>
              <LogoImg
                className="jelly"
                src={`${process.env.PUBLIC_URL}/coco.png`}
              />
              <AnimationBoxCover>
                <AnimationBox />
              </AnimationBoxCover>
              <SideMenuIn>
                <TitleCover>
                  <div className="title">
                    <Link to="/">cheese book</Link>
                  </div>
                </TitleCover>
                <SideMenus>
                  <li className={`${homeMatch && 'active'}`}>
                    <span className="icon-cover">
                      <i className="fa-solid fa-house-chimney-window" />
                    </span>
                    <span>
                      <Link to="/">Home</Link>
                    </span>
                  </li>
                  <li className={`${newestMatch && 'active'}`}>
                    <span className="icon-cover">
                      <i className="fa-solid fa-rocket" />
                    </span>
                    <span>
                      <Link to="/new">New Books</Link>
                    </span>
                  </li>
                  <li className={`${bestSellerMatch && 'active'}`}>
                    <span className="icon-cover">
                      <i className="fa-solid fa-trophy" />
                    </span>
                    <span>
                      <Link to="/best">Best Sellers</Link>
                    </span>
                  </li>
                  <li className={`${tasteMatch && 'active'}`}>
                    <span className="icon-cover">
                      <i className="fa-solid fa-flask" />
                    </span>
                    <span>
                      <Link to="/taste">Your Taste</Link>
                    </span>
                  </li>
                  {!loggedIn && (
                    <li className={`${myMatch && 'active'}`}>
                      <span className="icon-cover">
                        <i className="fa-solid fa-book" />
                      </span>
                      <span>
                        <Link to="/my">My Books</Link>
                      </span>
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
                        onChange={handleSearch}
                      />
                    </form>
                  </SearchCover>
                </SearchSection>
              </SideMenuIn>
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
