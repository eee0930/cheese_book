import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { categoryList } from '../data/cheeseMainData';
import { prevPageState } from '../atom';
// components
import CheeseHead from '../components/CheeseHead';
import BestSellers from '../components/list/BestSellers';
import NavTaps from '../components/list/NavTaps';
// styles
import {
  ContentContainer,
  ContentTitle,
  ContentTitleSection,
  PageTitle,
  PageTitleCover,
  PageTitleImg,
} from '../styles/commonStyles';

interface IGroupInfo {
  id: number;
  name: string;
}
const CATE_NAME = 'Best Sellers';
const cateList = categoryList?.at(0)?.categories;

function ListBestSeller() {
  const setPrevPage = useSetRecoilState(prevPageState);
  const location = useLocation();

  useEffect(() => setPrevPage(location.pathname), []);

  const scrollRef = useRef<HTMLDivElement[]>([]);
  const handleScrollView = (idx: number) => {
    scrollRef?.current[idx]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <CheeseHead title={`${CATE_NAME}`} />
      <PageTitleCover>
        <PageTitleImg
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/img/cheese1.png)`,
          }}
        />
        <PageTitle>{CATE_NAME}</PageTitle>
      </PageTitleCover>
      <NavTaps
        groupInfo={cateList as IGroupInfo[]}
        callBack={handleScrollView}
      />
      {cateList?.map((cate, i) => {
        return (
          <ContentContainer
            key={cate.id}
            ref={(el: HTMLDivElement) => (scrollRef.current[i] = el)}
          >
            <ContentTitleSection>
              <ContentTitle>{cate?.name} 베스트</ContentTitle>
            </ContentTitleSection>
            <BestSellers isKorea={true} cateNum={cate.id} maxSize={12} />
          </ContentContainer>
        );
      })}
    </>
  );
}

export default ListBestSeller;
