import React from 'react';
import { Breadcrumb } from './Breadcrumb';
import { UserProfile } from './UserProfile';

export const Header = () => {
  return (
    <div className="self-center flex w-full max-w-[1010px] items-stretch gap-5 flex-wrap justify-between max-md:max-w-full">
      <Breadcrumb />
      <UserProfile />
    </div>
  );
};
