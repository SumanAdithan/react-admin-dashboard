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

export const ORDERS_DATA = [
    { date: '07/01', orders: 48 },
    { date: '07/02', orders: 42 },
    { date: '07/03', orders: 49 },
    { date: '07/04', orders: 62 },
    { date: '07/05', orders: 55 },
    { date: '07/06', orders: 52 },
    { date: '07/07', orders: 62 },
];

export const STATUS_DISTRIBUTION_DATA = [
    { name: 'Pending', value: 60 },
    { name: 'Processing', value: 105 },
    { name: 'Shipped', value: 80 },
    { name: 'Delivered', value: 210 },
];

export const STATUS_DISTRIBUTION_COLORS = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#fed766', '#2ab7ca'];
