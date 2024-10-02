import {TabNavigationProps} from "../../types/TabTypes";

const TabNavigation = ({activeTab, setActiveTab}: TabNavigationProps) => {
	return (
		<div className='flex space-x-2'>
			<button
				onClick={() => setActiveTab("Favourites")}
				className={`px-4 py-2 rounded-lg font-medium ${
					activeTab === "Favourites" ? "bg-green-500 text-white" : "bg-white text-gray-600"
				}`}>
				Favourites
			</button>
			<button
				onClick={() => setActiveTab("Friends")}
				className={`px-4 py-2 rounded-lg font-medium ${
					activeTab === "Friends" ? "bg-green-500 text-white" : "bg-white text-gray-600"
				}`}>
				Friends
			</button>
			<button
				onClick={() => setActiveTab("Groups")}
				className={`px-4 py-2 rounded-lg font-medium ${
					activeTab === "Groups" ? "bg-green-500 text-white" : "bg-white text-gray-600"
				}`}>
				Groups
			</button>
		</div>
	);
};

export default TabNavigation;
