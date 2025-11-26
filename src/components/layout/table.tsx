'use client';

import { FC, useEffect, useState, ReactNode } from "react";

interface TableProps<T> {
  headers: string[];
  data: T[];
  renderRow: (row: T) => ReactNode;
  tableTitle: string;
  onCreate?: () => void;
}

const Table = <T extends unknown>({
  headers,
  data,
  renderRow,
  tableTitle,
  onCreate
}: TableProps<T>) => {
  useEffect(() => {
  const style: HTMLStyleElement = document.createElement('style');
  style.innerHTML = `
    .scrollable-table::-webkit-scrollbar {
      display: none;
    }
    .scrollable-table {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `;
  document.head.appendChild(style);

  return () => {
    document.head.removeChild(style);
  };
}, []);

  return (
    <div className="p-6 rounded-lg">
      
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
      

      
      </div>


      <div className="overflow-x-auto">
        <div className="overflow-y-auto rounded-lg scrollable-table">
          <table className="w-full shadow-md bg-white/50 backdrop-blur-3xl  rounded-lg  text-[#1e293b] ">
            <thead className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-700 uppercase tracking-wider ">
              <tr className="border-b border-[#444] " >
                {headers.map((header, index) => (
                  <th
                    key={index}
                    className="py-3 px-5 text-left uppercase font-bold tracking-wider"
                  >
                    {header}
                  </th>
                ))}
                
              </tr>
            </thead>
            <tbody className="">
              {data.map((row, index) => (
                <tr
                  key={index}
                  className="px-5 py-5 border-b border-gray-200  text-sm"
                >
                  {renderRow(row)}
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>
      </div>
    </div>
  );
};

export default Table;
