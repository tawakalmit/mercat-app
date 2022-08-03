import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import Link from 'next/link';

const Checkout =()=>{
    return(
        <>
        <div className="w-full h-none bg-lime-400 flex justify-between py-5 px-7">
            <div className="flex justify-start">
            <Link href='/user/shoppingcart'><IoIosArrowBack className="h-11 w-auto flex justify-center text-white"/></Link>
            <h2 className="text-white text-2xl font-semibold mt-1 ml-4">Products</h2>
            </div>
        </div>
        <div className="w-full h-auto pt-7 px-8 flex justify-between">
            <h2 className="font-bold text-2xl">Total</h2>
            <h2 className="text-xl">IDR 20.000</h2>
        </div>
        <div className="w-full h-auto pt-7 px-8 flex justify-between">
            <h2 className="text-sm">Payment Method</h2>
            <h2 className="text-sm"></h2>
        </div>
        <div className="w-full h-auto pt-7 px-8 flex justify-between">
            <h2 className="text-sm">Address</h2>
            <h2 className="text-lime-400 text-sm w-40 h-auto sm:w-56 md:w-auto lg:w-auto text-right">TB. Simatupang, Jl. Nangka Raya No.58 C, RW.5, Tj. Baru, Kec. Jagakarsa, Kota Jaksel, DKI Jakarta 12530</h2>
        </div>
        <div className="w-full h-auto mt-9 flex justify-center my-2 ">
        <button className="bg-slate-400 rounded-3xl w-36 h-10 font-bold text-lg text-white">Checkout</button>
        </div>
        </>
    )
}
export default Checkout;