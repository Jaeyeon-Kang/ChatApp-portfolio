import Sidebar from "./components/sidebar/Sidebar";
import ChatWindow from "./components/chat/ChatWindow";

const App = () => {
  return (
    <div className="flex h-screen gap-8">
      <Sidebar />
      <ChatWindow />
    </div>
  );
};

export default App;
