import TabNavigation from "./TabNavigation/TabNavigation";
import Favourites from "./TabNavigation/Favourites";
import Friends from "./TabNavigation/Friends";
import Groups from "./TabNavigation/Groups";
import {useState} from "react";

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
		<div className='h-screen p-4 bg-white shadow-lg w-72'>
			<TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
			<div className='mt-4'>{renderChatItems()}</div>
		</div>
	);
};

export default Sidebar;
