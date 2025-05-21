
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, X } from "lucide-react";

// Sample data based on the image
const reportData = [
  {
    id: "SW2023121800I",
    startTime: { date: "18-12-2023", time: "11:12:24" },
    totalEnergy: 0,
    vibroCharging: "1 Min 55 Secs",
    spectrometerCheck: true,
    atasCheck: true,
    chemicalCorrection: "15 Secs",
    pyrometerCheck: true,
    deslaging: true,
    tapping: "20 Secs",
    melting: "7 Mins 55 Secs",
    temperature: 0,
    weight: 0,
    endTime: { date: "18-12-2023", time: "11:20:38" },
    duration: "8 Mins 14 Secs"
  },
  {
    id: "SW2023121800Z",
    startTime: { date: "18-12-2023", time: "12:48:46" },
    totalEnergy: 0,
    vibroCharging: "3 Mins 29 Secs",
    spectrometerCheck: true,
    atasCheck: true,
    chemicalCorrection: "15 Secs",
    pyrometerCheck: true,
    deslaging: true,
    tapping: "15 Secs",
    melting: "8 Mins 29 Secs",
    temperature: 0,
    weight: 0,
    endTime: { date: "18-12-2023", time: "12:57:31" },
    duration: "8 Mins 45 Secs"
  },
  {
    id: "SW2023121800B",
    startTime: { date: "18-12-2023", time: "13:02:04" },
    totalEnergy: 0,
    vibroCharging: "53 Secs",
    spectrometerCheck: true,
    atasCheck: true,
    chemicalCorrection: "15 Secs",
    pyrometerCheck: true,
    deslaging: true,
    tapping: "21 Secs",
    melting: "4 Mins 19 Secs",
    temperature: 0,
    weight: 0,
    endTime: { date: "18-12-2023", time: "13:06:44" },
    duration: "4 Mins 40 Secs"
  },
  {
    id: "SW2023121800L",
    startTime: { date: "18-12-2023", time: "13:08:18" },
    totalEnergy: 0,
    vibroCharging: "1 Min 31 Secs",
    spectrometerCheck: true,
    atasCheck: true,
    chemicalCorrection: "16 Secs",
    pyrometerCheck: true,
    deslaging: true,
    tapping: "19 Secs",
    melting: "7 Mins 8 Secs",
    temperature: 0,
    weight: 0,
    endTime: { date: "18-12-2023", time: "13:15:44" },
    duration: "7 Mins 26 Secs"
  },
  {
    id: "SW2023121800S",
    startTime: { date: "18-12-2023", time: "13:16:37" },
    totalEnergy: 0,
    vibroCharging: "2 Mins 38 Secs",
    spectrometerCheck: true,
    atasCheck: true,
    chemicalCorrection: "15 Secs",
    pyrometerCheck: true,
    deslaging: true,
    tapping: "1 Min 7 Secs",
    melting: "11 Mins 47 Secs",
    temperature: 0,
    weight: 0,
    endTime: { date: "18-12-2023", time: "13:29:32" },
    duration: "12 Mins 55 Secs"
  },
  {
    id: "SW2023121800X",
    startTime: { date: "18-12-2023", time: "14:05:21" },
    totalEnergy: 0,
    vibroCharging: "2 Mins 10 Secs",
    spectrometerCheck: true,
    atasCheck: false,
    chemicalCorrection: "20 Secs",
    pyrometerCheck: true,
    deslaging: true,
    tapping: "18 Secs",
    melting: "8 Mins 12 Secs",
    temperature: 0,
    weight: 0,
    endTime: { date: "18-12-2023", time: "14:14:01" },
    duration: "8 Mins 40 Secs"
  }
];

