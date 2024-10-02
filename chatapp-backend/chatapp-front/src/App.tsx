import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";

const App = () => {
	return (
		<div className='flex h-screen gap-8'>
			<Sidebar />
			<ChatWindow />
		</div>
	);
};

export default App;
