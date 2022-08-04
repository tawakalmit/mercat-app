import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { IoChevronBackSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import UpdateUserInfo from "../components/UpdateUserInfo";
import Button from "../components/Button";

function Editprofile() {
  const route = useRouter();
  const [photoprofile, setPhotoprofile] = useState(0);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  // useEffect(() => {
  //   handleEdit();
  // }, []);

  const handleEdit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      photoprofile,
      username,
      email,
      address,
      password,
    };
    var requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "aplication/json" },
      body: JSON.stringify(body),
    };
    fetch("https://virtserver.swaggerhub.com/DianNurdiana-alt/E-STORE/1.0.0/users", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const { message } = result;
        if (result.code === 200) {
          if (message) {
            route.push("/editprofile");
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
    <>
      <div className="w-full h-none bg-[#94CD32] flex justify-start p-2 cursor-pointer">
        <div className="flex items-center">
            <IoChevronBackSharp onClick={()=>{route.push('/user')}} size={40} color="white" />
          <p className="text-white text-xl">Profile</p>
        </div>
      </div>
      <form onSubmit={(e) => handleEdit(e)} className="flex flex-col items-center mt-10 md:w-4/12 mx-auto">

        <CgProfile size={100} />
        

        <UpdateUserInfo ptext="User Name" id="update-username" type="text" placeholder="mugiwara" />

        <UpdateUserInfo ptext="Email" id="update-email" type="email" placeholder="mugiwara@yahoo" />

        <UpdateUserInfo ptext="Address" id="update-adress" type="text" placeholder="East blue" />

        <Button kelas={"w-40 h-10 rounded-full mx-auto bg-[#94CD32] text-white mt-14"} label="Save Changes" />
      </form>
    </>
  );
}
export default Editprofile;
