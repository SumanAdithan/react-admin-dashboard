import { SalesOverviewChart, StatCard } from '@components';
import { OVERVIEW_STAT } from '@constants';
import { SlideUp } from '@ui';

const OverviewPage = () => {
    return (
        <>
            <SlideUp className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-7' initial={30} duration={1}>
                {OVERVIEW_STAT.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </SlideUp>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <SalesOverviewChart />
            </div>
        </>
    );
};

export default OverviewPage;
