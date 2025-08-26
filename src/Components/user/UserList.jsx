import React from 'react';

const UserList = ({ items, onSelectChat, selectedChatId }) => {
  return (
    <div className="space-y-1">
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => onSelectChat(item.id)}
          className={`flex items-center p-3 rounded-2xl cursor-pointer transition-colors ${
            selectedChatId === item.id ? 'bg-purple-100' : 'hover:bg-gray-100'
          }`}
        >
          <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full mr-4" />
          <div className="flex-1 overflow-hidden">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-800">{item.name}</h3>
              <p className="text-xs text-gray-400">
                {item.members ? 'Group' : `@${item.id}`}
              </p>
            </div>
            <p className="text-sm text-gray-500 truncate">{item.lastMessage || 'No messages yet'}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;