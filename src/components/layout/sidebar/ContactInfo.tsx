import React from 'react';

export const ContactInfo = () => {
  return (
    <>
      <div className="shadow-[-4px_0px_16px_0px_rgba(33,126,192,0.10)_inset] flex flex-col items-stretch justify-center bg-white py-2">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e98023879feb71c2e60171f2879eadfd922d660c?placeholderIfAbsent=true"
          className="aspect-[8.33] object-contain w-[200px]"
          alt="Contact banner"
        />
      </div>
      <div className="shadow-[-4px_0px_16px_0px_rgba(33,126,192,0.10)_inset] flex items-center gap-2 text-[#606060] font-medium bg-[#E8F2F8] p-3">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c19093f2a9efadeed6ec17e0f0856e4b355b6998?placeholderIfAbsent=true"
          className="aspect-[3] object-contain w-[54px] self-stretch shrink-0 my-auto"
          alt="Contact icon"
        />
        <div className="self-stretch flex w-px shrink-0 h-5 bg-[#606060] my-auto rounded-sm" />
        <div className="self-stretch">
          <div className="text-[#606060] text-xs max-md:mr-0.5">
            +91 798008 78844
          </div>
          <div className="text-[#606060] text-[8px] underline decoration-solid">
            foundry@nowpurchase.com
          </div>
        </div>
      </div>
    </>
  );
};
