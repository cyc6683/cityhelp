import { useState } from "react";
import Navbar from "../components/Navbar";

const helpRequests = [
  {
    id: 1,
    title: "Leaking Pipe",
    status: "Pending",
    date: "May 1, 2025",
  },
  {
    id: 2,
    title: "Power Outage in Block C",
    status: "Completed",
    date: "April 28, 2025",
  },
  {
    id: 3,
    title: "Broken Street Light",
    status: "In Progress",
    date: "April 25, 2025",
  },
];

const HelpStatus = () => {
  const [activeTab, setActiveTab] = useState<
    "Needs" | "In Progress" | "Completed"
  >("Needs");

  const filteredRequests = helpRequests.filter((request) => {
    if (activeTab === "Needs") return true;
    return request.status === activeTab;
  });

  return (
    <div className="min-h-screen bg-indigo-50">
      <Navbar />
      <section className="max-w-3xl mx-auto px-6 py-16 pb-24">
        <h1 className="text-3xl font-bold text-indigo-700 mb-4">
          Your Requests
        </h1>
        <p className="text-gray-600 mb-8">
          Below is a list of help requests you've submitted. You can check their
          current status here.
        </p>
        <div className="flex gap-4 mb-6">
          {["Needs", "In Progress", "Completed"].map((tab) => (
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
              className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {request.title}
                </h3>
                <p className="text-sm text-gray-500">{request.date}</p>
              </div>
              <span
                className={`text-sm font-medium px-3 py-1 rounded-full ${
                  request.status === "Pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : request.status === "In Progress"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {request.status}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HelpStatus;
