interface ChatListItemProps {
	name: string;
	lastMessage: string;
	time: string;
	onClick: () => void;
}

const ChatListItem: React.FC<ChatListItemProps> = ({name, lastMessage, time, onClick}) => {
	return (
		<div onClick={onClick} className='flex items-center justify-between p-4 cursor-pointer hover:bg-gray-200'>
			<div className='flex'>
				<div>
					<h4 className='font-bold'>{name}</h4>
					<p className='text-sm text-gray-500'>{lastMessage}</p>
				</div>
			</div>
			<span className='text-sm text-gray-400'>{time}</span>
		</div>
	);
};

export default ChatListItem;
