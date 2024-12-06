import { CustomAreaChart } from '@charts';
import { ANALYTICS_DATA } from '@constants';
import { SlideUp } from '@ui';
import { useState } from 'react';

const areaChartProps = {
    data: ANALYTICS_DATA,
    strokeDashArray: '3 3',
    dataKeys: ['month', 'revenue'],
    strokes: {
        cartesianGridStroke: '#374151',
        xAxisStroke: '#9ca3af',
        yAxisStroke: '#9ca3af',
    },
    tooltip: {
        active: true,
        contentStyle: {
            backgroundColor: 'rgba(31, 45, 55, 0.8)',
            borderColor: '#4b5563',
        },
        itemStyle: { color: '#e5e7eb' },
    },
    areas: [
        {
            type: 'monotone' as 'monotone',
            stroke: '#8b5cf6',
            fill: '#8b5cf6',
            fillOpacity: 0.3,
            dataKey: 'revenue',
        },
        {
            type: 'monotone' as 'monotone',
            stroke: '#10b981',
            fill: '#10b981',
            fillOpacity: 0.3,
            dataKey: 'target',
        },
    ],
    legend: false,
};

const RevenueVsTargetChart = () => {
    const [timeRange, setTimeRange] = useState('This Quarter');
    return (
        <SlideUp
            className='bg-gray-800 bg-opacity-50 shadow-lg backdrop-blur-md rounded-xl p-5 border border-gray-700'
            initial={25}
            duration={0.2}
            delay={0.2}
        >
            <div className='flex items-center justify-between mb-6'>
                <h2 className='text-lg font-medium mb-4 text-gray-100'>Revenue Vs Targer</h2>
                <select
                    className='bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-600'
                    value={timeRange}
                    onChange={(e) => setTimeRange(e.target.value)}
                >
                    <option>This Week</option>
                    <option>This Month</option>
                    <option>This Quarter</option>
                    <option>This Year</option>
                </select>
            </div>
            <div className='h-80 w-full'>
                <CustomAreaChart {...areaChartProps} />
            </div>
        </SlideUp>
    );
};

export default RevenueVsTargetChart;
