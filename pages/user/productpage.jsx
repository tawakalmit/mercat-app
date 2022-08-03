import React from 'react';
import DashboardCard from '../../components/dashboardcard';
import NavBar from '../../components/navbar';

const ProductPage =() => {
    return(
        <>
        <NavBar />
        <div className="grid justify-items-center sm:grid-cols-2 sm:px-0 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row gap-5 w-screen h-auto p-5">
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