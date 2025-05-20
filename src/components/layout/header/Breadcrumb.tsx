import React from 'react';

export const Breadcrumb = () => {
  return (
    <div className="flex items-center gap-1 font-medium my-auto">
      <div className="text-[#909090] text-[13px] self-stretch my-auto">
        Melting
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/044fdd1ec38dc27cada31bd7e44cb9bd5ca0a35c?placeholderIfAbsent=true"
        className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
        alt="Breadcrumb separator"
      />
      <div className="text-[#303030] text-base self-stretch my-auto">
        Video Feed
      </div>
    </div>
  );
};
