import React from 'react';

export const FilterBar = () => {
  return (
    <div className="items-center rounded flex min-w-60 gap-2.5 text-xs text-[#606060] font-medium bg-[#EEE] px-2.5 py-0.5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9695245f756705d30b73c31e69ba33f65a11f432?placeholderIfAbsent=true"
        className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
        alt="Filter icon"
      />
      <div className="self-stretch flex gap-0.5 my-auto">
        <div className="rounded w-[127px]">
          <div className="items-center rounded flex gap-2 bg-white px-2 py-2.5">
            <div className="text-[#606060] self-stretch my-auto">
              Melting Line - 1
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/58fc77934a90d53c7b2601a98c8e10151ce37f4b?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
              alt="Dropdown icon"
            />
          </div>
        </div>
        <div className="rounded whitespace-nowrap w-[74px]">
          <div className="items-center rounded flex gap-2 bg-white px-2 py-2.5">
            <div className="text-[#606060] self-stretch my-auto">
              Today
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/58fc77934a90d53c7b2601a98c8e10151ce37f4b?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
              alt="Dropdown icon"
            />
          </div>
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/319b29dede8426c575be4dda95d5444d424bc301?placeholderIfAbsent=true"
        className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
        alt="More filters"
      />
    </div>
  );
};
