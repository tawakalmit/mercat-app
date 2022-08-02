import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import CustomInput from "../components/CustomInput";
import Button from "../components/Button";
import Link from "next/link";
import Dropzone from "../components/DropZone";
import Layout from "../components/Layout";

function Addproduct() {
  const router = useRouter();
  const [productphoto, setProductphoto] = useState("");
  const [productname, setProductname] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (productphoto && productname && price && quantity) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [productphoto, productname, price, quantity]);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      productphoto,
      productname,
      price,
      quantity,
    };
    var requestOptions = {
      method: "POST",
      headers: { "Content-Type": "aplication/json" },
      body: JSON.stringify(body),
    };
    fetch("https://virtserver.swaggerhub.com/DianNurdiana-alt/E-STORE/1.0.0/products/admin", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const { message, data } = result;
        if (result.code === 200) {
          if (data) {
            router.push("/dasboard");
          }
        }
        alert(message);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => setLoading(False));
  };

  return (
    <Layout>
      <div className="flex flex-row items-center justify-center mt-10">
        <form className="flex flex-col gap-4 min-w-[40%]" onSubmit={(e) => handleSubmit(e)}>
          <Dropzone />
          <CustomInput ptext="Name Product" id="input-product" type="name product" placeholder="product" onChange={(e) => setProductname(e.target.value)} />

          <CustomInput ptext="Price" id="input-price" type="price" placeholder="price" onChange={(e) => setPrice(e.target.value)} />

          <CustomInput ptext="Quantity" id="input-quantity" type="text" placeholder="0" onChange={(e) => setQuantity(e.target.value)} />

          <div className="flex flex-row items-center justify-center pt-10">
            <Button kelas={"bg-[#9ACD32] text-white font-bold py-2 px-4 rounded-full w-50 mt-2 md: rounded w-35"} label="Add Product" />
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default Addproduct;
// export default function addproduct() {
//   return (
//     <div>
//       <NavBack />
//       <div className="flex flex-row items-center justify-center mt-10">
//         <form>
//           <Dropzone />
//           <CustomInput ptext="Name Product" id="input-product" type="text" placeholder="product" />

//           <CustomInput ptext="Price" id="input-price" type="price" placeholder="price" />

//           <CustomInput ptext="Quantity" id="input-quantity" type="text" placeholder="0" />

//           <div className="flex flex-row items-center justify-center pt-10">
//             <Button kelas={"bg-[#9ACD32] text-white font-bold py-2 px-4 rounded-full w-50 mt-2 md: rounded w-35"} label="Add Product" />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
