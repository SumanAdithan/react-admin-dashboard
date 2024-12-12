import { CustomPieChart } from '@charts';
import { STATUS_DISTRIBUTION_DATA, STATUS_DISTRIBUTION_COLORS as COLORS } from '@constants';
import { SlideUp } from '@ui';
import { useEffect, useRef } from 'react';

const pieChartProps = {
    data: STATUS_DISTRIBUTION_DATA,
    pie: {
        cx: '50%',
        cy: '50%',
        labelLine: false,
        outerRadius: 80,
        fill: '#8884d8',
    },
    dataKeys: ['name', 'value'],
    colors: COLORS,
    tooltip: {
        active: true,
        contentStyle: {
            backgroundColor: 'rgba(31, 45, 55, 0.8)',
            borderColor: '#4b5563',
        },
        itemStyle: { color: '#e5e7eb' },
    },
    legend: true,
};

const OrderStatusDistributionChart = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const centerScroll = () => {
        if (containerRef.current) {
            const container = containerRef.current;
            container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
        }
    };
    useEffect(() => {
        setTimeout(centerScroll, 1500);
    }, []);
    return (
        <SlideUp
            className='bg-gray-800 bg-opacity-50 shadow-lg backdrop-blur-md rounded-xl p-5 border border-gray-700 '
            initial={25}
            duration={0.5}
            delay={0.2}
        >
            <h2 className='text-lg font-medium mb-4 text-gray-100'>Order Status Distribution</h2>
            <div ref={containerRef} className='h-80 overflow-auto'>
                <CustomPieChart {...pieChartProps} />
            </div>
        </SlideUp>
    );
};

export default OrderStatusDistributionChart;
