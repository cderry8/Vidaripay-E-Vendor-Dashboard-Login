
const TableSkeleton = () => {
  return (
    <div className="p-6 rounded-lg">
      <div className="overflow-x-auto">
        <div className="overflow-y-auto rounded-lg scrollable-table">
          <table className="w-full shadow-md bg-white/50 backdrop-blur-3xl rounded-lg text-[#1e293b]">
            <thead className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              <tr className="border-b border-[#444]">
                {['', '', '', '', '', '', ''].map((_, index) => (
                  <th key={index} className="py-3 px-5 text-left uppercase font-bold tracking-wider">
                    <div className="skeleton w-24 h-5 bg-gray-300 rounded"></div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <tr key={index} className="px-5 py-5 border-b border-gray-200 text-sm">
                    {['', '', '', '', '', '', ''].map((_, index) => (
                      <td key={index} className="py-3 px-5">
                        <div className="skeleton w-24 h-5 bg-gray-200 rounded"></div>
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableSkeleton;
