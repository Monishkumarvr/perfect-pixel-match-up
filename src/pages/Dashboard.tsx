
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
        <div className="flex-1 ml-5 max-md:ml-0">
          <div className="flex flex-col h-full max-md:max-w-full">
            <Header />
            <div className="border bg-[#EEE] shrink-0 h-px mt-[11px] border-[rgba(238,238,238,1)]" />
            <div className="container px-4 py-6 mx-auto max-w-full overflow-x-auto">
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
