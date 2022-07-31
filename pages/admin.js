import React from 'react'
import Logo from '../asset/mercat-final.png'
import Image from 'next/image'
import CustomInput from '../components/CustomInput'
import Button from '../components/Button'
import Link from 'next/link'

export default function login() {
  return (
    <div className="flex align-items:center w-full min-h-screen bg-cover bg-[url('../asset/mercat.jpg')]">
                <div className="w-8/12 m-auto flex justify-between items-center md:h-fit">
                    <div className="hidden w-1/2 md:block 2xl:scale-150">
                        <Image src={Logo} className="w-80" />
                        <h2 className="text-3xl font-semibold text-white text-center">One stop online shop</h2>
                    </div>
                    <div className="p-6 rounded-2xl bg-transparent h-fit w-80 flex flex-col mt-10 md:bg-white 2xl:scale-150">
                        <h1 className='text-white font-semibold text-2xl mx-auto md:text-black'>Administrator</h1>
                        <h2 className='text-center text-white text-md opacity-70 mx-auto mb-6 md:text-black'></h2>
                        <form>
                            <CustomInput 
                            ptext="User Name"
                            id="input-username"
                            type="text"
                            placeholder="mugiwara"
                            />

                            <CustomInput 
                            ptext="Password"
                            id="input-password"
                            type="password"
                            placeholder="Enter Password"
                            />

                          <div className='flex flex-row justify-around mt-2 md:justify-center'>
                          </div>
                          <div className='flex flex-row items-center justify-center'>
                          <Button kelas={"bg-[#9ACD32] text-white font-bold py-2 px-4 rounded-full w-40 mt-2 md: rounded w-32"} label="Login" />
                          </div>
                        </form>
                    </div>
                </div>
            </div>
  )
}
