import React from 'react';

const UserCard = ({ data }) => {
  const isGroup = !!data.members; // Check if it's a group by looking for a 'members' property

  return (
    <div className="bg-white p-4">
      <div className="flex flex-col items-center text-center">
        <img src={data.avatar} alt={data.name} className="w-20 h-20 rounded-full mb-4" />
        <h2 className="text-xl font-bold">{data.name}</h2>
        <p className="text-sm text-gray-500">{isGroup ? 'Group' : `@${data.id}`}</p>
      </div>
      <div className="mt-6 space-y-4">
        {isGroup ? (
          <>
            <div>
              <label className="text-xs font-semibold text-gray-400">Description</label>
              <p className="text-md text-gray-800">{data.description}</p>
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-400">Created By</label>
              <p className="text-md text-gray-800">{data.createdBy}</p>
            </div>
             <div>
              <label className="text-xs font-semibold text-gray-400">Members</label>
              <p className="text-md text-green-500 font-bold">{data.members.length} Members</p>
            </div>
          </>
        ) : (
          <>
            <div>
              <label className="text-xs font-semibold text-gray-400">Email</label>
              <p className="text-md text-gray-800">{data.email}</p>
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-400">Status</label>
              <p className="text-md font-bold text-green-500">{data.status}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserCard;