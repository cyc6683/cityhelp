import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useReportStore } from "../store/reportStore";
import { useState } from "react";

const Recent = () => {
  const deleteReport = useReportStore((state) => state.deleteReport);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const mockReports = [
    {
      title: "Electricity Outage - Block B",
      location: "21st Street, NY",
      time: "May 1, 2025, 12:33 PM",
      status: "pending",
    },
    {
      title: "Water Outage - District 3",
      location: "Lincoln Ave, NY",
      time: "March 21, 2025, 9:33 AM",
      status: "in-progress",
    },
    {
      title: "Resolved: Power restored",
      location: "7th Avenue, NY",
      time: "June 11, 2025, 4:12 PM",
      status: "resolved",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="bg-white/50 backdrop-blur-sm py-8 sm:py-12 md:py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-12">
              Recent Reports
            </h1>
            <p className="text-xs sm:text-base text-gray-600 mb-4 max-w-2xl mx-auto">
              We are working to resolve the issue as quickly as possible. We
              sincerely apologize for the inconvenience this has caused to our
              residents. We are currently addressing the reports in the order
              they were received. <br />
              <br />
              Please note that it may take approximately{" "}
              <strong className="text-black font-semibold">
                1 to 3 business days
              </strong>{" "}
              to fully resolve each request. <br />
              <br />
              Thank you for your patience and understanding.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto p-8">
        <div className="grid gap-4">
          {useReportStore((state) => state.reports).map((report, i) => (
            <div
              key={i}
              onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
              onDoubleClick={() => deleteReport(i)}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
            >
              <div className="w-full flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {report.description}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {report.coordinates?.address
                      ? report.coordinates.address
                          .split(",")
                          .slice(0, 2)
                          .join(",")
                      : report.coordinates
                      ? `${report.coordinates.lat.toFixed(
                          4
                        )}, ${report.coordinates.lng.toFixed(4)}`
                      : "No coordinates"}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{report.time}</p>
                </div>
                <span
                  className={`text-sm font-medium px-3 py-1 rounded-full ${
                    report.status === "submitted"
                      ? "bg-gray-100 text-gray-600"
                      : report.status === "pending"
                      ? "bg-red-100 text-red-600"
                      : report.status === "in-progress"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {report.status?.replace("-", " ")}
                </span>
              </div>
              {expandedIndex === i && (
                <div className="mt-4 text-sm text-gray-600 w-full">
                  <p>
                    <strong>Description:</strong> {report.description}
                  </p>
                  <p>
                    <strong>Details:</strong> {report.locationText}
                  </p>
                  <p>
                    <strong>Urgent:</strong> {report.urgent}
                  </p>
                </div>
              )}
            </div>
          ))}
          {mockReports.map((report, i) => (
            <div
              key={`mock-${i}`}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {report.title}
                </h3>
                <p className="text-sm text-gray-500">{report.location}</p>
                <p className="text-xs text-gray-400 mt-1">{report.time}</p>
              </div>
              <span
                className={`text-sm font-medium px-3 py-1 rounded-full ${
                  report.status === "pending"
                    ? "bg-red-100 text-red-600"
                    : report.status === "in-progress"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {report.status?.replace("-", " ")}
              </span>
            </div>
          ))}
        </div>
        <Link to="/upcomming" className="mt-10 flex justify-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <span className="text-indigo-600 font-semibold text-lg transition group-hover:underline">
              Planned Service Interruption
            </span>
            <span className="text-indigo-600 text-xl transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Recent;
