import ChatListItem from "../ChatListItem";

const Groups = () => {
	const chatItems = [
		{name: "Courtney Henry", lastMessage: "Aww", time: "08:20 pm"},
		{name: "Dianne Russell", lastMessage: "I'll be there in 20 min", time: "09:15 pm"},
	];

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

export default Groups;
