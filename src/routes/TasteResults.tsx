import { Helmet, HelmetProvider } from 'react-helmet-async';

function TasteResults() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>My Taste | Cheese Book</title>
        </Helmet>
      </HelmetProvider>
    </>
  );
}

export default TasteResults;
