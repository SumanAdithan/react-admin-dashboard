import { CustomPieChart } from '@charts';
import { STATUS_DISTRIBUTION_DATA, STATUS_DISTRIBUTION_COLORS as COLORS } from '@constants';
import { SlideUp } from '@ui';

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
    return (
        <SlideUp
            className='bg-gray-800 bg-opacity-50 shadow-lg backdrop-blur-md rounded-xl p-5 border border-gray-700 '
            initial={25}
            duration={1.8}
            delay={1.2}
        >
            <h2 className='text-lg font-medium mb-4 text-gray-100'>Order Status Distribution</h2>
            <div className='h-80'>
                <CustomPieChart {...pieChartProps} />
            </div>
        </SlideUp>
    );
};

export default OrderStatusDistributionChart;
