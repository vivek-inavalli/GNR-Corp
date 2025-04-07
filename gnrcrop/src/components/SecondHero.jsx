import { Link } from "react-router-dom";

const SecondHero = () => {
  return (
    <div className="bg-[#022B45] text-white py-20 px-6 flex justify-center">
      <div className="w-full max-w-[950px] flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <div className="mb-6 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">
            Join the Excitement Today!
          </h2>
          <p className="text-sm font-semibold">
            Don’t miss your chance to shine at the event!
          </p>
        </div>

        <div className="flex space-x-4">
          <Link to="/register">
            <button className="bg-blue-100 text-black font-semibold py-2 px-5 rounded-full hover:bg-blue-200 transition">
              Register
            </button>
          </Link>
          <Link to="/eventinfo">
            <button className="bg-white text-black font-semibold py-2 px-5 rounded-full hover:bg-gray-200 transition">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SecondHero;
