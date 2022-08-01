import React from 'react';
import DashboardCard from '../components/DasboardCard/DashboardCard';
import NavBar from '../components/Navbar/NavBar';

const ProductPage =() => {
    return(
        <>
        <NavBar />
        <div className="grid justify-items-center md:grid-cols-4 lg:grid-cols-5 grid-flow-row gap-5 w-screen h-auto p-5">
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        </div>
        </>
    )
}
export default ProductPage;