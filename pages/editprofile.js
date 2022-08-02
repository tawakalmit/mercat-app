import React from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import UpdateUserInfo from "../components/UpdateUserInfo";
import Button from "../components/Button";
import Link from "next/link";

export default function editprofile() {
  return (
    <>
      <div className="w-full h-none bg-[#94CD32] flex justify-start p-2 cursor-pointer">
        <div className="flex items-center">
          <Link href="/user">
            <IoChevronBackSharp size={40} color="white" />
          </Link>
          <p className="text-white text-xl">Profile</p>
        </div>
      </div>
      <form className="flex flex-col items-center mt-10 md:w-4/12 mx-auto">
        <CgProfile size={100} />
        <UpdateUserInfo
          ptext="User Name"
          id="update-username"
          type="text"
          placeholder="mugiwara"
        />
        <UpdateUserInfo
          ptext="Email"
          id="update-email"
          type="email"
          placeholder="mugiwara@yahoo"
        />
        <UpdateUserInfo
          ptext="Address"
          id="update-adress"
          type="text"
          placeholder="East blue"
        />
        <Button
          kelas={"w-40 h-10 rounded-full mx-auto bg-[#94CD32] text-white mt-14"}
          label="Save Changes"
        />
      </form>
    </>
  );
}
