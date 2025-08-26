import React from "react";
import { FiBell, FiSettings } from "react-icons/fi";

const TopNav = ({ activeTab, setActiveTab, currentUser }) => {
  const tabs = ["Chat", "Contacts", "Groups"];

  return (
    <header className="flex items-center justify-between p-4 bg-white border-b shrink-0">
      {/* Left side: Tabs */}
      <div className="flex items-center gap-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-full text-md font-semibold transition
              ${activeTab === tab
                ? "bg-black text-white"
                : "bg-gray-100 text-black hover:bg-gray-200"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Right side: User Info & Icons */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          {/* FIX: Use img tag for avatar */}
          <img src={currentUser.avatar} alt={currentUser.name} className="w-10 h-10 rounded-full" />
          <span className="text-md font-medium">{currentUser.name}</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
            <FiBell className="text-xl" />
          </button>
          <button className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
            <FiSettings className="text-xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopNav;