import { StatCard } from '@components';
import { ORDERS_STAT } from '@constants';
import { SlideUp } from '@ui';

const OrdersPage = () => {
    return (
        <>
            <SlideUp className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-7' initial={30} duration={1}>
                {ORDERS_STAT.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </SlideUp>
        </>
    );
};

export default OrdersPage;
