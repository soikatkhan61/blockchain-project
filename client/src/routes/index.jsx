import React from 'react'
import {
    createBrowserRouter, RouterProvider,
    Outlet, Navigate
} from "react-router-dom";

import Home from '../pages/Home';
import Products from '../pages/Products';
import Product from '../pages/Product';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Error from '../pages/Error';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Index = () => {

    const Layout = () => {
        return (
            <div className="flex flex-col">
                <Navbar />
                <div className='w-full min-h-[87.3vh] bg-slate-200'>
                    <Outlet />
                </div>
                <Footer />
                <ToastContainer />
            </div>
        );
    };

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/products",
                    element: <Products />,
                },
                {
                    path: "/products/:id",
                    element: <Product />,
                },
                {
                    path: "*",
                    element: <Error />,
                },
            ],
        },
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default Index;