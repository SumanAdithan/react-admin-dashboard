import { StatCard } from '@components';
import { OVERVIEW_STAT } from '@constants';
import { motion } from 'framer-motion';

const OverviewPage = () => {
    return (
        <motion.div
            className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-7'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            {OVERVIEW_STAT.map((stat, index) => (
                <StatCard key={index} {...stat} />
            ))}
        </motion.div>
    );
};

export default OverviewPage;
