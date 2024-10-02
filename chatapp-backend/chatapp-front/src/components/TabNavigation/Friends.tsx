import ChatListItem from "../ChatListItem";

const Friends = () => {
	const chatItems = [
		{name: "Floyd Miles", lastMessage: "Perfect!", time: "11:49 pm"},
		{name: "Marvin McKinney", lastMessage: "This is amazing", time: "07:40 am"},
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

export default Friends;
