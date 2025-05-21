
import React from 'react';

export const VideoControls = () => {
  return (
    <div className="bg-white p-4 shadow-md flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search" 
            className="pl-10 pr-4 py-2 border-2 border-gray-200 rounded-md w-60"
          />
          <svg className="w-5 h-5 absolute right-3 top-2.5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        
        <div className="flex items-center gap-2 bg-gray-100 p-1.5 rounded-md">
          <svg className="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          
          <div className="flex gap-1">
            <div className="relative">
              <button className="flex items-center gap-2 bg-white px-3 py-2 rounded text-sm text-gray-600 border border-gray-300">
                Melting Line - 1
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            <div className="relative">
              <button className="flex items-center gap-2 bg-white px-3 py-2 rounded text-sm text-gray-600 border border-gray-300">
                Today
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
          
          <button className="p-1 hover:bg-gray-200 rounded">
            <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="flex items-center gap-2 bg-green-50 text-green-600 border border-green-200 py-2 px-4 rounded-md">
        <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
        <span className="font-medium">Status : Live</span>
      </div>
    </div>
  );
};
