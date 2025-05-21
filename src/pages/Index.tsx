
import React from 'react';
import { Sidebar } from '@/components/layout/sidebar/Sidebar';
import { Header } from '@/components/layout/header/Header';
import { VideoControls } from '@/components/video-feed/VideoControls';
import { VideoPlayer } from '@/components/video-feed/VideoPlayer';
import { ProcessCompliance } from '@/components/video-feed/ProcessCompliance';

const Index = () => {
  return (
    <div className="bg-white overflow-hidden flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="p-4">
          <Header />
        </div>
        <div className="border-b border-gray-200" />
        <div className="flex-1 flex flex-col overflow-hidden">
          <VideoControls />
          <div className="relative flex-1 overflow-hidden">
            <VideoPlayer />
            <ProcessCompliance />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
