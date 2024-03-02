const DataTable = ({
  data,
}: {
  data: { register: number | string; value: number | string }[];
}) => {
  return (
    <div className="w-1/2 mx-auto py-10">
      <table className="min-w-full divide-y divide-gray-200 shadow overflow-hidden border border-black sm:rounded-lg">
        <thead className="bg-gray-50 border-b border-gray-300">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-black"
            >
              Register
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Value
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr key={index} className="border-b border-gray-300">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-300">
                {item.register}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {item.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
