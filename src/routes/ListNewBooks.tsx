import { Helmet, HelmetProvider } from 'react-helmet-async';

function ListNewBooks() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>New Books | Cheese Book</title>
        </Helmet>
      </HelmetProvider>
    </>
  );
}

export default ListNewBooks;
