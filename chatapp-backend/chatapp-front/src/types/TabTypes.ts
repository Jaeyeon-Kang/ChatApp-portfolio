import {ChatData} from "./ChatTypes";

export interface TabProps {
	label: string;
	isActive: boolean;
	onClick: () => void;
}

export interface TabNavigationProps {
	activeTab: keyof ChatData;
	setActiveTab: (tab: keyof ChatData) => void;
}
