import TabNavigation from "./TabNavigation/TabNavigation";
import ChatItems from "./Chat/ChatItems";
import {useState} from "react";
import SearchBar from "./shared/SearchBar";
import {ChatData} from "../types/ChatTypes";

const Sidebar = () => {
	const [activeTab, setActiveTab] = useState<keyof ChatData>("Favourites");

	return (
		<div className='relative h-screen p-4 bg-[#F5FAFC] shadow-lg min-w-[350px]'>
			<SearchBar />
			<TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
			<div className='mt-4'>
				<ChatItems activeTab={activeTab} />
			</div>
		</div>
	);
};

export default Sidebar;
