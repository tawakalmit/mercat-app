import React, { useState } from "react";

import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import Link from "next/link";

import Button from "./Button";
import { useRouter } from "next/router";

export default function Userhighlight({ username, photoprofile }) {
  const [loading, setLoading] = useState(true);
  const route = useRouter();

  const handleDelete = async (e) => {
    setLoading(true);
    e.preventDefault();
    // const body = {
    // };
    var requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "aplication/json" },
      // body: JSON.stringify(body),
    };
    fetch(`https://virtserver.swaggerhub.com/DianNurdiana-alt/E-STORE/1.0.0/users`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        const { message } = result;
        if (result.code === 200) {
          if (message) {
            route.push("/login");
          }
        }
        alert(message);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex w-3/6 mx-auto mt-5 items-center justify-center">
      {/* <CgProfile color='#2c3e50' size={60} /> */}
      <image src={photoprofile} alt="photoprofile" />
      <div className="flex flex-col justify-center ml-2">
        <h1 className="text-3xl">{username}</h1>
        <div className="flex items-center mt-1 ">
          <Link href={"/editprofile"}>
            <Button kelas={"bg-[#65BDBE] w-28 h-6 rounded-full text-[#ecf0f1] cursor-pointer"} label="edit profile" />
          </Link>

          <Button kelas={"bg-[#BB1B0B] w-28 h-6 rounded-full text-[#ecf0f1] cursor-pointer ml-2"} onClick={(e) => handleDelete(e)} label="delete profile" />

          <Link href={"/login"}>
            <FiLogOut className="ml-3 cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
}
