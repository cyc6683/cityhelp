// components/StatusBadge.tsx
type StatusBadgeProps = {
  status: "pending" | "in-progress" | "resolved";
};

const statusStyle = {
  pending: "bg-yellow-100 text-yellow-700",
  "in-progress": "bg-blue-100 text-blue-700",
  resolved: "bg-green-100 text-green-700",
};

const StatusBadge = ({ status }: StatusBadgeProps) => (
  <span
    className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyle[status]}`}
  >
    {status.replace("-", " ")}
  </span>
);

export default StatusBadge;
