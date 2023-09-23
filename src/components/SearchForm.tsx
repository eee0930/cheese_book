import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { latestSearchListState } from '../atom';
import { mainColors } from '../data/cheeseMainData';
import {
  ModalContainer,
  OverlayContainer,
} from '../styles/components/modalStyles';
import {
  FormCharacter,
  MobileAnimationBox,
  MobileAnimationBoxCover,
  MobileMenuContainer,
  MobileMenuCover,
  SearchEle,
  SearchFormInput,
  SearchListCover,
  menuFade,
  menuIn,
} from '../styles/components/sideMenuStyles';

interface ISearchForm {
  themeIdx?: number;
  callback: () => void;
}

interface ISearchInput {
  formSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

function SearchInput({ formSubmit, onChange, value }: ISearchInput) {
  const input = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (!input.current) {
      return;
    } else {
      input.current.focus();
    }
  }, [input]);
  return (
    <form method="get" onSubmit={formSubmit}>
      <SearchFormInput
        type="search"
        name="search"
        placeholder="Input Keyword and Enter."
        value={value}
        onChange={onChange}
        autoComplete="off"
        ref={input}
      />
    </form>
  );
}

export function SearchForm({ themeIdx = 0, callback }: ISearchForm) {
  const navigate = useNavigate();
  const [searchField, setSearchField] = useState('');
  const [searchList, setSearchList] = useRecoilState<string[]>(
    latestSearchListState
  );
  const handleSearchList = (keyword: string) => {
    setSearchList((prev) => {
      if (prev.includes(keyword)) {
        const idx = prev.indexOf(keyword);
        return [...prev.slice(0, idx), ...prev.slice(idx + 1), keyword];
      } else {
        if (prev.length < 5) {
          return [...prev, keyword];
        } else {
          return [...prev.slice(1), keyword];
        }
      }
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchField.length) {
      return;
    }
    navigate(`/search?q=${searchField}`);
    handleSearchList(searchField);
    setSearchField('');
    callback();
  };
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchField(e.target.value);
  const handleClickKeyword = (search: string) => {
    setSearchField(search);
    handleSearchList(search);
    navigate(`/search?q=${search}`);
    setSearchField('');
    callback();
  };
  const backgroundColor = {
    backgroundColor: mainColors[themeIdx][0],
  };
  return (
    <ModalContainer>
      <OverlayContainer onClick={callback} />
      <MobileMenuContainer style={backgroundColor}>
        <MobileAnimationBoxCover>
          <MobileAnimationBox style={backgroundColor} />
        </MobileAnimationBoxCover>
        <MobileMenuCover variants={menuIn}>
          <FormCharacter src={`${process.env.PUBLIC_URL}/img/cheese4.png`} />
          <SearchInput
            formSubmit={handleSubmit}
            value={searchField}
            onChange={handleSearchInput}
          />
          <SearchListCover>
            {searchList?.map((search, i) => (
              <SearchEle onClick={() => handleClickKeyword(search)} key={i}>
                {search}
              </SearchEle>
            ))}
          </SearchListCover>
        </MobileMenuCover>
      </MobileMenuContainer>
    </ModalContainer>
  );
}

export function MobileSearchForm({ themeIdx = 0, callback }: ISearchForm) {
  const [searchField, setSearchField] = useState('');
  const [searchList, setSearchList] = useRecoilState<string[]>(
    latestSearchListState
  );
  const navigate = useNavigate();
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchField(e.target.value);
  const handleSearchList = (keyword: string) => {
    setSearchList((prev) => {
      if (prev.includes(keyword)) {
        const idx = prev.indexOf(keyword);
        return [...prev.slice(0, idx), ...prev.slice(idx + 1), keyword];
      } else {
        if (prev.length < 5) {
          return [...prev, keyword];
        } else {
          return [...prev.slice(1), keyword];
        }
      }
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchField.length) {
      return;
    }
    navigate(`/search?q=${searchField}`);
    handleSearchList(searchField);
    setSearchField('');
    callback();
  };
  const handleClickKeyword = (search: string) => {
    setSearchField(search);
    handleSearchList(search);
    navigate(`/search?q=${search}`);
    setSearchField('');
    callback();
  };
  const backgroundColor = {
    backgroundColor: mainColors[themeIdx][0],
  };
  return (
    <MobileMenuContainer
      variants={menuFade}
      initial="initial"
      animate="animate"
      exit="end"
      style={backgroundColor}
    >
      <MobileAnimationBoxCover>
        <MobileAnimationBox style={backgroundColor} />
      </MobileAnimationBoxCover>
      <MobileMenuCover variants={menuIn}>
        <SearchInput
          formSubmit={handleSubmit}
          value={searchField}
          onChange={handleSearchInput}
        />
        <SearchListCover>
          {searchList?.map((search, i) => (
            <SearchEle onClick={() => handleClickKeyword(search)} key={i}>
              {search}
            </SearchEle>
          ))}
        </SearchListCover>
      </MobileMenuCover>
    </MobileMenuContainer>
  );
}
