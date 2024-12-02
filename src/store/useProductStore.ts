import { Product } from '@constants';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface ProductStore {
    products: Product[];
    addProduct: (product: Product) => void;
    editProduct: (id: string, editedItems: Partial<Product>) => void;
    removeProduct: (id: string) => void;
}

export const useProductStore = create(
    devtools(
        immer<ProductStore>((set) => ({
            products: [],
            addProduct: (product: Product) =>
                set((state) => {
                    state.products.push(product);
                }),
            editProduct: (id: string, editedItems: Partial<Product>) =>
                set((state) => {
                    const product = state.products.find((product) => product.id === id);
                    if (product) {
                        Object.assign(product, editedItems);
                    }
                }),
            removeProduct: (id: string) =>
                set((state) => {
                    state.products = state.products.filter((product) => product.id !== id);
                }),
        }))
    )
);
