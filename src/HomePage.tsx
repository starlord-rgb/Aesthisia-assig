import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-semibold mb-4 text-white">Home Page</h1>
      <p className="mb-4 text-white">Welcome to the home page! Click the button below to configure pricing.</p>
      <Link
        to="/services/new"
        className="inline-block py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Go to Pricing Configuration
      </Link>
    </div>
  );
};

export default HomePage;
