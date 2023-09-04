import { Outlet, useLocation } from 'react-router-dom';
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
import { useEffect, useRef } from 'react';

function BasicLayout() {
  const location = useLocation();
  const mainContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (mainContainer.current) {
      mainContainer.current.scrollTo(0, 0);
    }
  }, [location]);
  return (
    <>
      <BaseLayoutContainer>
        <BaseLayoutMenu className="col-md-auto d-none d-md-inline-block">
          <SideMenu />
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
