import BestSellers from '../components/BestSellers';

function Home() {
  return (
    <div>
      <h3>Best Seller</h3>
      <BestSellers isHome={true} />
    </div>
  );
}

export default Home;
