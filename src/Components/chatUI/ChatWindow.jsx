import React from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const ChatWindow = ({ chat, messages, onSendMessage }) => {
  return (
    <div className="flex flex-col h-full bg-white rounded-lg m-4 shadow-sm">
      {/* Chat Header */}
      <div className="flex items-center p-4 border-b shrink-0">
        <img src={chat.avatar} alt={chat.name} className="w-10 h-10 rounded-full mr-4" />
        <div>
          <h2 className="font-semibold text-lg">{chat.name}</h2>
          <p className="text-sm text-gray-500">
            {/* Display user ID or group description */}
            {chat.members ? `${chat.members.length} members` : `@${chat.id}`}
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6">
        <MessageList messages={messages} otherUser={chat} />
      </div>

      {/* FIX: Wrapped MessageInput in a div with border and padding */}
      <div className="p-4 border-t">
        <div className="bg-gray-100 rounded-xl p-2">
            <MessageInput onSend={onSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;