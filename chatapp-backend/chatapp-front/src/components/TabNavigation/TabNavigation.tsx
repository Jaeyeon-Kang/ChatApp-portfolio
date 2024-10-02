import Tab from "./Tab";

interface TabNavigationProps {
	activeTab: string;
	setActiveTab: (tab: string) => void;
}

const TabNavigation = ({activeTab, setActiveTab}: TabNavigationProps) => {
	return (
		<div className='flex'>
			<Tab label='Favourites' isActive={activeTab === "Favourites"} onClick={() => setActiveTab("Favourites")} />
			<Tab label='Friends' isActive={activeTab === "Friends"} onClick={() => setActiveTab("Friends")} />
			<Tab label='Groups' isActive={activeTab === "Groups"} onClick={() => setActiveTab("Groups")} />
		</div>
	);
};

export default TabNavigation;
