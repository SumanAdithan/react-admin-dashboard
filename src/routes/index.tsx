import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Layout } from '@layout';
import { OverviewPage, ProductsPage } from '@pages';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route index element={<OverviewPage />} />
            <Route path='/products' element={<ProductsPage />} />
        </Route>
    )
);

const AdminRoutes = () => <RouterProvider router={router} />;

export default AdminRoutes;
