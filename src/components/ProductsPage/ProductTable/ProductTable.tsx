import { SlideUp } from '@ui';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { PRODUCT_TABLE_DATA } from '@constants';
import { useTableConfig } from './utils';
import RenderTable from './RenderTable';

const ProductTable = () => {
    const [data, setData] = useState(PRODUCT_TABLE_DATA);
    const [globalFilter, setGlobalFilter] = useState('');

    const table = useTableConfig({ data, globalFilter, setGlobalFilter });

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
                        placeholder='Search Product...'
                        className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 w-full sm:w-auto outline-none focus:ring-2 focus:ring-blue-500'
                    />
                </div>
            </div>
            <RenderTable table={table} />
        </SlideUp>
    );
};

export default ProductTable;
