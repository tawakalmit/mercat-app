import React, { useState, useEffect } from "react";
import NavBar from "../components/navbar";
import ShoppingCartCard from "../components/shoppingcartcard";
import { useRouter } from "next/router";

const ShoppingCart = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [price, setPrice] = useState(0);
  const [status, setStatus] = useState(0);
  const [productid, setProductid] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const route = useRouter();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    var requestOptions = {
      method: "get",
      headers: { "Content-Type": "application/json" },
    };
    fetch("https://virtserver.swaggerhub.com/DianNurdiana-alt/E-STORE/1.0.0/carts", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const { data } = result;
        setDatas(data);
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => setLoading(false));
  };

  const handleOrder = async (e) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      productid,
      price,
      quantity,
      subtotal,
      status,
    };
    var requestOptions = {
      method: "POST",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    fetch("https://virtserver.swaggerhub.com/DianNurdiana-alt/E-STORE/1.0.0/orders", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const { message } = result;
        alert(message);
        route.push("/checkout");
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => setLoading(false));
  };
  return (
    <>
      <NavBar />
      <div className="w-full h-auto flex justify-center my-5">
        <h2 className="font-semibold text-lg text-center">Shopping Cart</h2>
      </div>
      <div className="grid justify-items-center sm:grid-cols-2 sm:px-0 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row gap-5 w-screen h-auto p-5">
        {datas.map((data) => (
          <ShoppingCartCard key={data.productname} productname={data.productname} price={data.price.toLocaleString()} stock={data.stock} quantity={data.quantity} subtotal={data.subtotal} />
        ))}
      </div>
      <div className="flex justify-center w-full h-auto">
        <button onClick={handleOrder} className="text-white bg-slate-400 w-36 h-10 rounded-3xl md:mt-5 lg:mt-5">
          Order
        </button>
      </div>
    </>
  );
};
export default ShoppingCart;
