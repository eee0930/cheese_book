import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { prevPageState } from '../atom';
import { categoryList } from '../data/cheeseMainData';
// components
import NewBooks from '../components/list/NewBooks';
import NavTaps from '../components/list/NavTaps';
import CheeseHead from '../components/CheeseHead';
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
const cateList = categoryList?.at(0)?.categories;
const CATE_NAME = 'New Books';
function ListNewBooks() {
  const setPrevPage = useSetRecoilState(prevPageState);
  const location = useLocation();

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
            backgroundImage: `url(${process.env.PUBLIC_URL}/img/cheese2.png)`,
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
              <ContentTitle>{cate?.name} 신작</ContentTitle>
            </ContentTitleSection>
            <NewBooks isKorea={true} cateNum={cate.id} maxSize={12} />
          </ContentContainer>
        );
      })}
    </>
  );
}

export default ListNewBooks;
