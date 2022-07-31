import React from 'react';
import DashboardCard from '../components/DasboardCard/DashboardCard';
import NavBar from '../components/Navbar/NavBar';

const ProductPage =() => {
    return(
        <>
        <NavBar />
        <div className="container pl-5 pr-5 pt-4">
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        </div>
        </>
    )
}
export default ProductPage;