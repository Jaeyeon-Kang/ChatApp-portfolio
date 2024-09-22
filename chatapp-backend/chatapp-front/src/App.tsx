import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";

const App = () => {
  return (
    <div className="h-screen my-8 flex gap-8">
      <Sidebar />
      <ChatWindow />
    </div>
  );
};

export default App;
