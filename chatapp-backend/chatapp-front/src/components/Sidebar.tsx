const Sidebar = () => {
  return (
    <div className="w-72 px-8 py-16 bg-stone-900 text-stone-50 rounded">
      <h2 className="text-xl font-bold mb-4">Chats</h2>
      <ul>
        <li className="mb-2 p-2 bg-gray-700 rounded-lg">Room 1</li>
        <li className="mb-2 p-2 bg-gray-700 rounded-lg">Room 2</li>
        <li className="mb-2 p-2 bg-gray-700 rounded-lg">Room 3</li>
      </ul>
    </div>
  );
};

export default Sidebar;
