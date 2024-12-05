import { OverviewSalesChart, StatCard } from '@components';
import { SALES_STAT } from '@constants';
import { SlideUp } from '@ui';

const SalesPage = () => {
    return (
        <>
            <SlideUp className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-7' initial={30} duration={1}>
                {SALES_STAT.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </SlideUp>
            <OverviewSalesChart />
        </>
    );
};

export default SalesPage;
