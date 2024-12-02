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

export const PRODUCT_TABLE_HEADING = ['Name', 'Category', 'Price', 'Stock', 'Sales', 'Actions'];

export interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    stock: number;
    sales: number;
}

export const PRODUCT_TABLE_DATA: Product[] = [
    { id: '1', name: 'Wireless Earbuds', category: 'Electronics', price: 59.99, stock: 143, sales: 1200 },
    { id: '2', name: 'Leather Wallet', category: 'Accessories', price: 39.99, stock: 89, sales: 900 },
    { id: '3', name: 'Smart Watch', category: 'Electronics', price: 399.99, stock: 56, sales: 650 },
    { id: '4', name: 'Yoga Mat', category: 'Fitness', price: 299.99, stock: 220, sales: 950 },
    { id: '5', name: 'Coffee Maker', category: 'Home Usage', price: 49.99, stock: 190, sales: 720 },
    { id: '6', name: 'Running Shoes', category: 'Footwear', price: 89.99, stock: 120, sales: 430 },
    { id: '7', name: 'Gaming Headset', category: 'Electronics', price: 69.99, stock: 65, sales: 780 },
    { id: '8', name: 'Cookware Set', category: 'Kitchen', price: 109.99, stock: 45, sales: 580 },
    { id: '9', name: 'Bluetooth Speaker', category: 'Electronics', price: 29.99, stock: 200, sales: 1150 },
    { id: '10', name: 'Vacuum Cleaner', category: 'Home Appliances', price: 149.99, stock: 30, sales: 390 },
    { id: '11', name: 'Portable Charger', category: 'Electronics', price: 19.99, stock: 300, sales: 1400 },
    { id: '12', name: 'Hand Mixer', category: 'Kitchen', price: 79.99, stock: 50, sales: 275 },
    { id: '13', name: 'Electric Toothbrush', category: 'Personal Care', price: 89.99, stock: 80, sales: 640 },
    { id: '14', name: 'Laptop Stand', category: 'Office Supplies', price: 45.99, stock: 120, sales: 350 },
    { id: '15', name: 'Desk Lamp', category: 'Home Decor', price: 39.99, stock: 110, sales: 300 },
];
