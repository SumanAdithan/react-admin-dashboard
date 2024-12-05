import { CheckCircle, Clock, DollarSign, ShoppingBag } from 'lucide-react';

export const ORDERS_STAT = [
    {
        name: 'Total Orders',
        icon: ShoppingBag,
        value: '2,521',
        color: '#6366f1',
    },
    {
        name: 'Pending Orders',
        icon: Clock,
        value: '341',
        color: '#10b981',
    },
    {
        name: 'Completed Orders',
        icon: CheckCircle,
        value: '2,180',
        color: '#f59e0b',
    },
    {
        name: 'Total Revenue',
        icon: DollarSign,
        value: '$98,765',
        color: '#ef4444',
    },
];
