import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Logo from "../asset/mercat-final.png";
import Image from "next/image";
import CustomInput from "../components/CustomInput";
import Button from "../components/Button";
import Link from "next/link";

function Register() {
  const router = useRouter();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (username && email && address && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [username, email, address, password]);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      username,
      email,
      address,
      password,
    };
    var requestOption = {
      method: "POST",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    fetch("https://virtserver.swaggerhub.com/DianNurdiana-alt/E-STORE/1.0.0/users", requestOptions).then((response) => response.json());
    console
      .log(response)
      .then((result) => {
        const { message, data } = result;
        if (result.code === 200) {
          if (data) {
            router.push("/login");
          }
        }
        alert(message);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => setLoading(false));
  };

  // export default function register() {
  return (
    <div className="flex align-items:center w-full min-h-screen bg-cover bg-[url('../asset/mercat.jpg')]">
      <div className="w-8/12 m-auto flex justify-between items-center md:h-fit">
        <div className="hidden w-1/2 md:block 2xl:scale-150">
          <Image src={Logo} className="w-80" alt="logo" />
          <h2 className="text-3xl font-semibold text-white text-center">One stop online shop</h2>
        </div>
        <div className="p-6 rounded-2xl bg-transparent h-fit w-80 flex flex-col md:bg-white 2xl:scale-150">
          <h1 className="text-white font-semibold text-2xl mx-auto md:text-black">Register</h1>
          <h2 className="text-center text-white text-md opacity-70 mx-auto mb-6 md:text-black">Be a part of our large community</h2>
          <form>
            <CustomInput ptext="User Name" id="input-username" type="text" placeholder="mugiwara" />

            <CustomInput ptext="Email" id="input-email" type="email" placeholder="mugiwara@yahoo.com" />

            <CustomInput ptext="Address" id="input-address" type="text" placeholder="East Blue" />

            <CustomInput ptext="Password" id="input-password" type="password" placeholder="Enter Password" />

            <div className="flex flex-row justify-around mt-2 md:justify-center">
              <input type="checkbox" className="mr-2" />
              <p className="text-white text-md opacity-70 md:text-black">I accept the policy and terms</p>
            </div>
            <div className="flex flex-row items-center justify-center">
              <Button kelas={"bg-[#9ACD32] text-white font-bold py-2 px-4 rounded-full w-40 mt-2 md: rounded w-32"} label="Submit" />
            </div>
          </form>
          <div className="flex flex-row justify-between mt-2">
            <p className="text-white text-xs md:text-black">Have an account?</p>
            <Link href="/login">
              <p className="text-[#9ACD32] text-xs cursor-pointer md:">Login Now</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
// 65BDBE
