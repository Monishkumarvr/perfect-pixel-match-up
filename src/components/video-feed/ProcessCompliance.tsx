
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface TimerProps {
  initialTime: number;
  label: string;
  status: 'active' | 'idle' | 'completed';
}

const Timer: React.FC<TimerProps> = ({ initialTime, label, status }) => {
  const [time, setTime] = useState<number>(initialTime);
  
  useEffect(() => {
    let interval: number | undefined;
    
    if (status === 'active') {
      interval = window.setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [status]);
  
  // Format time as HH:MM:SS
  const formatTime = (seconds: number): string => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  const getStatusIcon = () => {
    if (status === 'active' || status === 'completed') {
      return (
        <div className="rounded-full bg-green-500 p-1 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
      );
    } else if (status === 'idle') {
      return (
        <div className="rounded-full bg-yellow-500 p-1 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        </div>
      );
    }
  };
  
  return (
    <div className={`flex items-center gap-2 bg-blue-50 p-3 mb-2 rounded ${status === 'active' ? 'border-l-4 border-blue-500' : ''}`}>
      {getStatusIcon()}
      <span className="font-medium text-blue-700">{label}</span>
      <span className="ml-auto font-mono text-blue-900">{formatTime(time)}</span>
    </div>
  );
};

export const ProcessCompliance: React.FC = () => {
  return (
    <div className="absolute left-6 bottom-6 w-80">
      <div className="bg-blue-600 text-white font-medium px-4 py-2 rounded-t-md flex items-center gap-2">
        <Clock className="h-5 w-5" />
        Process Compliance
      </div>
      <div className="bg-white p-3 rounded-b-md shadow-lg border border-blue-200">
        <Timer initialTime={672} label="Charging" status="completed" />
        <Timer initialTime={2615} label="Melting" status="active" />
        <Timer initialTime={142} label="Tapping" status="idle" />
      </div>
    </div>
  );
};
