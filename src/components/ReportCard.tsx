// components/ReportCard.tsx
import StatusBadge from "./StatusBadge";

type ReportProps = {
  title: string;
  location: string;
  time: string;
  status: "pending" | "in-progress" | "resolved";
};

const ReportCard = ({ title, location, time, status }: ReportProps) => {
  return (
    <div className="border p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <StatusBadge status={status} />
      </div>
      <p className="text-sm text-gray-600">{location}</p>
      <p className="text-xs text-gray-400 mt-1">{time}</p>
    </div>
  );
};

export default ReportCard;
