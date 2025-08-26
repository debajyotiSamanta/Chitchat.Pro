// src/Components/chatUI/MessageList.jsx
import React from 'react';
import { currentUser } from '../../data';

const MessageList = ({ messages, otherUser }) => {
  return (
    <div className="space-y-4">
      {messages.map((msg) => {
        const isMe = msg.sender === currentUser.id;
        return (
          <div
            key={msg.id}
            className={`flex items-end gap-2 ${
              isMe ? 'justify-end' : 'justify-start'
            }`}
          >
            {!isMe && (
              <img src={otherUser.avatar} alt={otherUser.name} className="w-8 h-8 rounded-full"/>
            )}
            <div className="flex flex-col max-w-lg">
              <div
                className={`px-4 py-3 rounded-2xl ${
                  isMe
                    ? 'bg-white text-black rounded-br-none shadow-md'
                    : 'bg-[#E5DEFF] text-black rounded-bl-none shadow-md'
                }`}
              >
                {/* FIX: Added break-words to wrap long text */}
                <p className="break-words">{msg.text}</p>
              </div>
              <span className={`text-xs text-gray-400 mt-1 ${isMe ? 'text-right' : 'text-left'}`}>
                {msg.time}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MessageList;