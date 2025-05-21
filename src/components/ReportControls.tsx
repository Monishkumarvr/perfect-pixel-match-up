
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { CalendarIcon, RefreshCw, Download } from "lucide-react";

const ReportControls = () => {
  return (
    <div className="space-y-4 mb-4">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h1 className="text-lg font-semibold">Summary Report</h1>
        <div className="flex items-center gap-2">
          <Switch id="detailed-view" />
          <label htmlFor="detailed-view" className="text-sm">View Detailed Report</label>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2">
        <div className="w-24 md:w-32">
          <Select>
            <option>All</option>
          </Select>
        </div>
        <div className="w-28 md:w-36">
          <Select>
            <option>Furnace1</option>
          </Select>
        </div>
        <div className="relative flex items-center w-48 md:w-64">
          <Input type="text" placeholder="18/12/2023 - 19/12/2023" className="pl-8 text-sm" />
          <CalendarIcon className="absolute left-2 h-4 w-4 text-gray-500" />
        </div>
        <Button className="bg-blue-900 hover:bg-blue-800 text-sm">Filter</Button>
      </div>
      
      <div className="flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <span className="text-xs md:text-sm">Show</span>
          <div className="w-16 md:w-24">
            <Select>
              <option>All</option>
            </Select>
          </div>
          <span className="text-xs md:text-sm">entries</span>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-xs md:text-sm">Search:</span>
          <Input type="text" className="w-32 md:w-56 text-sm" />
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" className="bg-blue-100 border-blue-200 text-blue-700 hover:bg-blue-200 text-xs md:text-sm py-1 h-8">
            <RefreshCw className="h-3 w-3 mr-1" /> Refresh
          </Button>
          <Button variant="outline" className="bg-green-100 border-green-200 text-green-700 hover:bg-green-200 text-xs md:text-sm py-1 h-8">
            <Download className="h-3 w-3 mr-1" /> Download as Excel
          </Button>
          <Button variant="outline" className="bg-red-100 border-red-200 text-red-700 hover:bg-red-200 text-xs md:text-sm py-1 h-8">
            <Download className="h-3 w-3 mr-1" /> Download as PDF
          </Button>
        </div>
      </div>

      <div className="w-28 md:w-32">
        <Button variant="outline" className="bg-blue-900 text-white w-full flex justify-center items-center text-xs md:text-sm py-1 h-8">
          Filter <span className="ml-1">▼</span>
        </Button>
      </div>
    </div>
  );
};

export default ReportControls;
