import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';

import { CollapsibleSidebar } from '@ui';
import { SIDEBAR_ITEMS } from '@constants';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const isMobile = useMediaQuery({ maxWidth: 767 });

    useEffect(() => {
        setIsSidebarOpen(!isMobile);
    }, [isMobile]);

    const renderNavigationLinks = () => {
        return (
            <nav className='mt-8 grow'>
                {SIDEBAR_ITEMS.map((item) => (
                    <NavLink
                        key={item.href}
                        to={item.href}
                        className={({ isActive }) =>
                            `flex items-center font-medium p-4 mb-2 text-sm rounded-lg transition-colors duration-300 ${
                                isActive ? 'bg-gray-700 text-white' : 'hover:bg-gray-700 hover:text-white'
                            }`
                        }
                        aria-label={`Navigate to ${item.href}`}
                    >
                        <item.icon size={20} style={{ color: item.color, minWidth: '20px' }} />
                        <AnimatePresence>
                            {isSidebarOpen && (
                                <motion.span
                                    className='ml-4 text-nowrap'
                                    initial={{ opacity: 0, width: 0 }}
                                    animate={{ opacity: 1, width: 'auto' }}
                                    exit={{ opacity: 0, width: 0 }}
                                    transition={{ duration: 0.2, delay: 0.3 }}
                                >
                                    {item.name}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </NavLink>
                ))}
            </nav>
        );
    };

    return (
        <CollapsibleSidebar isSidebarOpen={isSidebarOpen}>
            <div className='h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700   '>
                <motion.button
                    className='p-2 rounded-full hover:bg-gray-700 transition-colors duration-300 max-w-fit'
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    <Menu size={26} />
                </motion.button>
                {renderNavigationLinks()}
            </div>
        </CollapsibleSidebar>
    );
};

export default Sidebar;
