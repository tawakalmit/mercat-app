import React from "react";
import CustomInput from "../components/CustomInput";
import Button from "../components/Button";
import Link from "next/link";
import NavBack1 from "../components/NavBack1";
import Dropzone from "../components/DropZone";

export default function addproduct() {
  return (
    <div>
      <NavBack1 />
      <div className="flex flex-row items-center justify-center mt-10">
        <form>
          <Dropzone />
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
