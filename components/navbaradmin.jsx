import React from "react";
import { HiMoon } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import Link from "next/link";

const NavbarAdmin =()=>{
return(
    <div className="w-full h-none bg-lime-400 flex justify-between p-5">
        <div className="flex justify-start">
        <Link href='/admindashboard'><IoIosArrowBack className="cursor-pointer h-11 w-auto flex justify-center text-white"/></Link>
        <h2 className="text-white text-2xl font-semibold mt-1">Admin</h2>
        </div>
        <div className="flex justify-end">
        <HiMoon className="h-11 w-auto text-white"/>
        <MdOutlineLogout className="h-11 w-auto text-white"/>
        </div>
    </div>
)
};
export default NavbarAdmin;