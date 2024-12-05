import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';

export const SALES_STAT = [
    {
        name: 'Total Revenue',
        icon: DollarSign,
        value: '$1,234,567',
        color: '#6366f1',
    },
    {
        name: 'Avg. Order Value',
        icon: ShoppingCart,
        value: '$78.90',
        color: '#10b981',
    },
    {
        name: 'Conversion Rate',
        icon: TrendingUp,
        value: '43.67%',
        color: '#f59e0b',
    },
    {
        name: 'Sales Growth',
        icon: CreditCard,
        value: '59.3%',
        color: '#ef4444',
    },
];

export const OVERVIEW_SALES_DATA = [
    { month: 'Jan', sales: 4000 },
    { month: 'Feb', sales: 3000 },
    { month: 'Mar', sales: 5000 },
    { month: 'Apr', sales: 4500 },
    { month: 'May', sales: 6000 },
    { month: 'Jun', sales: 5500 },
    { month: 'Jul', sales: 7000 },
];
