import { Helmet, HelmetProvider } from 'react-helmet-async';

function Bookshelves() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Bookshelves | Cheese Book</title>
        </Helmet>
      </HelmetProvider>
    </>
  );
}

export default Bookshelves;
