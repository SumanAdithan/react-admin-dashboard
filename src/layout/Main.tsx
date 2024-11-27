import { ReactNode } from 'react';

interface MainProps {
    children: ReactNode;
}

const Main = ({ children }: MainProps) => {
    return <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>{children}</main>;
};

export default Main;
