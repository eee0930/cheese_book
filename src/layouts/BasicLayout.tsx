import { Outlet } from 'react-router-dom';
// components
import SideMenu from '../components/SideMenu';
// styles
import {
  BaseLayoutContainer,
  CheeseContainer,
  CheeseMainContainer,
  BaseLayoutMenu,
  MobileSideMenuContainer,
} from '../utils/layoutStyles';

function BasicLayout() {
  return (
    <>
      <BaseLayoutContainer>
        <BaseLayoutMenu className="col-md-auto d-none d-md-inline-block">
          <SideMenu />
        </BaseLayoutMenu>
        <CheeseMainContainer className="col-12 col-md">
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
