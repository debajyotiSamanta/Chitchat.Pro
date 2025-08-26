import React from 'react';
import UserCard from '../user/UserCard';
import ImageSection from './ImageSection';
import VideoSection from './VideoSection';

const RightProfileSidebar = ({ data }) => {
  if (!data) return null;

  return (
    <aside className="w-[380px] bg-white border-l p-6 flex flex-col gap-6 overflow-y-auto shrink-0">
      <UserCard data={data} />
      <VideoSection />
      <ImageSection />
    </aside>
  );
};

export default RightProfileSidebar;