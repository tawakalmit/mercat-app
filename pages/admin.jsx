import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { TokenContext } from '../utils/context'

import Logo from '../asset/mercat-final.png'
import Image from 'next/image'
import CustomInput from '../components/CustomInput'
import Button from '../components/Button'

function Login() {
  const { token, setToken } = useContext(TokenContext);
  const [code, setcode] = useState('')
  const [role, setrole] = useState('')
  const router = useRouter();
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    if (code === 200) {
      if (role === "admin") {
        router.push("/dasboard");
      } else {
        router.push("/productpage");
      }
    } else {
      if (username && password) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }
  }, [token, username, password]);


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
      "https://projectbiasa.site/login",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        const { code, message, data } = result;
        if (code === 200) {
          const { token } = data;
          localStorage.setItem("token", token);
          setToken(token);
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
                    <div className="hidden w-1/2 md:block">
                        <Image src={Logo} className="w-80" alt='logo'/>
                        <h2 className="invisible text-3xl font-semibold text-white text-center md:visible">One stop online shop</h2>
                    </div>
                    <div className="p-6 rounded-2xl bg-transparent h-fit w-80 flex flex-col mt-10 md:bg-white 2xl:scale-150">
                        <div className='md:hidden'><Image src={Logo} alt='logo' /></div>
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
                        <div className="flex flex-row justify-between mt-2">
                            <p className="text-white text-xs md:text-black">Not Registered?</p>
                            <Link href="/register"><p className="text-[#9ACD32] text-xs cursor-pointer md:">Create an account</p></Link>
                        </div>
                    </div>
                </div>
            </div>
  )
}


export default Login