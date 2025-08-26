import React from "react";

const Groups = () => {
  const groups = ["Family", "Friends", "Hackerspace"];
  return (
    <div className="p-3">
      <h2 className="font-bold text-lg mb-3">Groups</h2>
      {groups.map((g, i) => (
        <div key={i} className="p-2 border-b">
          {g}
        </div>
      ))}
    </div>
  );
};

export default Groups;
