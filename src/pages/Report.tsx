// pages/Report.tsx
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useReportStore } from "../store/reportStore";

const Report = () => {
  const [description, setDescription] = useState("");
  const [locationText, setLocationText] = useState("");
  const [time, setTime] = useState("");
  const [urgent, setUrgent] = useState<"yes" | "no" | null>(null);

  const addReport = useReportStore((state) => state.addReport);
  const tempCoords = useReportStore((state) => state.tempCoords);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addReport({
      description,
      locationText,
      time: new Date().toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }),
      urgent,
      coordinates: {
        lat: tempCoords?.lat ?? 0,
        lng: tempCoords?.lng ?? 0,
        address: tempCoords?.address,
      },
      status: "submitted",
    });
    navigate("/map");
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-xl text-red-500 font-medium">
            Hello, How can we help you?
          </h2>
          <h1 className="text-4xl font-bold mt-2">Report Assistance</h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="flex flex-col">
            <label className="font-medium mb-1">Describe the situation</label>
            <textarea
              style={{ resize: "none" }}
              placeholder="Provide additional details."
              className="border rounded-md p-3 min-h-[100px] focus:outline-orange-400"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1">Location</label>
            <textarea
              style={{ resize: "none" }}
              placeholder="Provide additional details."
              className="border rounded-md p-3 min-h-[100px] focus:outline-orange-400"
              value={locationText}
              onChange={(e) => setLocationText(e.target.value)}
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="font-medium mb-1">
              When did the outage start?
            </label>
            <input
              type="text"
              placeholder="e.g., 2 hours ago"
              className="border rounded-md p-3 focus:outline-orange-400"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          <div className="md:col-span-2 flex flex-col md:flex-row items-start md:items-center justify-between mt-6 gap-4">
            <p className="text-lg font-medium text-orange-500">
              Do you need urgent assistance?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setUrgent("yes")}
                className={`w-full sm:w-auto px-4 py-2 rounded-full font-semibold ${
                  urgent === "yes"
                    ? "bg-red-500 text-white"
                    : "bg-red-100 text-red-500"
                }`}
              >
                Yes, I need.
              </button>
              <button
                type="button"
                onClick={() => setUrgent("no")}
                className={`w-full sm:w-auto px-4 py-2 rounded-full font-semibold ${
                  urgent === "no"
                    ? "bg-green-500 text-white"
                    : "bg-green-100 text-green-600"
                }`}
              >
                No.
              </button>
            </div>
          </div>

          <div className="md:col-span-2 flex justify-end mt-6">
            <button
              type="submit"
              className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded-xl"
            >
              Report
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Report;
