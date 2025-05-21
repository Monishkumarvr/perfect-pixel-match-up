
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { CalendarIcon, RefreshCw, Download, Filter, ChevronDown } from "lucide-react";

const ReportControls = () => {
  return (
    <div className="mb-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Summary Report</h1>
        <div className="flex items-center gap-2">
          <Switch id="detailed-view" />
          <label htmlFor="detailed-view" className="text-sm">View Detailed Report</label>
        </div>
      </div>
      
      <div className="flex items-center gap-3 mb-4">
        <div className="w-20">
          <Select className="h-9">
            <option>All</option>
          </Select>
        </div>
        <div className="w-28">
          <Select className="h-9">
            <option>Furnace1</option>
          </Select>
        </div>
        <div className="relative flex items-center w-48">
          <Input type="text" placeholder="18/12/2023 - 19/12/2023" className="pl-8 h-9 text-sm" />
          <CalendarIcon className="absolute left-2 h-4 w-4 text-gray-500" />
        </div>
        <Button className="bg-blue-900 hover:bg-blue-800 text-sm h-9 px-4 py-1">
          <Filter className="h-4 w-4 mr-1" /> Filter
        </Button>
      </div>
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-sm">Show</span>
          <div className="w-16">
            <Select className="h-9">
              <option>All</option>
            </Select>
          </div>
          <span className="text-sm">entries</span>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-sm">Search:</span>
          <Input type="text" className="w-52 h-9 text-sm" />
        </div>
      </div>
      
      <div className="flex gap-2 justify-end mb-4">
        <Button variant="outline" className="bg-blue-100 border-blue-200 text-blue-700 hover:bg-blue-200 text-sm h-9">
          <RefreshCw className="h-4 w-4 mr-1" /> Refresh
        </Button>
        <Button variant="outline" className="bg-green-100 border-green-200 text-green-700 hover:bg-green-200 text-sm h-9">
          <Download className="h-4 w-4 mr-1" /> Download as Excel
        </Button>
        <Button variant="outline" className="bg-red-100 border-red-200 text-red-700 hover:bg-red-200 text-sm h-9">
          <Download className="h-4 w-4 mr-1" /> Download as PDF
        </Button>
      </div>

      <div className="w-24">
        <Button variant="outline" className="bg-blue-900 text-white w-full flex justify-between items-center text-sm h-9 px-3">
          Filter <ChevronDown className="h-4 w-4 ml-1" />
        </Button>
      </div>
    </div>
  );
};

export default ReportControls;
