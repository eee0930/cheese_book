import { useEffect, useState } from 'react';
import { Link, useMatch } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { offsetState } from '../atom';
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
  const offsetInfo = useRecoilValue(offsetState);
  const homeMatch = useMatch('/');
  const newestMatch = useMatch('/newest/*');
  const bestSellerMatch = useMatch('/best/*');
  const recommendMatch = useMatch('/mbti/*');
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
  }, []);

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
                      <Link to="/">home</Link>
                    </span>
                  </li>
                  <li className={`${newestMatch && 'active'}`}>
                    <span className="icon-cover">
                      <i className="fa-solid fa-rocket" />
                    </span>
                    <span>
                      <Link to="/chart">New Books</Link>
                    </span>
                  </li>
                  <li className={`${bestSellerMatch && 'active'}`}>
                    <span className="icon-cover">
                      <i className="fa-solid fa-trophy" />
                    </span>
                    <span>
                      <Link to="/mixtape">Best Seller</Link>
                    </span>
                  </li>
                  <li className={`${recommendMatch && 'active'}`}>
                    <span className="icon-cover">
                      <i className="fa-solid fa-flask" />
                    </span>
                    <span>
                      <Link to="/mixtape">recommend</Link>
                    </span>
                  </li>
                </SideMenus>
                <SearchSection>
                  <SearchCover>
                    <i className="fa-solid fa-magnifying-glass" />
                    <form>
                      <input type="search" name="search" placeholder="search" />
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
                <Link to="/chart">
                  <IconCover>
                    <i className="fa-solid fa-trophy" />
                  </IconCover>
                  <MenuName>chart</MenuName>
                </Link>
              </div>
              <div className="col">
                <Link to="/mixtape">
                  <IconCover>
                    <i className="fa-solid fa-record-vinyl" />
                  </IconCover>
                  <MenuName>mix tape</MenuName>
                </Link>
              </div>
              <div className="col">
                <Link to="#">
                  <IconCover>
                    <i className="fa-solid fa-bars" />
                    <i className="fa-solid fa-music" />
                  </IconCover>
                  <MenuName>play list</MenuName>
                </Link>
              </div>
            </MobileMenuCover>
          </MobileMenuContainer>
        ))}
    </>
  );
}

export default SideMenu;
