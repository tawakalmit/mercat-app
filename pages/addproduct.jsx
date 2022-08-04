import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { IoChevronBackSharp } from "react-icons/io5";
import CustomInput from "../components/CustomInput";
import Button from "../components/Button";
import Image from "next/image";

function Addproduct() {
  const route = useRouter();
  const [objSubmit, setObjSubmit] = useState("")
  const [productid, setProdctid] = useState(0);
  const [productpic, setProductpic] = useState("");
  const [productname, setProductname] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   var requestOptions = {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
  //     },
  //   };

  //   fetch(
  //     "https://projectbiasa.site/products",
  //     requestOptions
  //   )
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log(result)
  //       // const { message, code, data } = result;
  //       // const { email, first_name, last_name, image } = data;
  //       // if ([401, 403].includes(code)) {
  //       //   localStorage.removeItem("token");
  //       //   setToken("0");
  //       //   router.push("/login");
  //       //   alert(message);
  //       // } else {
  //       //   setEmail(email);
  //       //   setFirstName(first_name);
  //       //   setLastName(last_name);
  //       //   const insertHTTPS = image.replace("http", "https");
  //       //   setImage(insertHTTPS);
  //       // }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //     .finally(() => setLoading(false));
  // };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    for (const key in objSubmit) {
      formData.append(key, objSubmit[key]);
    }
    var requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: formData,
    };

    fetch("https://projectbiasa.site/admin/products", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const { message } = result;
        alert(message);
        setObjSubmit({});
      })
      .catch((error) => console.log("error", error))
      .finally(() => setLoading(false));
  };

  const handleChange = (value, key) => {
    let temp = { ...objSubmit };
    temp[key] = value;
    setObjSubmit(temp);
  };

  return (
    <>
    <div className="w-full h-none bg-[#9ACD32] flex p-2">
        <IoChevronBackSharp onClick={()=>{route.push('/dasboard')}}className="h-8 w-auto justify-center ml-4 text-white" />

      <p className="flex sm:justify-center text-white font-bold ml-4">Add Product </p>
    </div>

      <div className="flex flex-row items-center justify-center mt-10">
        <form className="flex flex-col gap-4 min-w-[40%]" onSubmit={(e) => handleSubmit(e)}>

          <Image src={productpic} alt={productpic} width={200} height={200} />

          <CustomInput ptext="Name Product" id="input-product" type="name product" placeholder="product" onChange={(e) => handleChange(e.target.value, "productname")} />

          <CustomInput ptext="Price" id="input-price" type="price" placeholder="price" onChange={(e) => handleChange(e.target.value, "price")} />

          <CustomInput ptext="Stock" id="input-stock" type="text" placeholder="0" onChange={(e) => handleChange(e.target.value, "stock")} />

          <input type='file' id="input-file" onChange={(e) => {
                setProductpic(URL.createObjectURL(e.target.files[0]));
                handleChange(e.target.files[0], "productpic");
              }}/>
          <div className="flex flex-row items-center justify-center pt-10">
            <Button kelas={"bg-[#9ACD32] text-white font-bold py-2 px-4 rounded-full w-50 mt-2 md: rounded w-35"} label="Add Product" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Addproduct;
