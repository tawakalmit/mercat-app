import React from "react";
import CardAdmin from "../../components/cardadmin";
import NavbarAdmin from '../../components/navbaradmin';

const AdminDashboard = () => {
    return (
        <>
        <NavbarAdmin />
        <div className="w-screen h-auto my-5 flex justify-center">
        <button className="text-center text-white w-80 h-6 font-bold text-sm bg-slate-400 rounded-xl">+Create</button>
        </div>
        <div className="grid justify-items-center sm:grid-cols-2 sm:px-0 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row gap-5 w-screen h-auto px-5">
        <CardAdmin />
        <CardAdmin />
        <CardAdmin />
        <CardAdmin />
        <CardAdmin />
        <CardAdmin />
        </div>
        </>
    )
};
export default AdminDashboard;