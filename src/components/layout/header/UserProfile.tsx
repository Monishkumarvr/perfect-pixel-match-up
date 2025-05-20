import React from 'react';

export const UserProfile = () => {
  return (
    <div className="flex items-stretch gap-4">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/689835f5737954025e62fd66b1ac23f98fe9eace?placeholderIfAbsent=true"
        className="aspect-[1] object-contain w-10 shrink-0 rounded-[0px_0px_0px_0px]"
        alt="Notification icon"
      />
      <div className="flex items-stretch gap-2">
        <div className="text-white bg-[rgba(68,148,203,1)] text-base font-bold whitespace-nowrap text-center w-10 h-10 px-[7px] rounded-[30px] flex items-center justify-center">
          MK
        </div>
        <div className="flex flex-col items-stretch my-auto">
          <div className="text-[#303030] text-sm font-medium">
            Monish Kumar
          </div>
          <div className="text-[#606060] text-[10px] font-normal">
            NowPurchase
          </div>
        </div>
      </div>
    </div>
  );
};
