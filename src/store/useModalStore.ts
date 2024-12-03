import { Product } from '@constants';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type ModalStatus = 'ADD' | 'EDIT' | 'VIEW' | 'CLOSE';

interface ModalState {
    data?: Product;
    active: boolean;
    status: ModalStatus;
}

interface ModalStore {
    modal: ModalState;
    openModal: (status: ModalStatus, data?: Product) => void;
    closeModal: () => void;
}

const initialProduct: Product = {
    id: '',
    name: '',
    category: '',
    price: 0,
    stock: 0,
    sales: 0,
};

const initialModalState: ModalState = {
    data: {
        id: '',
        name: '',
        category: '',
        price: 0,
        stock: 0,
        sales: 0,
    },
    active: false,
    status: 'CLOSE',
};

export const useModalStore = create(
    devtools(
        immer<ModalStore>((set) => ({
            modal: initialModalState,
            openModal: (status: ModalStatus, data = initialProduct) =>
                set((state) => {
                    state.modal = { data, active: true, status };
                }),
            closeModal: () =>
                set((state) => {
                    state.modal = initialModalState;
                }),
        }))
    )
);
