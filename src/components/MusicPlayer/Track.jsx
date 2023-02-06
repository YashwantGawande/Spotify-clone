import React from 'react';

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex-1 flex items-center justify-start">
    <div className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-16 w-16 mr-4`}>
      <img src={activeSong?.chart_items?.item?.header_image_thumbnail_url} alt="cover art" className="rounded-full" />
    </div>
    <div className="w-[50%]">
      <p className="truncate text-white font-bold text-lg">
        {activeSong?.chart_items?.item?.full_title ? activeSong?.chart_items?.item?.full_title : 'No active Song'}
      </p>
      <p className="truncate text-gray-300">
        {activeSong?.chart_items?.item?.stats?.title_with_featured ? activeSong?.chart_items?.item?.stats?.title_with_featured : 'No active Song'}
      </p>
    </div>
  </div>
);

export default Track;
