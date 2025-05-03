// pages/Help.tsx
import { useState } from "react";
import Navbar from "../components/Navbar";

const mockNeeds = {
  pending: [
    { title: "Need water delivery", time: "2025-05-01 09:30" },
    { title: "Check electricity in my area", time: "2025-05-02 11:10" },
  ],
  progress: [{ title: "Pipe fix scheduled", time: "2025-04-29 14:20" }],
  completed: [{ title: "Resolved: Light restored", time: "2025-04-26 08:00" }],
};

const Help = () => {
  const [activeTab, setActiveTab] = useState<
    "pending" | "progress" | "completed"
  >("pending");

  const tabs: { label: string; key: "pending" | "progress" | "completed" }[] = [
    { label: "Needs", key: "pending" },
    { label: "In Progress", key: "progress" },
    { label: "Completed", key: "completed" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Help & Needs</h1>
          <button className="bg-orange-400 text-white px-4 py-2 rounded-xl font-medium hover:bg-orange-500">
            + Add Request
          </button>
        </div>

        <div className="flex space-x-4 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded ${
                activeTab === tab.key
                  ? "bg-orange-400 text-white"
                  : "bg-white text-gray-700 border"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {mockNeeds[activeTab].map((item, i) => (
            <div key={i} className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Help;
