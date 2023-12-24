import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Variants, useAnimation, useScroll } from 'framer-motion';
// components
import { SideMenu } from '../../components/SideMenu';
import MobileHeader from '../../components/MobileHeader';
import LatestBookList from '../../components/LatestBookList';
// styles
import {
  BaseLayoutContainer,
  CheeseContainer,
  CheeseMainContainer,
  BaseLayoutMenu,
  MobileSideMenuContainer,
  ScrollTopContainer,
  TopBtn,
} from '../../styles/layoutStyles';

function BasicLayout() {
  const [isFoldMenu, setIsFoldMenu] = useState(false);
  const location = useLocation();
  const mainContainer = useRef<HTMLDivElement>(null);
  const topBtnAnimate = useAnimation();
  useEffect(() => {
    if (mainContainer.current) {
      mainContainer.current.scrollTo(0, 0);
    }
  }, [location]);

  const { scrollY } = useScroll({ container: mainContainer });
  useEffect(() => {
    scrollY.on('change', () => {
      if (scrollY.get() > 200) {
        topBtnAnimate.start('scroll');
      } else {
        topBtnAnimate.start('top');
      }
    });
  }, [scrollY]);

  const topBtnVisible: Variants = {
    top: {
      opacity: 0,
    },
    scroll: {
      opacity: 1,
    },
  };

  const handleClickTop = () => {
    if (mainContainer.current) {
      mainContainer.current.scrollTo(0, 0);
    }
  };
  return (
    <>
      <BaseLayoutContainer>
        <MobileSideMenuContainer>
          <MobileHeader />
        </MobileSideMenuContainer>
        <BaseLayoutMenu
          className={`${
            isFoldMenu && 'fold'
          } col-md-auto d-none d-md-inline-block`}
        >
          <SideMenu
            isFolded={isFoldMenu}
            handleMenuBtn={() => setIsFoldMenu((prev) => !prev)}
          />
        </BaseLayoutMenu>
        <CheeseMainContainer ref={mainContainer} className="col-12 col-md">
          <CheeseContainer>
            <Outlet context={{ mainContainer }} />
          </CheeseContainer>
          <LatestBookList />
          <ScrollTopContainer
            variants={topBtnVisible}
            animate={topBtnAnimate}
            initial="top"
          >
            <TopBtn onClick={handleClickTop}>top</TopBtn>
          </ScrollTopContainer>
        </CheeseMainContainer>
      </BaseLayoutContainer>
    </>
  );
}

export default BasicLayout;
