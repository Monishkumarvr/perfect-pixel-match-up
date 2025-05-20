import React from 'react';

export const Logo = () => {
  return (
    <div className="flex items-stretch gap-[22px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d56fecb4c610861b2f05fd21fe7dca6db03b383a?placeholderIfAbsent=true"
        className="aspect-[1] object-contain w-6 shrink-0 my-auto"
        alt="Logo icon"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0c9c45306a8f07205a6c54b0b3a37ad967edcb2?placeholderIfAbsent=true"
        className="aspect-[2] object-contain w-20 shrink-0"
        alt="Logo text"
      />
    </div>
  );
};
