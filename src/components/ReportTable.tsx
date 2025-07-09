import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, X } from "lucide-react";

// Data based on the heat cycle
const reportData = [
  {
    id: "SW2025011701A",
    startTime: { date: "18-01-2025", time: "08:21:52" },
    totalEnergy: 0,
    vibroCharging: "1 Min 27 Secs",
    spectrometerCheck: true,
    atasCheck: false,
    chemicalCorrection: "15 Secs",
    pyrometerCheck: true,
    deslaging: "1 Min 58 Secs",
    tapping: "1 Min 3 Secs",
    melting: "49 Min 52 Secs",
    temperature: 0,
    weight: 0,
    endTime: { date: "18-01-2025", time: "09:15:27" },
    duration: "53 Mins 35 Secs"
  },
  {
    id: "SW2025011702A",
    startTime: { date: "19-01-2025", time: "08:33:21" },
    totalEnergy: 0,
    vibroCharging: "1 Min 51 Secs",
    spectrometerCheck: true,
    atasCheck: false,
    chemicalCorrection: "15 Secs",
    pyrometerCheck: true,
    deslaging: "1 Min 2 Secs",
    tapping: "1 Min 30 Secs",
    melting: "10 Min 39 Secs",
    temperature: 0,
    weight: 0,
    endTime: { date: "19-01-2025", time: "08:48:38" },
    duration: "15 Mins 17 Secs"
  },
  {
    id: "SW2025011703A",
    startTime: { date: "20-01-2025", time: "06:12:11" },
    totalEnergy: 0,
    vibroCharging: "1 Min 37 Secs",
    spectrometerCheck: true,
    atasCheck: false,
    chemicalCorrection: "15 Secs",
    pyrometerCheck: true,
    deslaging: "59 Secs",
    tapping: "1 Min 51 Secs",
    melting: "14 Min 13 Secs",
    temperature: 0,
    weight: 0,
    endTime: { date: "20-01-2025", time: "06:30:36" },
    duration: "18 Mins 25 Secs"
  },
  {
    id: "SW2025011704A",
    startTime: { date: "21-01-2025", time: "08:40:50" },
    totalEnergy: 0,
    vibroCharging: "2 Min 4 Secs",
    spectrometerCheck: true,
    atasCheck: false,
    chemicalCorrection: "15 Secs",
    pyrometerCheck: true,
    deslaging: "59 Secs",
    tapping: "1 Min 25 Secs",
    melting: "27 Min 45 Secs",
    temperature: 0,
    weight: 0,
    endTime: { date: "21-01-2025", time: "09:13:18" },
    duration: "32 Mins 28 Secs"
  },
  {
    id: "SW2025011705A",
    startTime: { date: "22-01-2025", time: "09:26:38" },
    totalEnergy: 0,
    vibroCharging: "1 Min 4 Secs",
    spectrometerCheck: true,
    atasCheck: false,
    chemicalCorrection: "15 Secs",
    pyrometerCheck: true,
    deslaging: "1 Min 41 Secs",
    tapping: "1 Min 15 Secs",
    melting: "44 Min 5 Secs",
    temperature: 0,
    weight: 0,
    endTime: { date: "22-01-2025", time: "10:14:43" },
    duration: "48 Mins 5 Secs"
  },
  {
    id: "SW2025011600A",
    startTime: { date: "16-01-2025", time: "06:34:46" },
    totalEnergy: 0,
    vibroCharging: "31 Secs",
    spectrometerCheck: true,
    atasCheck: true,
    chemicalCorrection: "15 Secs",
    pyrometerCheck: true,
    deslaging: true,
    tapping: "1 Min 29 Secs",
    melting: "51 Mins 42 Secs",
    temperature: 0,
    weight: 0,
    endTime: { date: "16-01-2025", time: "07:26:28" },
    duration: "51 Mins 42 Secs"
  },
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
    <div className="border border-gray-200 rounded-md overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-blue-800 text-white">
              <TableHead className="text-white font-medium border-r border-blue-700 py-3 px-4 text-center">Cycle No</TableHead>
              <TableHead className="text-white font-medium border-r border-blue-700 py-3 px-4 text-center">Start Time</TableHead>
              <TableHead className="text-white font-medium border-r border-blue-700 py-3 px-4 text-center">Total Energy KWh</TableHead>
              <TableHead className="text-white font-medium border-r border-blue-700 py-3 px-4 text-center">Vibro Charging</TableHead>
              <TableHead className="text-white font-medium border-r border-blue-700 py-3 px-4 text-center">Spectrometer Check</TableHead>
              <TableHead className="text-white font-medium border-r border-blue-700 py-3 px-4 text-center">ATAS Check</TableHead>
              <TableHead className="text-white font-medium border-r border-blue-700 py-3 px-4 text-center">Chemical Correction</TableHead>
              <TableHead className="text-white font-medium border-r border-blue-700 py-3 px-4 text-center">Pyrometer Check</TableHead>
              <TableHead className="text-white font-medium border-r border-blue-700 py-3 px-4 text-center">Deslaging</TableHead>
              <TableHead className="text-white font-medium border-r border-blue-700 py-3 px-4 text-center">Tapping</TableHead>
              <TableHead className="text-white font-medium border-r border-blue-700 py-3 px-4 text-center">Melting</TableHead>
              <TableHead className="text-white font-medium border-r border-blue-700 py-3 px-4 text-center">Temperature °C</TableHead>
              <TableHead className="text-white font-medium py-3 px-4 text-center">Weight Kg</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reportData.map((row, index) => (
              <TableRow key={row.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <TableCell className="font-medium border-r py-3 px-4">{row.id}</TableCell>
                <TableCell className="border-r text-center py-3 px-4">
                  <div>{row.startTime.date}</div>
                  <div>{row.startTime.time}</div>
                </TableCell>
                <TableCell className="border-r text-center py-3 px-4">{row.totalEnergy}</TableCell>
                <TableCell className="border-r text-center py-3 px-4">{row.vibroCharging}</TableCell>
                <TableCell className="border-r text-center py-3 px-4">
                  {row.spectrometerCheck && <CheckCircle className="h-5 w-5 mx-auto text-green-500" />}
                </TableCell>
                <TableCell className="border-r text-center py-3 px-4">
                  {row.atasCheck ? (
                    <CheckCircle className="h-5 w-5 mx-auto text-green-500" />
                  ) : (
                    <X className="h-5 w-5 mx-auto text-red-500" />
                  )}
                </TableCell>
                <TableCell className="border-r text-center py-3 px-4">{row.chemicalCorrection}</TableCell>
                <TableCell className="border-r text-center py-3 px-4">
                  {row.pyrometerCheck && <CheckCircle className="h-5 w-5 mx-auto text-green-500" />}
                </TableCell>
                <TableCell className="border-r text-center py-3 px-4">
                  {row.deslaging && <CheckCircle className="h-5 w-5 mx-auto text-green-500" />}
                </TableCell>
                <TableCell className="border-r text-center py-3 px-4">{row.tapping}</TableCell>
                <TableCell className="border-r text-center py-3 px-4">{row.melting}</TableCell>
                <TableCell className="border-r text-center py-3 px-4">{row.temperature}</TableCell>
                <TableCell className="text-center py-3 px-4">{row.weight}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ReportTable;
