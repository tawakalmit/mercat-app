import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/router";

const DashboardCard = ({ productname, stock, price, subtotal }) => {
  // const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState(true);
  const route = useRouter();
  const [quantity, setQuantity] = useState(0);
  const [productid, setProductid] = useState(0);
  const handleDelete = async (e) => {
    setLoading(true);
    e.preventDefault();

    var requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "aplication/json" },
    };
    fetch(`https://virtserver.swaggerhub.com/DianNurdiana-alt/E-STORE/1.0.0/carts/{productid}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const { message } = result;
        if (result.code === 200) {
          if (message) {
            route.push("/shoppingcart");
          }
        }
        alert(message);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => setLoading(false));
  };

  const handleEdit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      productid,
      quantity,
    };
    var requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "aplication/json" },
      body: JSON.stringify(body),
    };
    fetch("https://virtserver.swaggerhub.com/DianNurdiana-alt/E-STORE/1.0.0/carts", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const { message } = result;
        // if (result.code === 200) {
        //   if (message) {
        //     route.push("/editprofile");
        //   }
        // }
        // setQuantity(quantity);
        alert(message);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => setLoading(false));
  };

  const increment = () => {
    if (stock >= 1 && quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="mb-5">
      <div className="card h-auto w-36 border-solid border-2 border-lime-400 rounded-3xl p-2">
        <Image src="/tashitam.jpg" width="129" height="112" className="rounded-t-2xl" alt="pic" />
        <h2 className="text-sm font-bold mt-1.5">{productname}</h2>
        <h3 className="text-[0.6rem] font-medium text-lime-400 mt-1.5">{price}</h3>
        <div className="mt-0.5 w-full h-auto flex justify-between gap-0">
          <p className="text-xs font-medium">Stock</p>
          <p className="text-xs font-medium">{stock}</p>
        </div>
        <div className="mt-0.5 w-full h-auto flex justify-between">
          <p className="text-xs font-medium">Quantity</p>
          <div className="gap-x-0 flex justify-between border-lime-400 border-solid border-y-2 text-center">
            <button className="w-5 h-4.5 border-lime-400 border-solid border-x-2">
              <IoIosArrowUp onClick={increment} className="w-4" />
            </button>
            <div className="w-6 h-4.5 text-center text-slate-400">{quantity}</div>
            <button className="w-5 h-4.5 border-lime-400 border-solid border-x-2">
              <IoIosArrowDown onClick={decrement} className="w-4" />
            </button>
          </div>
        </div>
        <div className="mt-0.5 w-full h-auto flex justify-between gap-0">
          <p className="text-xs font-medium">Subtotal</p>
          <p className="text-xs font-medium">IDR {subtotal}</p>
        </div>

        <div className="flex justify-center">
          <button className="w-11 h-5 bg-[#65BDBE] text-white text-xs rounded-full md:w-20" onClick={(e) => handleEdit(e)}>
            Edit
          </button>

          <button className="w-11 h-5 bg-[#e74c3c] ml-2.5 text-white text-xs rounded-full md:w-20" onClick={(e) => handleDelete(e)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default DashboardCard;
