import TabNavigation from "./TabNavigation/TabNavigation";
import Favourites from "./TabNavigation/Favourites";
import Friends from "./TabNavigation/Friends";
import Groups from "./TabNavigation/Groups";
import {useState} from "react";
import SearchBar from "./SearchBar";

const Sidebar = () => {
	const [activeTab, setActiveTab] = useState("Favourites");

	const renderChatItems = () => {
		switch (activeTab) {
			case "Favourites":
				return <Favourites />;
			case "Friends":
				return <Friends />;
			case "Groups":
				return <Groups />;
			default:
				return null;
		}
	};

	return (
		<div className='relative h-screen p-4 bg-[#F5FAFC] shadow-lg min-w-[350px]'>
			<div className='flex items-center mb-4'>
				<h4 className='font-semibold text-gray-600'>User Name</h4>
			</div>

			<SearchBar />

			<TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
			<div className='mt-4'>{renderChatItems()}</div>
		</div>
	);
};

export default Sidebar;
