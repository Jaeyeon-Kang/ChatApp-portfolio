export interface ChatListItemProps {
	name: string;
	lastMessage: string;
	time: string;
	onClick?: () => void;
}

export interface ChatData {
	Favourites: ChatListItemProps[];
	Friends: ChatListItemProps[];
	Groups: ChatListItemProps[];
}

export interface ChatItemsProps {
	activeTab: keyof ChatData;
}
