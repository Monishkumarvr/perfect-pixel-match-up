
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavItemProps {
  icon: string;
  label: string;
  isActive?: boolean;
  isParent?: boolean;
  path?: string;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive, isParent, path, onClick }) => {
  const textColor = isActive ? 'text-[#1579BE]' : 'text-[#606060]';
  
  return (
    <div 
      className={`flex items-center gap-3 ${isParent ? '' : 'pl-4'} ${path ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      <img
        src={icon}
        className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
        alt={`${label} icon`}
      />
      <div className={`${textColor} self-stretch w-[100px] my-auto`}>
        {label}
      </div>
      {isParent && (
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad05a0df9257113a46a01d288df61466359c12a3?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
          alt="Expand icon"
        />
      )}
    </div>
  );
};

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  
  return (
    <div className="rounded shadow-[0px_0px_16px_0px_rgba(33,126,192,0.10)] flex mb-[-102px] items-stretch gap-3 text-[13px] text-[#1579BE] font-semibold bg-white mt-3 pr-2 py-[11px] max-md:mb-2.5">
      <div className="flex w-1 shrink-0 h-5 bg-[#1579BE] rounded-[0px_4px_4px_0px]" />
      <div>
        <NavItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/ef440509aacccadf60fcf1458c84aaf18a3b4cf9?placeholderIfAbsent=true" label="Melting" isParent />
        <div className="mt-5">
          <NavItem 
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/1449705c6102054ee9c93a144a2c20f88a6df4f6?placeholderIfAbsent=true" 
            label="Dashboard" 
            isActive={currentPath === '/dashboard'}
            path="/dashboard"
            onClick={() => navigate('/dashboard')}
          />
        </div>
        <div className="mt-5">
          <NavItem 
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/175c38a16d77fc0b5e78fc196944ce44f386857b?placeholderIfAbsent=true" 
            label="Video Feed" 
            isActive={currentPath === '/'}
            path="/"
            onClick={() => navigate('/')}
          />
        </div>
        <div className="mt-5">
          <NavItem 
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/b9632abacf4b78b309f3d4040f09f8a8d28dd2f7?placeholderIfAbsent=true" 
            label="Melting Line" 
          />
        </div>
      </div>
    </div>
  );
};
