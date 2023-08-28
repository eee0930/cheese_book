import { Helmet, HelmetProvider } from 'react-helmet-async';

function ListBestSeller() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Best Sellers | Cheese Book</title>
        </Helmet>
      </HelmetProvider>
    </>
  );
}

export default ListBestSeller;
