import React, { useState } from "react";
import Image from "next/image";
import Gambar from "../asset/blank-image.png";
import Button from "./Button";
import { useRouter } from "next/router";

export default function ProductAdmin({ productphoto, productname, price, stock, onClick }) {
  const [loading, setLoading] = useState(true);
  const [productpic, setProductpic] = useState("");
  // const [productname, setProductname]= useState("");
  // const [price, setPrice] = useState(0);
  // const [stock, setStock] = useState(0);
  const route = useRouter();
  const myloader = ({src}) => {
    return `https://alta-project.s3.ap-southeast-1.amazonaws.com/${src}`
  }

  // const handleClick = () => {
  //   route.push("/editproduct");
  // };

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
    fetch(`https://projectbiasa.site/admin/products/{productid}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const { message } = result;
        console.log('ini console',message);
        // if (result.code === 200) {
          if (message) {
            route.push("/dasboard");
          // }
        }
        alert(message.toString());
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => setLoading(false));
  };

  const handleEdit = async (e) => {
    setLoading(true);
    e.preventDefault();
    // const body = {
    // };
    var requestOptions = {
      method: "POST",
      headers: { "Content-Type": "aplication/json" },
      // body: JSON.stringify(body),
    };
    fetch(`https://projectbiasa.site/admin/products/{productid}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const { message } = result;
        console.log('ini console',message);
        // if (result.code === 200) {
          if (message) {
            route.push("/editproduct/2");
          // }
        }
        alert(message.toString());
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="h-fit text-center m-5 w-36 flex-col border-solid border-2 border-[#94CD32] rounded-2xl p-2 md:w-56">
      <Image loader={myloader} src={productphoto} width={200} height={200}  alt="Gambar" />
      <h2 className="text-2xl">{productname}</h2>
      <p className="text-[#9ACD32]">IDR {price}</p>
      <p>Stock : {stock}</p>
      <div className="w-full flex justify-around mt-3">
        <Button
          kelas={"w-14 h-7 bg-[#65BDBE] text-white rounded-full md:w-20"}
          label="Edit"
          onClick={() => {
            route.push("/editproduct");
          }}
        />
        <button className="w-14 h-7 bg-[#e74c3c] text-white rounded-full md:w-20" onClick={(e) => handleDelete(e)}>
          Delete
        </button>
        {/* <Button
          kelas={"w-14 h-7 bg-[#e74c3c] text-white rounded-full md:w-20"}
          label="Delete"
          /> */}
      </div>
    </div>
  );
}
