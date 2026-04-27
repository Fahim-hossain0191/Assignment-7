import React from 'react';
import Navbar from '../component/shared/navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/shared/footer/Footer';

const MainLayout = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;