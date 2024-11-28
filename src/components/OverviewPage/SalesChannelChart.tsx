import { SALES_CHANNEL_DATA, SALES_CHANNEL_DATA_COLORS as COLORS } from '@constants';
import { SlideUp } from '@ui';
import { Bar, BarChart, CartesianGrid, Cell, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const SalesChannelChart = () => {
    return (
        <SlideUp
            className='bg-gray-800 bg-opacity-50 shadow-lg backdrop-blur-md rounded-xl p-5 lg:col-span-2 border border-gray-700'
            initial={25}
            duration={0.6}
            delay={0.5}
        >
            <h2 className='text-lg font-medium mb-4 text-gray-100'>Sales By Channel</h2>
            <div className='h-80'>
                <ResponsiveContainer width={'100%'} height={'100%'}>
                    <BarChart data={SALES_CHANNEL_DATA}>
                        <CartesianGrid strokeDasharray='3 3' stroke='#4b5563' />
                        <XAxis dataKey='name' stroke='#9ca3af' />
                        <YAxis stroke='#9ca3af' />
                        <Bar dataKey={'value'} fill='#8884d8'>
                            {SALES_CHANNEL_DATA.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Bar>
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                                borderColor: '#4b5563',
                            }}
                            itemStyle={{ color: '#e5e7eb' }}
                        />
                        <Legend />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </SlideUp>
    );
};

export default SalesChannelChart;
