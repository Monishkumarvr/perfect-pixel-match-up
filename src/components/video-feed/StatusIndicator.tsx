import React from 'react';

export const StatusIndicator = () => {
  return (
    <div className="justify-center items-center rounded border border-[color:var(--Status-Colors-Success---2BA24C,#2BA24C)] bg-[rgba(43,162,76,0.10)] self-stretch flex min-h-10 gap-2.5 text-sm text-[#2BA24C] font-bold flex-1 shrink basis-[0%] my-auto px-2.5 py-[11px] border-solid">
      <div className="stroke-[1px] border bg-[rgba(43,162,76,0.70)] self-stretch flex w-[11px] shrink-0 h-[11px] stroke-[#2BA24C] my-auto rounded-[50%] border-[rgba(43,162,76,1)] border-solid" />
      <div className="text-[#2BA24C] self-stretch my-auto">
        Status : Live
      </div>
    </div>
  );
};
