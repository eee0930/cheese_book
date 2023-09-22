import { useNavigate } from 'react-router-dom';
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
  SearchFormInput,
  menuFade,
  menuIn,
} from '../styles/components/sideMenuStyles';
import { useEffect, useRef, useState } from 'react';

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
        placeholder="search"
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
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?q=${searchField}`);
    setSearchField('');
    callback();
  };
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchField(e.target.value);
  return (
    <ModalContainer>
      <OverlayContainer onClick={callback} />
      <MobileMenuContainer style={{ backgroundColor: mainColors[themeIdx][0] }}>
        <MobileAnimationBoxCover>
          <MobileAnimationBox
            style={{ backgroundColor: mainColors[themeIdx][0] }}
          />
        </MobileAnimationBoxCover>
        <MobileMenuCover variants={menuIn}>
          <FormCharacter src={`${process.env.PUBLIC_URL}/img/cheese4.png`} />
          <SearchInput
            formSubmit={handleSubmit}
            value={searchField}
            onChange={handleSearchInput}
          />
        </MobileMenuCover>
      </MobileMenuContainer>
    </ModalContainer>
  );
}

export function MobileSearchForm({ themeIdx = 0, callback }: ISearchForm) {
  const [searchField, setSearchField] = useState('');
  const navigate = useNavigate();
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchField(e.target.value);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?q=${searchField}`);
    setSearchField('');
    callback();
  };
  return (
    <MobileMenuContainer
      variants={menuFade}
      initial="initial"
      animate="animate"
      exit="end"
      style={{ backgroundColor: mainColors[themeIdx][0] }}
    >
      <MobileAnimationBoxCover>
        <MobileAnimationBox
          style={{ backgroundColor: mainColors[themeIdx][0] }}
        />
      </MobileAnimationBoxCover>
      <MobileMenuCover variants={menuIn}>
        <SearchInput
          formSubmit={handleSubmit}
          value={searchField}
          onChange={handleSearchInput}
        />
      </MobileMenuCover>
    </MobileMenuContainer>
  );
}
