import { Zap, Users, ShoppingBag, BarChart2 } from 'lucide-react';

export const OVERVIEW_STAT = [
    {
        name: 'Total Sales',
        icon: Zap,
        value: '$13,459',
        color: '#6366f1',
    },
    {
        name: 'New Users',
        icon: Users,
        value: '1,987',
        color: '#8b5cf6',
    },
    {
        name: 'Total Products',
        icon: ShoppingBag,
        value: '5,678',
        color: '#ec4899',
    },
    {
        name: 'Conversion Rate',
        icon: BarChart2,
        value: '14.9%',
        color: '#10b981',
    },
];

export const SALES_DATA = [
    { name: 'Aug', sales: 3000 },
    { name: 'Sep', sales: 3700 },
    { name: 'Oct', sales: 5200 },
    { name: 'Nov', sales: 4600 },
    { name: 'Dec', sales: 5400 },
    { name: 'Jan', sales: 7300 },
    { name: 'Feb', sales: 6100 },
    { name: 'Mar', sales: 5600 },
    { name: 'Apr', sales: 6600 },
    { name: 'May', sales: 6200 },
    { name: 'Jun', sales: 7100 },
    { name: 'Jul', sales: 7700 },
];

export const CATEGORY_DATA = [
    { name: 'Electronics', value: 4500 },
    { name: 'Clothing', value: 3200 },
    { name: 'Home & Garden', value: 2800 },
    { name: 'Books', value: 2100 },
    { name: 'Sports & Outdoors', value: 1800 },
];

export const CATEGORY_DATA_COLORS = ['#6366f1', '#6b8afa', '#ec4899', '#10b981', '#f59e0b'];

export const SALES_CHANNEL_DATA = [
    { name: 'Website', value: 53000 },
    { name: 'Mobile App', value: 38200 },
    { name: 'Marketplace', value: 17000 },
    { name: 'Social Media', value: 28700 },
    { name: 'Email Marketing', value: 50000 },
    { name: 'Affiliate Marketing', value: 35000 },
    { name: 'Direct Sales', value: 25000 },
];

export const SALES_CHANNEL_DATA_COLORS = ['#6366f1', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B', '#3B82F6', '#6EE7B7'];
