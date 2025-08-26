import React from 'react';
import { FiPlus } from "react-icons/fi";
import UserList from '../user/UserList';

const Sidebar = ({ items, onSelectChat, selectedChatId }) => {
  return (
    <aside className="w-[380px] bg-white border-r flex flex-col p-4 relative shrink-0">
      <div className="mb-4">
        <input 
          type="text" 
          placeholder="Search"
          className="w-full p-3 rounded-full bg-[#F7F7F7] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>
      
      <div className="flex-1 overflow-y-auto pr-2">
        <UserList 
          items={items} 
          onSelectChat={onSelectChat} 
          selectedChatId={selectedChatId}
        />
      </div>
      
      <button className="absolute bottom-6 right-6 w-14 h-14 bg-black rounded-full flex items-center justify-center text-white shadow-lg hover:bg-gray-800">
          <FiPlus size={24} />
      </button>
    </aside>
  );
};

export default Sidebar;