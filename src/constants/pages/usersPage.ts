import { UserCheck, UserIcon, UserPlus, UserX } from 'lucide-react';

export const Users_STAT = [
    {
        name: 'Total Users',
        icon: UserIcon,
        value: '8,74,504',
        color: '#6366f1',
    },
    {
        name: 'New Users Today',
        icon: UserPlus,
        value: '243',
        color: '#10b981',
    },
    {
        name: 'Active Users',
        icon: UserCheck,
        value: '23,091',
        color: '#f59e0b',
    },
    {
        name: 'Churn Rate',
        icon: UserX,
        value: '2.3%',
        color: '#ef4444',
    },
];

export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    status: string;
}

export const USER_TABLE_DATA = [
    { id: '1', name: 'Mudassar', email: 'mudassar@gmail.com', role: 'Admin', status: 'Active' },
    { id: '2', name: 'Ustad g', email: 'john.smith@gmail.com', role: 'Customer', status: 'Active' },
    { id: '3', name: 'Wahab', email: 'wahab.noor@gmail.com', role: 'Customer', status: 'Inactive' },
    { id: '4', name: 'Danish', email: 'danish.joe@gmail.com', role: 'Moderator', status: 'Active' },
    { id: '5', name: 'Usama', email: 'usama.glasses@gmail.com', role: 'Customer', status: 'Active' },
    { id: '6', name: 'Ayesha', email: 'ayesha.khan@gmail.com', role: 'Admin', status: 'Inactive' },
    { id: '7', name: 'Hassan', email: 'hassan.ali@gmail.com', role: 'Customer', status: 'Active' },
    { id: '8', name: 'Sarah', email: 'sarah.jones@gmail.com', role: 'Admin', status: 'Active' },
    { id: '9', name: 'Ali', email: 'ali.baba@gmail.com', role: 'Customer', status: 'Inactive' },
    { id: '10', name: 'Fahad', email: 'fahad.king@gmail.com', role: 'Moderator', status: 'Active' },
    { id: '11', name: 'Zainab', email: 'zainab.queen@gmail.com', role: 'Customer', status: 'Active' },
    { id: '12', name: 'Bilal', email: 'bilal.smart@gmail.com', role: 'Customer', status: 'Inactive' },
    { id: '13', name: 'Rizwan', email: 'rizwan.shah@gmail.com', role: 'Moderator', status: 'Active' },
    { id: '14', name: 'Kiran', email: 'kiran.doe@gmail.com', role: 'Customer', status: 'Inactive' },
    { id: '15', name: 'Yasir', email: 'yasir.ace@gmail.com', role: 'Admin', status: 'Active' },
];

export const USER_TABLE_INPUT_FIELDS = [
    {
        label: 'User Name',
        type: 'text',
        placeholder: 'User Name',
        key: 'name',
    },
    {
        label: 'Email',
        type: 'text',
        placeholder: 'Email',
        key: 'email',
    },
    {
        label: 'Role',
        type: 'select',
        placeholder: 'Role',
        key: 'role',
        options: [
            { label: 'Admin', value: 'Admin' },
            { label: 'Customer', value: 'Customer' },
            { label: 'Moderator', value: 'Moderator' },
        ],
    },
    {
        label: 'Status',
        type: 'select',
        placeholder: 'Status',
        key: 'status',
        options: [
            { label: 'Active', value: 'Active' },
            { label: 'Inactive', value: 'Inactive' },
        ],
    },
];
