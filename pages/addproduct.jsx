import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { IoChevronBackSharp } from "react-icons/io5";
import CustomInput from "../components/CustomInput";
import Button from "../components/Button";

function Addproduct() {
  const route = useRouter();
  const [productid, setProdctid] = useState(0);
  const [productpic, setProductpic] = useState("");
  const [productname, setProductname] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (productpic && productname && price && stock) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [productpic, productname, price, stock]);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      productpic,
      productname,
      price,
      stock,
    };
    var requestOptions = {
      method: "POST",
      headers: { "Content-Type": "aplication/json" },
      body: JSON.stringify(body),
    };
    fetch("https://projectbiasa.site/admin/products", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const { message } = result;
        if (result.code === 200) {
          if (message) {
            route.push("/dasboard");
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
    <div className="w-full h-none bg-[#9ACD32] flex p-2">
        <IoChevronBackSharp onClick={()=>{route.push('/dasboard')}}className="h-8 w-auto justify-center ml-4 text-white" />

      <p className="flex sm:justify-center text-white font-bold ml-4">Add Product </p>
    </div>

      <div className="flex flex-row items-center justify-center mt-10">
        <form className="flex flex-col gap-4 min-w-[40%]" onSubmit={(e) => handleSubmit(e)}>
          <CustomInput ptext="Name Product" id="input-product" type="name product" placeholder="product" onChange={(e) => setProductname(e.target.value)} />

          <CustomInput ptext="Price" id="input-price" type="price" placeholder="price" onChange={(e) => setPrice(e.target.value)} />

          <CustomInput ptext="Stock" id="input-stock" type="text" placeholder="0" onChange={(e) => setStock(e.target.value)} />

          <input type='file' id="input-file"/>
          <div className="flex flex-row items-center justify-center pt-10">
            <Button kelas={"bg-[#9ACD32] text-white font-bold py-2 px-4 rounded-full w-50 mt-2 md: rounded w-35"} label="Add Product" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Addproduct;
