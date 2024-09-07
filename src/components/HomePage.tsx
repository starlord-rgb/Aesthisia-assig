import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link to="/services/new">
        <button className="w-full h-[49px] rounded-md bg-gradient-to-b from-[#1a73e8] to-[#853bce] text-white">
          Go to Services New
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
