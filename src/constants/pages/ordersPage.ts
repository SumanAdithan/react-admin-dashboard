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

export interface Order {
    id: string;
    customer: string;
    total: number;
    status: string;
    date: string;
}

export const ORDER_TABLE_DATA: Order[] = [
    { id: 'ORD001', customer: 'Mudassar', total: 235.4, status: 'Delivered', date: '2023-07-01' },
    { id: 'ORD002', customer: 'Danish', total: 412.0, status: 'Processing', date: '2023-07-02' },
    { id: 'ORD003', customer: 'Ayesha', total: 162.5, status: 'Shipped', date: '2023-07-03' },
    { id: 'ORD004', customer: 'Hassan', total: 750.2, status: 'Pending', date: '2023-07-04' },
    { id: 'ORD005', customer: 'Sarah', total: 95.8, status: 'Delivered', date: '2023-07-05' },
    { id: 'ORD006', customer: 'Zainab', total: 310.75, status: 'Processing', date: '2023-07-06' },
    { id: 'ORD007', customer: 'Rizwan', total: 528.9, status: 'Shipped', date: '2023-07-07' },
    { id: 'ORD008', customer: 'Kiran', total: 189.6, status: 'Delivered', date: '2023-07-08' },
    { id: 'ORD009', customer: 'Ali', total: 675.0, status: 'Pending', date: '2023-07-09' },
    { id: 'ORD010', customer: 'Sara', total: 225.4, status: 'Delivered', date: '2023-07-10' },
    { id: 'ORD011', customer: 'Kamran', total: 330.6, status: 'Processing', date: '2023-07-11' },
    { id: 'ORD012', customer: 'Farah', total: 480.0, status: 'Shipped', date: '2023-07-12' },
    { id: 'ORD013', customer: 'Usman', total: 560.2, status: 'Delivered', date: '2023-07-13' },
    { id: 'ORD014', customer: 'Asma', total: 310.5, status: 'Pending', date: '2023-07-14' },
    { id: 'ORD015', customer: 'Bilal', total: 745.8, status: 'Processing', date: '2023-07-15' },
    { id: 'ORD016', customer: 'Imran', total: 420.0, status: 'Shipped', date: '2023-07-16' },
    { id: 'ORD017', customer: 'Nida', total: 250.7, status: 'Delivered', date: '2023-07-17' },
    { id: 'ORD018', customer: 'Hamza', total: 555.3, status: 'Pending', date: '2023-07-18' },
];
