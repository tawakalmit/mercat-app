import React from 'react'

import { CgProfile } from "react-icons/cg";
import {FiLogOut} from "react-icons/fi"
import Link from 'next/link';

import Button from './Button';

export default function Userhighlight({username, photoprofile}) {
  return (
    <div className='flex w-3/6 mx-auto mt-5 items-center justify-center'>
        {/* <CgProfile color='#2c3e50' size={60} /> */}
        <image src={photoprofile} alt='photoprofile'/>
        <div className='flex flex-col justify-center ml-2'>
            <h1 className='text-3xl'>{username}</h1>
            <div className='flex items-center mt-1'>
                <Link href={"/editprofile"}><Button kelas={"bg-[#65BDBE] w-28 h-6 rounded-full text-[#ecf0f1] cursor-pointer"} label="edit profile" /></Link>
                <Link href={"/login"}><FiLogOut className='ml-3 cursor-pointer' /></Link>
            </div>
            
        </div>
    </div>
  )
}
