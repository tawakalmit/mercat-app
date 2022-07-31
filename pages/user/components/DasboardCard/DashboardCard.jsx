import React from 'react';
import Image from 'next/image';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
const DashboardCard = () =>{
    return(
        <div className="container mb-5">
            <div className="card h-60 w-36 border-solid border-2 border-lime-400 rounded-3xl p-2">
                <Image src="/tashitam.jpg" width="129" height="112" className='rounded-t-2xl'/>
                <h2 className="text-sm font-bold">Men's Bag</h2>
                <h3 className="text-[0.6rem] font-medium text-lime-400">IDR 20.000</h3>
                <div className="stock w-full h-auto flex justify-between gap-0">
                <p className="text-xs font-medium">Stock</p>
                <p className="text-xs font-medium">5</p>
                </div>
                <div className="stock w-full h-auto flex justify-between">
                <p className="text-xs font-medium">Quantity</p>
                <div className="gap-x-0 flex justify-between border-lime-400 border-solid border-y-2 text-center">
                    <button className='w-5 h-4.5 border-lime-400 border-solid border-x-2'>
                    <IoIosArrowUp className='w-4'/>
                    </button>
                    <div className="w-6 h-4.5 text-center text-slate-400">5</div>
                    <button className='w-5 h-4.5 border-lime-400 border-solid border-x-2'>
                    <IoIosArrowDown className='w-4'/>
                    </button>
                    </div>
                </div>
                <div className="tombol flex items-center justify-around">
                <button className="rounded-full w-12 h-5.5 bg-slate-400 text-xs text-white">Buy</button>
                <button className="rounded-full w-12 h-5.5 bg-white text-xs text-slate-400 border-2 border-slate-400">+Cart</button>
                </div>
            </div>
        </div>
    )
}
export default DashboardCard;