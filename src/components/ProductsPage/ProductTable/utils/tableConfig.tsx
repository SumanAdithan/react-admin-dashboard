import { Product } from '@constants';
import {
    createColumnHelper,
    getCoreRowModel,
    getPaginationRowModel,
    getFilteredRowModel,
    useReactTable,
} from '@tanstack/react-table';
import { ListPlus, Edit, Trash2 } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';

const columnHelper = createColumnHelper<Product>();

// table columns config
const columns = [
    columnHelper.accessor('name', {
        header: 'NAME',
        cell: (info) => (
            <div className='font-medium flex gap-2 items-center'>
                <img
                    src='https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww'
                    alt='Product_Image'
                    className='rounded-full size-10'
                />
                {info.getValue()}
            </div>
        ),
    }),
    columnHelper.accessor('category', {
        header: 'CATEGORY',
    }),
    columnHelper.accessor('price', {
        header: 'PRICE',
        cell: (info) => `$ ${info.getValue()}`,
    }),
    columnHelper.accessor('stock', {
        header: 'STOCK',
    }),
    columnHelper.accessor('sales', {
        header: 'SALES',
    }),
    columnHelper.display({
        id: 'actions',
        header: 'ACTIONS',
        cell: () => (
            <div className='flex items-center gap-4 h-full'>
                <button className='text-green-500 hover:text-green-700'>
                    <ListPlus size={20} />
                </button>
                <button className='text-blue-500 hover:text-blue-700'>
                    <Edit size={18} />
                </button>
                <button className='text-red-500 hover:text-red-700'>
                    <Trash2 size={18} />
                </button>
            </div>
        ),
    }),
];

interface TableOptionsProps {
    data: Product[];
    globalFilter: string;
    setGlobalFilter: Dispatch<SetStateAction<string>>;
}

export const useTableConfig = ({ data, globalFilter, setGlobalFilter }: TableOptionsProps) => {
    return useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        globalFilterFn: 'includesString',
        onGlobalFilterChange: setGlobalFilter,
        initialState: {
            pagination: {
                pageIndex: 0,
                pageSize: 5,
            },
        },
        state: {
            globalFilter,
        },
    });
};
