import { CSSProperties } from 'react';
import { Bar, BarChart, CartesianGrid, Cell, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

interface CustomBarChartProps {
    data: { [key: string]: number | string }[];
    strokeDashArray: string;
    dataKeys: string[];
    strokes: {
        cartesianGridStroke: string;
        xAxisStroke: string;
        yAxisStroke: string;
    };
    bar: {
        fill: string;
    };
    tooltip: {
        active: boolean;
        contentStyle: CSSProperties;
        itemStyle: CSSProperties;
    };
    colors: string[];
    legend: boolean;
}

const CustomBarChart = ({
    data,
    strokeDashArray,
    dataKeys,
    strokes,
    bar,
    tooltip,
    colors,
    legend,
}: CustomBarChartProps) => {
    const { cartesianGridStroke, xAxisStroke, yAxisStroke } = strokes;
    const { active, contentStyle, itemStyle } = tooltip;
    const barProps = {
        ...bar,
        dataKey: dataKeys[1],
    };

    return (
        <ResponsiveContainer width={'100%'} height={'100%'}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray={strokeDashArray} stroke={cartesianGridStroke} />
                <XAxis dataKey={dataKeys[0]} stroke={xAxisStroke} />
                <YAxis stroke={yAxisStroke} />
                <Bar {...barProps}>
                    {data.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Bar>
                {active && (
                    <Tooltip
                        contentStyle={{
                            ...contentStyle,
                        }}
                        itemStyle={{ ...itemStyle }}
                    />
                )}
                {legend && <Legend />}
            </BarChart>
        </ResponsiveContainer>
    );
};

export default CustomBarChart;
