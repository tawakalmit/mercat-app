import React from "react";
import Logo from "../asset/mercat-final.png";
import Image from "next/image";
import CustomInput from "../components/CustomInput";
import Button from "../components/Button";
import Link from "next/link";

export default function login() {
  return (
    <div className="flex align-items:center w-full min-h-screen bg-cover bg-[url('../asset/mercat.jpg')]">
      <div className="w-8/12 m-auto flex justify-between items-center md:h-fit">
        <div className="hidden w-1/2 md:block">
          <Image src={Logo} alt="Logo" className="w-80" />
          <h2 className="invisible text-3xl font-semibold text-white text-center md:visible">
            One stop online shop
          </h2>
        </div>
        <div className="p-6 rounded-2xl bg-transparent h-fit w-80 flex flex-col mt-10 md:bg-white 2xl:scale-150">
          <div className="md:hidden">
            <Image src={Logo} alt="Logo" />
          </div>
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

            <div className="flex flex-row justify-around mt-2 md:justify-center"></div>
            <div className="flex flex-row items-center justify-center">
              <Button
                kelas={
                  "bg-[#9ACD32] text-white font-bold py-2 px-4 rounded-full w-40 mt-2 md: rounded w-32"
                }
                label="Login"
              />
            </div>
          </form>
          <div className="flex flex-row justify-between mt-2">
            <p className="text-white text-xs md:text-black">Not Registered?</p>
            <Link href="/register">
              <p className="text-[#9ACD32] text-xs cursor-pointer md:">
                Create an account
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
