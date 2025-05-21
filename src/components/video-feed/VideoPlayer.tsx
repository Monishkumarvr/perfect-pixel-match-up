
import React from 'react';

export const VideoPlayer = () => {
  return (
    <div className="w-full h-full relative">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/af448b8972b6730da1c744daf96934bb8811f901?placeholderIfAbsent=true"
        className="w-full h-full object-cover"
        alt="Video feed"
      />
      
      {/* Area indicators */}
      <div className="absolute top-10 right-8 text-yellow-400 font-bold">
        <div className="border-2 border-yellow-400 w-64 h-40 mb-2 flex items-center justify-center">
          Furnace Area
        </div>
        <div className="border-2 border-yellow-400 w-64 h-40 flex items-center justify-center">
          Tapping
        </div>
      </div>

      {/* Timestamp overlay */}
      <div className="absolute top-10 left-10 bg-black bg-opacity-50 text-white p-2 text-lg font-mono">
        01-14-2025 Tue 14:43:02
      </div>
    </div>
  );
};
