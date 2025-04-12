import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="flex flex-col space-y-2">
        <Link to="/monarchs">Monarchs</Link>
        <Link to="/ryse">RYSE: database test</Link>
      </div>
    </>
  );
};

export default Home;
