
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";
import { CalendarIcon, RefreshCw, Download, Filter, ChevronDown } from "lucide-react";

const ReportControls = () => {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-semibold mb-6">Summary Report</h1>
      
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <div className="flex-shrink-0">
          <Select>
            <SelectTrigger className="w-24 h-10 bg-white border-gray-200">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex-shrink-0">
          <Select>
            <SelectTrigger className="w-32 h-10 bg-white border-gray-200">
              <SelectValue placeholder="Furnace1" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="furnace1">Furnace1</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="relative flex-shrink-0">
          <Input type="text" placeholder="18/12/2023 - 19/12/2023" className="pl-10 h-10 w-64 border-gray-200" />
          <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
        </div>
        
        <Button className="bg-blue-800 hover:bg-blue-700 h-10 px-6">
          <Filter className="h-5 w-5 mr-2" /> Filter
        </Button>
      </div>
      
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <span>Show</span>
          <div className="w-20">
            <Select>
              <SelectTrigger className="h-10 border-gray-200">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <span>entries</span>
        </div>
        
        <div className="flex items-center gap-2">
          <span>Search:</span>
          <Input type="text" className="w-64 h-10 border-gray-200" />
        </div>
      </div>
      
      <div className="flex gap-3 justify-end mb-6">
        <Button variant="outline" className="bg-blue-50 border-blue-100 text-blue-700 hover:bg-blue-100 h-10">
          <RefreshCw className="h-5 w-5 mr-2" /> Refresh
        </Button>
        <Button variant="outline" className="bg-green-50 border-green-100 text-green-700 hover:bg-green-100 h-10">
          <Download className="h-5 w-5 mr-2" /> Download as Excel
        </Button>
      </div>

      <div className="mb-2">
        <Button variant="default" className="bg-blue-800 hover:bg-blue-700 text-white flex gap-2 h-10 px-6">
          Filter <ChevronDown className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ReportControls;
