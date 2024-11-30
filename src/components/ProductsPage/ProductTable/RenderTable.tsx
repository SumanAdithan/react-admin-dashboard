import { flexRender } from '@tanstack/react-table';

const RenderTable = ({ table }: any) => {
    return (
        <table className='min-w-full divide-y divide-gray-400'>
            <thead>
                {table.getHeaderGroups().map((headerGroup: any) => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header: any) => (
                            <th
                                key={header.id}
                                className='px-6 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider'
                            >
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(header.column.columnDef.header, header.getContext())}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody className='divide-y divide-gray-500'>
                {table.getRowModel().rows.map((row: any) => (
                    <tr key={row.id}>
                        {row.getVisibleCells().map((cell: any) => (
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100' key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default RenderTable;
