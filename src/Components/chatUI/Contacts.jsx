import React from "react";

const Contacts = () => {
  const contacts = ["David", "Eve", "Frank"];
  return (
    <div className="p-3">
      <h2 className="font-bold text-lg mb-3">Contacts</h2>
      {contacts.map((c, i) => (
        <div key={i} className="p-2 border-b">
          {c}
        </div>
      ))}
    </div>
  );
};

export default Contacts;