const ReportTable = () => {
  return (
    <div className="border border-gray-200 rounded-md overflow-hidden w-full">
      <div className="overflow-x-auto">
        <Table className="w-full">
          <TableHeader>
            <TableRow className="bg-blue-900 text-white">
              <TableHead className="text-white font-semibold border-r border-blue-800 py-2 px-3 text-center">Cycle No</TableHead>
              <TableHead className="text-white font-semibold border-r border-blue-800 py-2 px-3 text-center">Start Time</TableHead>
              <TableHead className="text-white font-semibold border-r border-blue-800 py-2 px-3 text-center">Total Energy KWh</TableHead>
              <TableHead className="text-white font-semibold border-r border-blue-800 py-2 px-3 text-center">Vibro Charging</TableHead>
              <TableHead className="text-white font-semibold border-r border-blue-800 py-2 px-3 text-center">Spectrometer Check</TableHead>
              <TableHead className="text-white font-semibold border-r border-blue-800 py-2 px-3 text-center">ATAS Check</TableHead>
              <TableHead className="text-white font-semibold border-r border-blue-800 py-2 px-3 text-center">Chemical Correction</TableHead>
              <TableHead className="text-white font-semibold border-r border-blue-800 py-2 px-3 text-center">Pyrometer Check</TableHead>
              <TableHead className="text-white font-semibold border-r border-blue-800 py-2 px-3 text-center">Deslaging</TableHead>
              <TableHead className="text-white font-semibold border-r border-blue-800 py-2 px-3 text-center">Tapping</TableHead>
              <TableHead className="text-white font-semibold border-r border-blue-800 py-2 px-3 text-center">Melting</TableHead>
              <TableHead className="text-white font-semibold border-r border-blue-800 py-2 px-3 text-center">Temperature °C</TableHead>
              <TableHead className="text-white font-semibold border-r border-blue-800 py-2 px-3 text-center">Weight Kg</TableHead>
              <TableHead className="text-white font-semibold border-r border-blue-800 py-2 px-3 text-center">End Time</TableHead>
              <TableHead className="text-white font-semibold py-2 px-3 text-center">Duration</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reportData.map((row, index) => (
              <TableRow key={row.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <TableCell className="font-medium border-r py-2 px-3">{row.id}</TableCell>
                <TableCell className="border-r text-center py-2 px-3">
                  <div>{row.startTime.date}</div>
                  <div>{row.startTime.time}</div>
                </TableCell>
                <TableCell className="border-r text-center py-2 px-3">{row.totalEnergy}</TableCell>
                <TableCell className="border-r text-center py-2 px-3">{row.vibroCharging}</TableCell>
                <TableCell className="border-r text-center py-2 px-3">
                  {row.spectrometerCheck && <CheckCircle className="h-5 w-5 mx-auto text-green-500" />}
                </TableCell>
                <TableCell className="border-r text-center py-2 px-3">
                  {row.atasCheck ? (
                    <CheckCircle className="h-5 w-5 mx-auto text-green-500" />
                  ) : (
                    <X className="h-5 w-5 mx-auto text-red-500" />
                  )}
                </TableCell>
                <TableCell className="border-r text-center py-2 px-3">{row.chemicalCorrection}</TableCell>
                <TableCell className="border-r text-center py-2 px-3">
                  {row.pyrometerCheck && <CheckCircle className="h-5 w-5 mx-auto text-green-500" />}
                </TableCell>
                <TableCell className="border-r text-center py-2 px-3">
                  {row.deslaging && <CheckCircle className="h-5 w-5 mx-auto text-green-500" />}
                </TableCell>
                <TableCell className="border-r text-center py-2 px-3">{row.tapping}</TableCell>
                <TableCell className="border-r text-center py-2 px-3">{row.melting}</TableCell>
                <TableCell className="border-r text-center py-2 px-3">{row.temperature}</TableCell>
                <TableCell className="border-r text-center py-2 px-3">{row.weight}</TableCell>
                <TableCell className="border-r text-center py-2 px-3">
                  <div>{row.endTime.date}</div>
                  <div>{row.endTime.time}</div>
                </TableCell>
                <TableCell className="text-center py-2 px-3">{row.duration}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ReportTable;
