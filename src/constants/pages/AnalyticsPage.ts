import { DollarSign, Eye, ShoppingBag, Users } from 'lucide-react';

export const ANALYTICS_STAT = [
    { name: 'Revenue', value: '$1,234,567', change: 12.5, icon: DollarSign },
    { name: 'Users', value: '45,678', change: 8.3, icon: Users },
    { name: 'Orders', value: '9,876', change: -6.9, icon: ShoppingBag },
    { name: 'Page Views', value: '2,345,678', change: 19.4, icon: Eye },
];

export const ANALYTICS_DATA = [
    { month: 'Jan', revenue: 4200, target: 5000 },
    { month: 'Feb', revenue: 3000, target: 3200 },
    { month: 'Mar', revenue: 5500, target: 4500 },
    { month: 'Apr', revenue: 4500, target: 4200 },
    { month: 'May', revenue: 5500, target: 6000 },
    { month: 'Jun', revenue: 4500, target: 4800 },
    { month: 'Jul', revenue: 7000, target: 6500 },
];

export const CHANNEL_DATA = [
    { name: 'Organic Search', value: 4500 },
    { name: 'Paid Search', value: 3000 },
    { name: 'Direct', value: 2500 },
    { name: 'Social Media', value: 2700 },
    { name: 'Referral', value: 1800 },
    { name: 'Email', value: 2400 },
];

export const CHANNEL_COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088FE', '#00C49F'];
