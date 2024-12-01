import { SlideUp } from '@ui';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { useState } from 'react';
import { PRODUCT_TABLE_DATA } from '@constants';
import RenderTable from './RenderTable';
import { useTableConfig } from '@hooks';
import { columns } from './columnConfig';

const ProductTable = () => {
    const [data, setData] = useState(PRODUCT_TABLE_DATA);
    const [globalFilter, setGlobalFilter] = useState('');
    const pageSize = 5;

    const table = useTableConfig({ data, columns, globalFilter, setGlobalFilter, pageSize });

    return (
        <SlideUp
            className='bg-gray-800 bg-opacity-50 shadow-lg backdrop-blur-md rounded-xl p-5 border border-gray-700 mb-6 relative z-20'
            initial={25}
            duration={0.2}
            delay={0.2}
        >
            <div className='flex justify-between items-center mb-6'>
                <h2 className='text-xl font-semibold text-gray-100'>Product List</h2>
                <div className='relative flex items-center'>
                    <Search className='absolute left-3 text-gray-400 sm:left-2.5 top-2.5' size={20} />
                    <input
                        type='text'
                        value={globalFilter}
                        onChange={(e) => setGlobalFilter(e.target.value)}
                        placeholder='Search Product...'
                        className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 w-full sm:w-auto outline-none focus:ring-2 focus:ring-blue-500'
                    />
                </div>
            </div>
            <RenderTable table={table} />
            <div className='flex flex-col md:flex-row justify-between mt-4 space-x-2 items-center'>
                <div className='flex items-center'>
                    <button
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                        className={`text-sm px-3 py-1 border rounded-md ${
                            !table.getCanPreviousPage()
                                ? 'text-gray-400 border-gray-600'
                                : 'text-gray-100 border-gray-300 hover:bg-gray-300 hover:text-gray-800'
                        }`}
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <span className='mx-2 text-sm font-medium text-gray-100'>
                        Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                    </span>
                    <button
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                        className={`text-sm px-3 py-1 border rounded-md ${
                            !table.getCanNextPage()
                                ? 'text-gray-400 border-gray-600'
                                : 'text-gray-100 border-gray-300 hover:bg-gray-300 hover:text-gray-800'
                        }`}
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>

                <div className='text-sm font-medium text-gray-300 tracking-wider mt-5 md:mt-0'>
                    Total Products: {table.getRowCount()}
                </div>
            </div>
        </SlideUp>
    );
};

export default ProductTable;
