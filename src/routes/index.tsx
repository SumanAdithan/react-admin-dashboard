import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Layout } from '@layout';
import { OrdersPage, OverviewPage, ProductsPage, SalesPage, UsersPage } from '@pages';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route index element={<OverviewPage />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/users' element={<UsersPage />} />
            <Route path='/orders' element={<OrdersPage />} />
            <Route path='/sales' element={<SalesPage />} />
        </Route>
    )
);

const AdminRoutes = () => <RouterProvider router={router} />;

export default AdminRoutes;
