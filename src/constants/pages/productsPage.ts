import { AlertTriangle, DollarSign, Package, TrendingUp } from 'lucide-react';

export const PRODUCTS_STAT = [
    {
        name: 'Total Products',
        icon: Package,
        value: '1234',
        color: '#6366f1',
    },
    {
        name: 'Top Selling',
        icon: TrendingUp,
        value: '89',
        color: '#10b981',
    },
    {
        name: 'Low Stock',
        icon: AlertTriangle,
        value: '24',
        color: '#f59e0b',
    },
    {
        name: 'Total Revenue',
        icon: DollarSign,
        value: '$543,210',
        color: '#ef4444',
    },
];

export const SALES_TREND_DATA = [
    { month: 'Jan', sales: 4000 },
    { month: 'Feb', sales: 3000 },
    { month: 'Mar', sales: 5000 },
    { month: 'Apr', sales: 4500 },
    { month: 'May', sales: 6000 },
    { month: 'Jun', sales: 5500 },
];
