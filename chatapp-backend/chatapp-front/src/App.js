import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
const App = () => {
    return (_jsxs("div", { className: "h-screen my-8 flex gap-8", children: [_jsx(Sidebar, {}), _jsx(ChatWindow, {})] }));
};
export default App;
