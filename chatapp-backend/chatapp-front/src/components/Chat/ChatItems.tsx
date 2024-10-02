import ChatListItem from "./ChatListItem";
import {ChatData, ChatItemsProps} from "../../types/ChatTypes";

const chatData: ChatData = {
	Favourites: [
		{name: "Cody Fisher", lastMessage: "Haha oh man", time: "05:14 pm"},
		{name: "Jane Cooper", lastMessage: "Haha that's terrifying", time: "07:38 am"},
	],
	Friends: [
		{name: "Floyd Miles", lastMessage: "Perfect!", time: "11:49 pm"},
		{name: "Marvin McKinney", lastMessage: "This is amazing", time: "07:40 am"},
	],
	Groups: [
		{name: "Courtney Henry", lastMessage: "Aww", time: "08:20 pm"},
		{name: "Dianne Russell", lastMessage: "I'll be there in 20 min", time: "09:15 pm"},
	],
};

const ChatItems = ({activeTab}: ChatItemsProps) => {
	const chatItems = chatData[activeTab];

	const handleChatClick = (name: string) => {
		console.log(`${name} 채팅창 열기`);
	};

	return (
		<div>
			{chatItems.map((chat) => (
				<ChatListItem
					key={chat.name}
					name={chat.name}
					lastMessage={chat.lastMessage}
					time={chat.time}
					onClick={() => handleChatClick(chat.name)}
				/>
			))}
		</div>
	);
};

export default ChatItems;
