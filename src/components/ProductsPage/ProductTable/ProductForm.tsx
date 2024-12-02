import { ScaleIn } from '@ui';
import React from 'react';

interface ProductFormProps {
    isEdit: boolean;
}

const ProductForm = ({ isEdit }: boolean) => {
    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40'>
            <ScaleIn duration={0.3}>
                <h1 className='text-2xl font-semibold text=gray-100 mb-3 underline tracking-wider'>
                    {isEdit ? 'Edit Product' : 'Add Product'}
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='flex flex-col space-y-1'>
                        <label className='text-sm text-gray-300'>Product Name</label>
                        <input type='text' className='w-full px-4 py-2 bg-gray-700 text-white rounded-md' />
                    </div>
                </div>
            </ScaleIn>
        </div>
    );
};

export default ProductForm;
