import React from 'react';
import { Sidebar } from '@/components/layout/sidebar/Sidebar';
import { Header } from '@/components/layout/header/Header';
import { VideoControls } from '@/components/video-feed/VideoControls';
import { VideoPlayer } from '@/components/video-feed/VideoPlayer';

const Index = () => {
  return (
    <div className="bg-white overflow-hidden">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <Sidebar />
        <div className="w-[84%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col items-stretch mt-3 max-md:max-w-full">
            <Header />
            <div className="border bg-[#EEE] shrink-0 h-px mt-[11px] border-[rgba(238,238,238,1)] border-solid max-md:max-w-full" />
            <VideoControls />
            <VideoPlayer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
