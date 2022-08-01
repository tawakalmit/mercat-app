import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import Image from 'next/image';

const EditProduct =()=>{
    return(
        <>
        <div className="w-full h-none bg-lime-400 flex justify-between py-5 px-7">
            <div className="flex justify-start">
            <IoIosArrowBack className="h-11 w-auto flex justify-center text-white"/>
            <h2 className="text-white text-2xl font-semibold mt-1 ml-4">Edit Product</h2>
            </div>
        </div>
        <div className="pt-8 px-12 w-full h-auto">
            <p className='font-semibold text-sm mb-2.5'>IMAGE PRODUCT</p>
            <div className="w-32 h-20 border-lime-400 border-2 rounded-xl border-solid grid place-items-center">
            <Image src="/tashitam.jpg" width="98" height="66" className='rounded-xl'/>
            </div>
            <p className='font-semibold text-sm my-2'>PRODUCT NAME</p>
            <input className="w-64 h-11 border-2 rounded-xl border-solid border-lime-400 py-2.5 px-3 text-lg sm:w-full md:w-full lg:w-full" type="text" placeholder="Product Name"/>
            <p className='font-semibold text-sm mt-3 mb-2'>PRICE</p>
            <input className="w-64 h-11 border-2 rounded-xl border-solid border-lime-400 py-2.5 px-3 text-lg sm:w-full md:w-full lg:w-full" type="text" placeholder="Price"/>
            <p className='font-semibold text-sm mt-3 mb-2'>QUANTITY</p>
            <input className="w-64 h-11 border-2 rounded-xl border-solid border-lime-400 py-2.5 px-3 text-lg sm:w-full md:w-full lg:w-full" type="text" placeholder="Quantity"/>
            <div className="w-full h-auto grid place-items-center mt-64 sm:mt-14 md:mt-14 lg:mt-14">
            <button className='w-40 h-10 bg-lime-400 text-white text-center font-bold text-lg rounded-3xl'>Save Changes</button>
            </div>
        </div>
        </>
    )
}
export default EditProduct;