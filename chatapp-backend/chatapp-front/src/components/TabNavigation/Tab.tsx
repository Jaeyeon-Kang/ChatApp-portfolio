import {FC} from "react";

const Tab: FC<TabProps> = ({label, isActive, onClick}) => {
	return (
		<button
			onClick={onClick}
			className={`px-4 py-2 rounded-lg font-medium ${isActive ? "bg-green-500 text-white" : "bg-white text-gray-600"}`}>
			{label}
		</button>
	);
};

export default Tab;
