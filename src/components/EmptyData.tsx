import {
  EmptyBooksContainer,
  EmptyMyBooksImg,
  EmptyMyBooksMent,
} from '../styles/commonStyles';

interface IEmptyData {
  children: React.ReactNode;
}

function EmptyData({ children }: IEmptyData) {
  return (
    <EmptyBooksContainer>
      <EmptyMyBooksImg
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/img/cheese_null.png)`,
        }}
      />
      <EmptyMyBooksMent>{children}</EmptyMyBooksMent>
    </EmptyBooksContainer>
  );
}

export default EmptyData;
