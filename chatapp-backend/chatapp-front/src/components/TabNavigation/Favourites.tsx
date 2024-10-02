import ChatListItem from "../ChatListItem";

const Favourites = () => {
	const chatItems = [
		{name: "Cody Fisher", lastMessage: "Haha oh man", time: "05:14 pm"},
		{name: "Jane Cooper", lastMessage: "Haha that's terrifying", time: "07:38 am"},
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

export default Favourites;
