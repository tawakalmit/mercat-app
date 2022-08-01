import React from 'react'
import { CgProfile } from "react-icons/cg";
import UpdateUserInfo from './UpdateUserInfo';
import Button from './Button';

export default function EditProfileCard() {
  return (
    <form className='flex flex-col items-center'>
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
  )
}
