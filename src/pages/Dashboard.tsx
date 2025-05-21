
import React from 'react';
import { Sidebar } from '@/components/layout/sidebar/Sidebar';
import { Header } from '@/components/layout/header/Header';
import ReportControls from "@/components/ReportControls";
import ReportTable from "@/components/ReportTable";

const Dashboard = () => {
  return (
    <div className="bg-white flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="p-4">
          <Header />
        </div>
        <div className="border-b border-gray-200" />
        <div className="p-6 flex-1 overflow-auto">
          <div className="max-w-[1200px] mx-auto">
            <ReportControls />
            <ReportTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
