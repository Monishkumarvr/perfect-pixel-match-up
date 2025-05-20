import React from 'react';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { ContactInfo } from './ContactInfo';

export const Sidebar = () => {
  return (
    <div className="w-[16%] max-md:w-full max-md:ml-0">
      <div className="w-full">
        <div className="shadow-[-4px_0px_16px_0px_rgba(33,126,192,0.10)_inset] flex w-full flex-col items-stretch bg-[#E8F2F8] pt-3 pb-[508px] px-3.5 max-md:pb-[100px]">
          <Logo />
          <Navigation />
        </div>
        <ContactInfo />
      </div>
    </div>
  );
};
