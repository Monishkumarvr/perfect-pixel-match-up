import React from 'react';

export const SearchBar = () => {
  return (
    <div className="justify-center items-stretch rounded border-[color:var(--Grey-Colors-EEEEEE---Secondary-Text---Dark-Mode,#EEE)] flex gap-[40px_72px] text-sm text-[#909090] font-normal whitespace-nowrap w-40 bg-white px-[11px] py-2.5 border-2 border-solid">
      <div className="text-[#909090]">Search</div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/11295f96fc0000930a22de829d512b6acf8e8d6c?placeholderIfAbsent=true"
        className="aspect-[1] object-contain w-5 shrink-0"
        alt="Search icon"
      />
    </div>
  );
};
