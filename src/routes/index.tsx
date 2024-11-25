import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Layout } from '@layout';

const router = createBrowserRouter(createRoutesFromElements(<Route path='/' element={<Layout />}></Route>));

const AdminRoutes = () => <RouterProvider router={router} />;

export default AdminRoutes;
