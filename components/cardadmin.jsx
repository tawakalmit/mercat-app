import React, {useState} from 'react';
import Image from 'next/image';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Link from 'next/link';
const CardAdmin = () =>{
    const [counter, setCounter]=useState(5);

    const increment =()=>{
        setCounter(counter+1);
    }
    
    const decrement =()=>{
        if(counter>=1){
        setCounter(counter-1);
        }
    }

    return(
        <div className="mb-5">
            <div className="card h-auto w-36 border-solid border-2 border-lime-400 rounded-3xl p-2">
                <Image src="/tashitam.jpg" width="129" height="112" className='rounded-t-2xl' alt='pic'/>
                <h2 className="text-sm font-bold mt-1.5">Mens Bag</h2>
                <h3 className="text-[0.6rem] font-medium text-lime-400 mt-1.5">IDR 20.000</h3>
                <div className="mt-0.5 w-full h-auto flex justify-between gap-0">
                <p className="text-xs font-medium">Stock</p>
                <p className="text-xs font-medium">{counter}</p>
                </div>
                <div className="mt-1.5 flex items-center justify-around">
                <Link href='/admin/editproduct'><button className="rounded-full w-12 h-5.5 bg-slate-400 text-xs text-white">Edit</button></Link>
                <button className="rounded-full w-12 h-5.5 bg-white text-xs text-slate-400 border-2 border-slate-400">Delete</button>
                </div>
            </div>
        </div>
    )
}
export default CardAdmin;