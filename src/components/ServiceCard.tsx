// components/ServiceCard.tsx
import { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  icon: ReactNode;
  label: string;
  link: string;
};

const ServiceCard = ({ icon, label, link }: Props) => {
  return (
    <Link to={link}>
      <div className="bg-orange-400 w-40 h-44 rounded-xl flex flex-col items-center justify-center text-white text-center font-semibold shadow hover:scale-105 transition">
        <div className="text-3xl mb-2">{icon}</div>
        <p className="max-w-[120px] leading-tight break-words text-center">
          {label}
        </p>
      </div>
    </Link>
  );
};

export default ServiceCard;
