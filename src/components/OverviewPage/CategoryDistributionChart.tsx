import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { SlideUp } from '@ui';
import { CATEGORY_DATA, CATEGORY_DATA_COLORS as COLORS } from '@constants';

const CategoryDistributionChart = () => {
    return (
        <SlideUp
            className='bg-gray-800 bg-opacity-50 shadow-lg backdrop-blur-md rounded-xl p-5 border border-gray-700'
            initial={25}
            duration={0.5}
            delay={0.2}
        >
            <h2 className='text-lg font-medium mb-4 text-gray-100'>Category Distribution</h2>
            <div className='h-80'>
                <ResponsiveContainer width={'100%'} height={'100%'}>
                    <PieChart>
                        <Pie
                            data={CATEGORY_DATA}
                            cx={'50%'}
                            cy={'50%'}
                            labelLine={false}
                            outerRadius={80}
                            fill='#8884d8'
                            dataKey='value'
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                            {CATEGORY_DATA.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                                borderColor: '#4b5563',
                            }}
                            itemStyle={{ color: '#e5e7eb' }}
                        />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </SlideUp>
    );
};

export default CategoryDistributionChart;
