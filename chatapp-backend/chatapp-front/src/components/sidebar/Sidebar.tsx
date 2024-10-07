import TabNavigation from "../tabnavigation/TabNavigation";
import ChatItems from "../chat/ChatItems";
import { useState } from "react";
import SearchBar from "../shared/SearchBar";
import { ChatData } from "../../types/ChatTypes";
import MenuButton from "./MenuButton";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState<keyof ChatData>("Favourites");

  return (
    <div className="relative h-screen pt-12 pl-4 pr-4 bg-[#F5FAFC] shadow-lg min-w-[350px]">
      <div className="absolute top-0 left-0 p-3 flex items-center">
        <MenuButton />
      </div>
      <SearchBar />
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="mt-4">
        <ChatItems activeTab={activeTab} />
      </div>
    </div>
  );
};

export default Sidebar;
