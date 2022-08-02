import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { TokenContext } from '../utils/context'

import Logo from '../asset/mercat-final.png'
import Image from 'next/image'
import CustomInput from '../components/CustomInput'
import Button from '../components/Button'

export default function login() {

  const router = useRouter();
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
      if (username && password) {
        setDisabled(false);
      } else {
        setDisabled(true)
      }
  }, [username, password])

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      username,
      password,
    };
    var requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    fetch(
      "https://virtserver.swaggerhub.com/DianNurdiana-alt/E-STORE/1.0.0/login",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        const { code, message, data } = result;
        if (code === 200) {
          router.push("/dasboard");
        }
        alert(message);
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => setLoading(false));
  };

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
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <CustomInput 
                            ptext="User Name"
                            id="input-username"
                            type="text"
                            placeholder="mugiwara"
                            onChange={(e) => setUserName(e.target.value)}
                            />

                            <CustomInput 
                            ptext="Password"
                            id="input-password"
                            type="password"
                            placeholder="Enter Password"
                            onChange={(e) => setPassword(e.target.value)}
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
