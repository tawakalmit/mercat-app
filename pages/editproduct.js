import React from "react";
import CustomInput from "../components/CustomInput";
import Button from "../components/Button";
import Link from "next/link";
import { IoChevronBackSharp } from "react-icons/io5";

export default function addproduct() {

  return (
    <div>
      <div className="w-full h-none bg-[#94CD32] flex justify-start p-2 cursor-pointer">
        <Link href="/dasboard"><div className="flex items-center">
          <IoChevronBackSharp size={40} color="white" />
          <p className="text-white text-xl">Dashboard</p>
        </div></Link>
      </div>
      <div className="flex flex-row items-center justify-center mt-10">
        <form>
          
          <CustomInput ptext="Name Product" id="input-product" type="text" placeholder="product" />

          <CustomInput ptext="Price" id="input-price" type="email" placeholder="price" />

          <CustomInput ptext="Quantity" id="input-quantity" type="text" placeholder="0" />

          <div className="flex flex-row items-center justify-center pt-10">
            <Button kelas={"bg-[#9ACD32] text-white font-bold py-2 px-4 rounded-full w-50 mt-2 md: rounded w-35"} label="Save Changes" />
          </div>
        </form>
      </div>
    </div>
  );
}
