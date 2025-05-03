// pages/Home.tsx
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import ServiceCard from "../components/ServiceCard";
import {
  FiPhone,
  FiMessageSquare,
  FiVideo,
  FiZap,
  FiDroplet,
  FiClock,
  FiHelpCircle,
} from "react-icons/fi";

const Home = () => {
  return (
    <div className="min-h-screen bg-indigo-600 text-white">
      <Navbar />
      <main className="flex flex-col items-center text-center mt-12 pb-24">
        <h1 className="text-5xl md:text-9xl font-protest font-extrabold mb-2">
          CityHelp
        </h1>
        <p className="text-base md:text-lg mb-6">
          Explore our CityHelp to your questions.
        </p>
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <SearchBar />
        </div>

        <div className="flex flex-row justify-center gap-4 sm:gap-8 my-8">
          <div className="bg-white p-3 rounded-xl hover:scale-105 active:scale-95 transition duration-150">
            <FiPhone className="text-black text-xl " />
          </div>
          <div className="bg-white p-3 rounded-xl hover:scale-105 active:scale-95 transition duration-150">
            <FiMessageSquare className="text-black text-xl" />
          </div>
          <div className="bg-white p-3 rounded-xl hover:scale-105 active:scale-95 transition duration-150">
            <FiVideo className="text-black text-xl" />
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          <div className="hover:scale-105 active:scale-95 transition duration-150">
            <ServiceCard
              icon={<FiZap />}
              label="Report Electricity Outage"
              link="/report"
            />
          </div>
          <div className="hover:scale-105 active:scale-95 transition duration-150">
            <ServiceCard
              icon={<FiDroplet />}
              label="Report Water Outage"
              link="/report"
            />
          </div>
          <div className="hover:scale-105 active:scale-95 transition duration-150">
            <ServiceCard
              icon={<FiClock />}
              label="Planned Outage"
              link="/upcomming"
            />
          </div>
          <div className="hover:scale-105 active:scale-95 transition duration-150">
            <ServiceCard
              icon={<FiHelpCircle />}
              label="Need Any Help"
              link="/help"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
