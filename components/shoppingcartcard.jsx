import React, {useState} from 'react';
import Image from 'next/image';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
const DashboardCard = () =>{
    const [counter, setCounter]=useState(0);
    const [stock, setStock]=useState(10);
    const [harga]=useState(20000)
    const [subtotal,setSubtotal]=useState(0);

        
        const increment =()=>{
            if(stock>=1){
                setCounter(counter+1);
                // setStock(stock-1);
                setSubtotal((counter+1)*harga);
            }
        }
        
        const decrement =()=>{
            if(counter>=1){
            setCounter(counter-1);
            // setStock(stock+1);
            setSubtotal((counter-1)*harga)}
        }
    

    return(
        <div className="mb-5">
            <div className="card h-auto w-36 border-solid border-2 border-lime-400 rounded-3xl p-2">
                <Image src="/tashitam.jpg" width="129" height="112" className='rounded-t-2xl'/>
                <h2 className="text-sm font-bold mt-1.5">Men's Bag</h2>
                <h3 className="text-[0.6rem] font-medium text-lime-400 mt-1.5">IDR 20.000</h3>
                <div className="mt-0.5 w-full h-auto flex justify-between gap-0">
                <p className="text-xs font-medium">Stock</p>
                <p className="text-xs font-medium">{stock}</p>
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
                    <div className="mt-0.5 w-full h-auto flex justify-between gap-0">
                    <p className="text-xs font-medium">Subtotal</p>
                    <p className="text-xs font-medium">IDR {subtotal}</p>
                    </div>
            </div>
        </div>
    )
}
export default DashboardCard;