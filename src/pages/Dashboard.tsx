
import React from 'react';
import { Sidebar } from '@/components/layout/sidebar/Sidebar';
import { Header } from '@/components/layout/header/Header';
import ReportControls from "@/components/ReportControls";
import ReportTable from "@/components/ReportTable";

const Dashboard = () => {
  return (
    <div className="bg-white min-h-screen overflow-hidden">
      <div className="flex max-md:flex-col max-md:items-stretch">
        <Sidebar />
        <div className="flex-1">
          <div className="flex flex-col h-full">
            <Header />
            <div className="border-b border-gray-200" />
            <div className="p-6 overflow-auto">
              <div className="max-w-[1200px]">
                <ReportControls />
                <ReportTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
