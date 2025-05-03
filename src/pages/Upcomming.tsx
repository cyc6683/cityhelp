// pages/Upcoming.tsx
import Navbar from "../components/Navbar";
import outages from "../assets/outages.jpg";

const upcomingOutages = [
  {
    type: "Electricity",
    area: "21st Street, NY",
    date: "2025-05-05",
    time: "13:00 - 16:00",
  },
  {
    type: "Water",
    area: "Lincoln Ave, NY",
    date: "2025-05-06",
    time: "09:00 - 11:30",
  },
  {
    type: "Electricity",
    area: "7th Avenue, NY",
    date: "2025-05-07",
    time: "10:00 - 13:00",
  },
];

const Upcoming = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${outages})`,
        }}
      >
        <div className="bg-white/50 backdrop-blur-sm py-8 sm:py-12 md:py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Upcoming Service Interruptions
            </h1>
            <p className="text-xs sm:text-base text-gray-600 mb-4 max-w-4xl mx-auto">
              We sincerely apologize for the inconvenience this may cause. This
              is a scheduled outage, and we kindly ask residents to prepare in
              advance by securing water and any essential supplies needed during
              this period.
              <br />
              <br />
              CityHelp is doing everything we can to resolve the situation as
              quickly as possible.
              <br /> We appreciate your patience and trust as we work through
              this.
              <br />
              <br />
              For further inquiries or to report additional issues, please visit
              the previous page or contact us directly.
              <br />
              <br />
              Thank you for your understanding.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto p-8">
        <p className="text-gray-600 mb-6">
          Stay informed about planned outages in your area.
        </p>
        <div className="space-y-4 mt-6">
          {upcomingOutages.map((outage, i) => (
            <div
              key={i}
              className="border border-gray-300 p-4 rounded-xl bg-white shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-2">
                <h3 className="font-semibold text-lg text-orange-500">
                  {outage.type} Outage
                </h3>
                <span className="text-sm text-gray-500">{outage.date}</span>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-gray-700 text-sm">{outage.area}</p>
                  <p className="text-gray-500 text-sm">{outage.time}</p>
                </div>
                <button className="text-sm text-indigo-600 border border-indigo-600 px-3 py-1 rounded hover:bg-indigo-50 transition ml-4 whitespace-nowrap h-fit">
                  More Info
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
