import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useMatch } from 'react-router-dom';
// components
import SideMenu from '../../components/SideMenu';
// styles
import {
  BaseLayoutContainer,
  CheeseContainer,
  CheeseMainContainer,
  BaseLayoutMenu,
  MobileSideMenuContainer,
} from '../../styles/layoutStyles';

function BasicLayout() {
  const [foldMenu, setFoldMenu] = useState(false);
  const location = useLocation();
  const bookMatch = useMatch('/book/*');
  const mainContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (bookMatch) {
      setFoldMenu(true);
    }
    if (mainContainer.current) {
      mainContainer.current.scrollTo(0, 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
      <BaseLayoutContainer>
        <BaseLayoutMenu
          className={`${
            foldMenu && 'fold'
          } col-md-auto d-none d-md-inline-block`}
        >
          <SideMenu
            isFolded={foldMenu}
            handleMenuBtn={() => setFoldMenu((prev) => !prev)}
          />
        </BaseLayoutMenu>
        <CheeseMainContainer ref={mainContainer} className="col-12 col-md">
          <CheeseContainer>
            <Outlet />
          </CheeseContainer>
        </CheeseMainContainer>
      </BaseLayoutContainer>

      <MobileSideMenuContainer>
        <SideMenu />
      </MobileSideMenuContainer>
    </>
  );
}

export default BasicLayout;
