import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Line, Tooltip } from 'recharts';
import { SlideUp } from '@ui';
import { SALES_DATA } from '@constants';

const SalesOverviewChart = () => {
    return (
        <SlideUp
            className='bg-gray-800 bg-opacity-50 shadow-lg backdrop-blur-md rounded-xl p-5 border border-gray-700'
            initial={25}
            duration={0.5}
            delay={0.2}
        >
            <h2 className='text-lg font-medium mb-4 text-gray-100'>Sales Overview</h2>
            <div className='h-80'>
                <ResponsiveContainer width={'100%'} height={'100%'}>
                    <LineChart data={SALES_DATA}>
                        <CartesianGrid strokeDasharray={'3 3'} stroke='#4b5563' />
                        <XAxis dataKey={'name'} stroke='#9ca3af' />
                        <YAxis stroke='#9ca3af' />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgba(31, 45, 55, 0.8)',
                                borderColor: '#4b5563',
                            }}
                            itemStyle={{ color: '#e5e7eb' }}
                        />
                        <Line
                            type='monotone'
                            dataKey={'sales'}
                            stroke={'#6366f1'}
                            strokeWidth={3}
                            dot={{ fill: '#6366f1', strokeWidth: 2, r: 5 }}
                            activeDot={{ r: 8, strokeWidth: 2 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </SlideUp>
    );
};

export default SalesOverviewChart;
