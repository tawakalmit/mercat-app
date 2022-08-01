import React from 'react'
import { IoChevronBackSharp } from "react-icons/io5";
import Link from 'next/link';
import Product from '../components/Product';

export default function detailHistoryOrder() {
  return (
    <>
    <div className='w-full h-none bg-[#94CD32] flex justify-start p-2 cursor-pointer'>
      <Link href={"/user"}><div className='flex items-center'>
      <IoChevronBackSharp size={40} color="white" />
      <p className='text-white text-xl'>Profile</p>
      </div></Link>
    </div>
    <div className='mt-5 w-11/12 mx-auto items-center md:w-5/12'>
      <Product />
      <div className='w-full mt-10 mb-5 mx-auto flex justify-between'>
        <h2>Total</h2>
        <p>IDR 100.000</p>
      </div>
      <div className='w-full mx-auto mb-5 flex justify-between'>
        <h2>Payment Method</h2>
        <p>BCA Virtual Account</p>
      </div>
      <div className='w-full mx-auto mb-5 flex justify-between'>
        <h2>Penerima</h2>
        <p>Mugiwara</p>
      </div>
      <div className='w-full mx-auto mb-5 flex justify-between'>
        <h2>Adress</h2>
        <div className='w-32'><p className='text-xs text-justify'>TB Simatupang, Jl Nangka Raya No. 58 C RW 05 Tanjung Baru Kec.Jagakarsa Kota Jaksel DKI Jakarta</p></div>
      </div>
    </div>
    </>
  )
}
