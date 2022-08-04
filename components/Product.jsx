import React from 'react'
import Image from 'next/image'
import Gambar from '../asset/peoples-icon.png'

export default function Product() {
  return (
    <div className='h-fit text-center mx-auto w-56 flex-col border-solid border-2 border-lime-400 rounded-2xl p-2'>
        <Image src={Gambar} alt='pic' />
        <h2 className='text-2xl'>Mens Bag</h2>
        <p className='text-[#9ACD32]'>IDR 20.000</p>
        <p>Quantity : 5</p>
    </div>
  )
}
