import React, { useState, useEffect } from "react";
import TopNav from "../topNav/TopNav";
import LeftSidebar from "../sideBar/Sidebar";
import ChatWindow from "./ChatWindow";
import RightProfileSidebar from "./RightProfileSidebar";
import { users as initialUsers, messages as initialMessages, currentUser, groups as initialGroups } from "../../data";

const ChatLayout = () => {
  const [activeTab, setActiveTab] = useState("Chat");
  const [selectedChatId, setSelectedChatId] = useState("Subho_09");
  
  const [users, setUsers] = useState(initialUsers);
  const [groups, setGroups] = useState(initialGroups);
  const [messages, setMessages] = useState(initialMessages);

  // Combine users and groups into one lookup object
  const allChats = { ...users, ...groups };
  const selectedChat = allChats[selectedChatId];
  const selectedChatMessages = messages[selectedChatId] || [];

  const handleSendMessage = (text) => {
    if (!selectedChatId) return;

    const newMessage = {
      id: Date.now(),
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
      sender: currentUser.id,
    };
    
    // Update the messages state for the current chat
    setMessages(prevMessages => ({
      ...prevMessages,
      [selectedChatId]: [...(prevMessages[selectedChatId] || []), newMessage]
    }));

    // Update the last message for the user/group in the sidebar
    if (allChats[selectedChatId].members) { // It's a group
        setGroups(prev => ({ ...prev, [selectedChatId]: { ...prev[selectedChatId], lastMessage: `${currentUser.name}: ${text}` }}));
    } else { // It's a user
        setUsers(prev => ({ ...prev, [selectedChatId]: { ...prev[selectedChatId], lastMessage: text }}));
    }
  };
  
  // Determine which list to show in the sidebar based on the active tab
  let sidebarList = [];
  if (activeTab === 'Chat') {
    // Show users and groups that have messages
    sidebarList = Object.values({ ...users, ...groups }).filter(c => messages[c.id] && messages[c.id].length > 0);
  } else if (activeTab === 'Contacts') {
    sidebarList = Object.values(users);
  } else if (activeTab === 'Groups') {
    sidebarList = Object.values(groups);
  }

  // Auto-select the first item in the list if the current selection disappears
  useEffect(() => {
    const isSelectedVisible = sidebarList.some(item => item.id === selectedChatId);
    if (!isSelectedVisible && sidebarList.length > 0) {
      setSelectedChatId(sidebarList[0].id);
    } else if (sidebarList.length === 0) {
      setSelectedChatId(null);
    }
  }, [activeTab, sidebarList, selectedChatId]);


  return (
    <div className="flex flex-col h-screen bg-[#F7F7F7]">
      <TopNav 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          currentUser={currentUser} 
      />
      <div className="flex flex-1 overflow-hidden">
        <LeftSidebar
          items={sidebarList}
          onSelectChat={setSelectedChatId}
          selectedChatId={selectedChatId}
        />

        <main className="flex-1 flex flex-col">
          {selectedChat ? (
            <ChatWindow
              chat={selectedChat}
              messages={selectedChatMessages}
              onSendMessage={handleSendMessage}
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              Select a chat or contact to start messaging.
            </div>
          )}
        </main>

        {selectedChat && <RightProfileSidebar data={selectedChat} />}
      </div>
    </div>
  );
};

export default ChatLayout;