import { useRecoilValue } from 'recoil';
import { useState } from 'react';
import { styled } from 'styled-components';
import { latestBookListState } from '../atom';

export const LatestBookBtnCover = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  overflow: hidden;
  border: ${(props) => props.theme.boxLine.sm};
  z-index: 50;
  @media (min-width: 991.5px) {
    width: 45px;
    height: 45px;
    bottom: 1.5rem;
    right: 1.5rem;
    border: ${(props) => props.theme.boxLine.md};
  }
  @media (min-width: 1199.5px) {
    width: 50px;
    height: 50px;
    bottom: 2rem;
    right: 2rem;
    border: ${(props) => props.theme.boxLine.lg};
  }
`;
export const LatestBookBtnImgCover = styled.div`
  width: 100%;
  height: 84px;
  cursor: pointer;
  &.active {
    transform: translateY(calc(-50% + 2px));
  }
  @media (min-width: 991.5px) {
    height: 90px;
    &.active {
      transform: translateY(calc(-50% + 4px));
    }
  }
  @media (min-width: 1199.5px) {
    height: 100px;
    &.active {
      transform: translateY(calc(-50% + 6px));
    }
  }
`;
export const LatestBookBtnImg = styled.div`
  width: 100%;
  height: 40px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 991.5px) {
    height: 41px;
  }
  @media (min-width: 1199.5px) {
    height: 44px;
  }
`;
export const LatestBookCloseBtn = styled.button`
  width: 100%;
  height: 40px;
  background-color: #fff;
  outline: none;
  border: none;
  color: ${(props) => props.theme.black.darker};
  font-size: 1.5rem;
  @media (min-width: 991.5px) {
    height: 41px;
  }
  @media (min-width: 1199.5px) {
    height: 44px;
  }
`;

function LatestBookList() {
  const latestBooks = useRecoilValue(latestBookListState);
  const [openLatestList, setOpenLatestList] = useState(false);
  return (
    <>
      {latestBooks.length > 0 && (
        <LatestBookBtnCover>
          <LatestBookBtnImgCover className={`${openLatestList && 'active'}`}>
            <LatestBookBtnImg
              onClick={() => setOpenLatestList(true)}
              style={{ backgroundImage: `url(${latestBooks?.at(-1)?.cover})` }}
            />
            <LatestBookCloseBtn onClick={() => setOpenLatestList(false)}>
              <i className="fa-solid fa-times" />
            </LatestBookCloseBtn>
          </LatestBookBtnImgCover>
        </LatestBookBtnCover>
      )}
    </>
  );
}

export default LatestBookList;
