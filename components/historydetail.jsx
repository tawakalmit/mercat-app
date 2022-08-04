import React from 'react'
import Image from 'next/image'
import Gambar from '../asset/peoples-icon.png'

export default function Historydetail({address, productname, productpic, quantity, totalprice, unitprice}) {
  return (
    <div className='mt-5 w-11/12 mx-auto items-center md:w-5/12'>
      <div className='h-fit text-center mx-auto w-56 flex-col border-solid border-2 border-lime-400 rounded-2xl p-2'>
        <Image src={Gambar} />
        <h2 className='text-2xl'>{productname}</h2>
        <p className='text-[#9ACD32]'>IDR {unitprice}</p>
        <p>Quantity : {quantity}</p>
      </div>
      <div className='w-full mt-10 mb-5 mx-auto flex justify-between'>
        <h2>Total</h2>
        <p>IDR {totalprice}</p>
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
        <div className='w-32'><p className='text-xs text-justify'>{address}</p></div>
      </div>
    </div>
  )
}
