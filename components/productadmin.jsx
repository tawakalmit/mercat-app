import React from 'react'
import Image from 'next/image'
import Gambar from '../asset/blank-image.png'
import Button from './Button'
import { useRouter } from 'next/router'

export default function ProductAdmin({productname, price, stock}) {

  const route = useRouter();

  const handleClick = () => {
    route.push("/editproduct")
  }

  return (
    <div className='h-fit text-center m-5 w-36 flex-col border-solid border-2 border-[#94CD32] rounded-2xl p-2 md:w-56'>
        <Image src={Gambar} />
        <h2 className='text-2xl'>{productname}</h2>
        <p className='text-[#9ACD32]'>IDR {price}</p>
        <p>Stock : {stock}</p>
        <div className='w-full flex justify-around mt-3'>
          <Button
          kelas={"w-14 h-7 bg-[#65BDBE] text-white rounded-full md:w-20"}
          label="Edit"
          onClick={(e) => handleClick(e)}
          />
          <Button
          kelas={"w-14 h-7 bg-[#e74c3c] text-white rounded-full md:w-20"}
          label="Delete"
          />
        </div>
    </div>
  )
}
