const SearchBar = () => {
	return (
		<div className='relative mb-4'>
			<input
				type='text'
				placeholder='Search or start a new chat'
				className='w-full p-2 pl-10 text-gray-600 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500'
			/>
		</div>
	);
};

export default SearchBar;
