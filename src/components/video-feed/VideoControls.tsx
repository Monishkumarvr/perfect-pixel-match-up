import React from 'react';
import { SearchBar } from './SearchBar';
import { FilterBar } from './FilterBar';
import { StatusIndicator } from './StatusIndicator';

export const VideoControls = () => {
  return (
    <div className="items-center shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)] flex w-full flex-wrap bg-white px-[30px] py-4 max-md:max-w-full max-md:px-5">
      <div className="self-stretch flex min-w-60 gap-4 my-auto max-md:max-w-full">
        <SearchBar />
        <FilterBar />
      </div>
      <StatusIndicator />
    </div>
  );
};
