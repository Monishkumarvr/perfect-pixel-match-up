
import React from 'react';
import { Sidebar } from '@/components/layout/sidebar/Sidebar';
import { Header } from '@/components/layout/header/Header';
import ReportControls from "@/components/ReportControls";
import ReportTable from "@/components/ReportTable";

const Dashboard = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 overflow-hidden">
          <Header />
          <div className="border-b border-gray-200" />
          <div className="p-8">
            <div className="max-w-[1200px] mx-auto">
              <ReportControls />
              <ReportTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
