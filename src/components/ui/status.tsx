'use client';
import React from 'react';


interface StatusProps {
  status: "success" | "pending" | "failed"; 
}

const Status: React.FC<StatusProps> = ({ status }) => {

  const statusColors = {
    success: { text: "text-green-700", bg: "bg-green-200" }, 
    pending: { text: "text-orange-600", bg: "bg-orange-200" }, 
    failed: { text: "text-red-800", bg: "bg-red-200" }, 
  };


  const { text, bg } = statusColors[status];

  return (
    <span className={`relative inline-block px-3 py-1 font-semibold leading-tight ${text}`}>
      <span aria-hidden className={`absolute inset-0 opacity-50 rounded-sm ${bg}`}></span>
      <span className="relative">{status.charAt(0).toUpperCase() + status.slice(1)}</span>
    </span>
  );
};

export default Status;
