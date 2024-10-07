import { FC } from "react";
import { TabProps } from "../../types/TabTypes";

const Tab: FC<TabProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium ${
        isActive ? "bg-green-500 text-white" : "bg-white text-gray-600"
      }`}
    >
      {label}
    </button>
  );
};

export default Tab;
