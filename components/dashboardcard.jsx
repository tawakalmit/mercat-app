import React, {useState} from 'react';
import Image from 'next/image';
// import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Link from 'next/link';

const DashboardCard = ({productname, price, stok}) =>{


    return(
        <div className="mb-5">
            <div className="h-fit text-center m-5 w-36 flex-col border-solid border-2 border-[#94CD32] rounded-2xl p-2 md:w-56">
                <Image src="/tashitam.jpg" width="300" height="300" className='rounded-t-2xl' alt='image'/>
                <h2 className="text-2xl">{productname}</h2>
                <h3 className="text-[#9ACD32] text-m">IDR {price}</h3>
                <div className="mt-0.5 w-full h-auto flex justify-between gap-0">
                    <p className="text-xs font-medium">Stock</p>
                    <p className="text-xs font-medium">{stok}</p>
                </div>
                <div className="mt-1.5 flex items-center justify-around">
                
                <button className="rounded-full w-12 h-5.5 bg-[#65BDBE] text-xs text-white border-2 md:w-20 h-7">+Cart</button>
                </div>
            </div>
        </div>
    )
}
export default DashboardCard;