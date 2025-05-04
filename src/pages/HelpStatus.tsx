import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const helpRequests = [
  {
    id: 1,
    title: "Water Leak in Basement",
    status: "Needs",
    date: "May 3, 2025",
    location: "789 Elm St, Apt B2",
  },
  {
    id: 2,
    title: "Overflowing Trash",
    status: "Needs",
    date: "May 2, 2025",
    location: "35 River Rd",
  },
  {
    id: 3,
    title: "Graffiti Cleanup",
    status: "Needs",
    date: "May 1, 2025",
    location: "12 Canal St",
  },
  {
    id: 4,
    title: "Tree Blocking Driveway",
    status: "Pending",
    date: "April 30, 2025",
    location: "57 Maple Ave",
  },
  {
    id: 5,
    title: "Broken Playground Slide",
    status: "Pending",
    date: "April 29, 2025",
    location: "88 Parkside Blvd",
  },
  {
    id: 6,
    title: "Power Restored Successfully",
    status: "Completed",
    date: "April 27, 2025",
    location: "23 Birch Lane",
  },
  {
    id: 7,
    title: "Repaired Streetlight",
    status: "Completed",
    date: "April 26, 2025",
    location: "99 Central Ave",
  },
];

const myRequests = [
  {
    id: "m1",
    title: "Requesting Assistance for Blocked Drain",
    status: "Needs",
    date: "May 3, 2025",
    location: "212 Hilltop Dr",
  },
  {
    id: "m2",
    title: "Fix Broken Door Handle",
    status: "Pending",
    date: "May 2, 2025",
    location: "198 Orchard Ln",
  },
  {
    id: "m3",
    title: "Thank you for restoring elevator",
    status: "Completed",
    date: "April 30, 2025",
    location: "77 Beacon Way",
  },
];

const HelpStatus = () => {
  const [activeTab, setActiveTab] = useState<"Needs" | "Pending" | "Completed">(
    "Needs"
  );

  const [myTab, setMyTab] = useState<"All" | "Needs" | "Pending" | "Completed">(
    "All"
  );

  const navigate = useNavigate();

  const filteredRequests = helpRequests.filter((request) => {
    return request.status === activeTab;
  });

  const filteredMyRequests =
    myTab === "All"
      ? myRequests
      : myRequests.filter((request) => request.status === myTab);

  return (
    <div className="min-h-screen bg-indigo-50">
      <Navbar />
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 pb-24">
        <h1 className="text-3xl font-bold text-indigo-700 mb-4">
          City Requests
        </h1>
        <p className="text-gray-600 mb-8">
          Below is a list of help requests people submitted. You can check their
          current status here.
        </p>
        <div className="flex gap-4 mb-6">
          {["Needs", "Pending", "Completed"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeTab === tab
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="space-y-4">
          {filteredRequests.map((request) => (
            <div
              key={request.id}
              className="bg-white px-4 py-5 sm:p-6 rounded-lg shadow flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {request.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2">{request.location}</p>
                <p className="text-xs text-gray-400">{request.date}</p>
              </div>
              <div className="flex flex-col sm:items-end sm:text-right gap-3 pt-1">
                <span
                  className={`text-sm font-medium px-3 py-1 rounded-full w-fit ${
                    request.status === "Needs"
                      ? "bg-yellow-100 text-yellow-700"
                      : request.status === "Pending"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {request.status}
                </span>
                {request.status === "Needs" && (
                  <button className="text-sm text-indigo-600 border border-indigo-600 px-3 py-1 mt-2 rounded hover:bg-indigo-50 active:scale-95 transition">
                    Help Now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4 sm:mb-0">
              My Requests
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex gap-2 flex-wrap">
              {["All", "Needs", "Pending", "Completed"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setMyTab(tab as any)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    myTab === tab
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <button
              onClick={() => navigate("/report")}
              className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 active:scale-95 transition w-fit"
            >
              + Add Request
            </button>
          </div>
          <div className="space-y-4">
            {filteredMyRequests.map((request) => (
              <div
                key={request.id}
                className="bg-white px-4 py-5 sm:p-6 rounded-lg shadow flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {request.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    {request.location}
                  </p>
                  <p className="text-xs text-gray-400">{request.date}</p>
                </div>
                <div className="flex flex-col sm:items-end sm:text-right gap-3 pt-1">
                  <span
                    className={`text-sm font-medium px-3 py-1 rounded-full w-fit ${
                      request.status === "Needs"
                        ? "bg-yellow-100 text-yellow-700"
                        : request.status === "Pending"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {request.status === "Pending"
                      ? "Pending..."
                      : request.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpStatus;
