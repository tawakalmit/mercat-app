import React, {useState} from 'react';
import Image from 'next/image';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Link from 'next/link';

const DashboardCard = ({productname, price, stok}) =>{

    const [counter, setCounter]=useState(0);
    
    const increment =()=>{
        setCounter(counter+1);
    }
    
    const decrement =()=>{
        setCounter(counter-1);
    }

    return(
        <div className="mb-5">
            <div className="h-fit text-center m-5 w-36 flex-col border-solid border-2 border-[#94CD32] rounded-2xl p-2 md:w-56">
                <Image src="/tashitam.jpg" width="300" height="300" className='rounded-t-2xl'/>
                <h2 className="text-2xl">{productname}</h2>
                <h3 className="text-[#9ACD32] text-m">IDR {price}</h3>
                <div className="mt-0.5 w-full h-auto flex justify-between gap-0">
                    <p className="text-xs font-medium">Stock</p>
                    <p className="text-xs font-medium">{stok}</p>
                </div>
                <div className="mt-0.5 w-full h-auto flex justify-between">
                    <p className="text-xs font-medium">Quantity</p>
                    <div className="gap-x-0 flex justify-between border-lime-400 border-solid border-y-2 text-center">
                        <button className='w-5 h-4.5 border-lime-400 border-solid border-x-2' onClick={increment}>
                        <IoIosArrowUp className='w-4'/>
                        </button>
                        <div className="w-6 h-4.5 text-center text-slate-400">{counter}</div>
                        <button className='w-5 h-4.5 border-lime-400 border-solid border-x-2'>
                            <IoIosArrowDown className='w-4' onClick={decrement}/>
                        </button>
                    </div>
                </div>
                <div className="mt-1.5 flex items-center justify-around">
                <Link href='/user/shoppingcart'><button className="rounded-full w-12 h-5.5 bg-slate-400 text-xs text-white md:w-20 h-7">Buy</button></Link>
                <button className="rounded-full w-12 h-5.5 bg-white text-xs text-slate-400 border-2 border-slate-400 md:w-20 h-7">+Cart</button>
                </div>
            </div>
        </div>
    )
}
export default DashboardCard;