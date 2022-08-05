import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";

const Checkout = () => {
  const route = useRouter();
  const [productphoto, setProductphoto] = useState("");
  const [productname, setProductname] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  const [address, setAddress] = useState("");
  const [paymentmethod, setPaymentmethod] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [productname, price, quantity, total, address, paymentmethod]);

  const fetchData = () => {
    var requestOptions = {
      method: "get",
      headers: { "Content-Type": "application/json" },
    };
    fetch("https://virtserver.swaggerhub.com/DianNurdiana-alt/E-STORE/1.0.0/orders/{productid}", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const { productname, price, quantity, total, address, paymentmethod } = result;
        setProductname(productname);
        setPrice(price);
        setQuantity(quantity);
        setTotal(total);
        setAddress(address);
        setPaymentmethod(paymentmethod);
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => setLoading(false));
  };

  const handleDelete = async (e) => {
    setLoading(true);
    e.preventDefault();

    var requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "aplication/json" },
    };
    fetch(`https://virtserver.swaggerhub.com/DianNurdiana-alt/E-STORE/1.0.0/orders/{productid}`, requestOptions)
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

  return (
    <>
      <div className="w-full h-none bg-lime-400 flex justify-between py-5 px-7">
        <div className="flex justify-start">
          <IoIosArrowBack
            onClick={() => {
              route.push("/shoppingcart");
            }}
            className="h-11 w-auto flex justify-center text-white"
          />
          <h2 className="text-white text-2xl font-semibold mt-1 ml-4">{productname}</h2>
        </div>
      </div>
      <div className="w-full h-auto pt-7 px-8 flex justify-between">
        <h2 className="font-bold text-2xl">Total</h2>
        <h2 className="text-xl">IDR {total}</h2>
      </div>
      <div className="w-full h-auto pt-7 px-8 flex justify-between">
        <h2 className="text-sm">Payment Method</h2>
        <h2 className="text-sm">{paymentmethod}</h2>
      </div>
      <div className="w-full h-auto pt-7 px-8 flex justify-between">
        <h2 className="text-sm">Address</h2>
        <h2 className="text-lime-400 text-sm w-40 h-auto sm:w-56 md:w-auto lg:w-auto text-right">{address}</h2>
      </div>
      <div className="w-full h-auto mt-9 flex justify-center my-2 ">
        <button className="bg-slate-400 rounded-3xl w-36 h-10 font-bold text-lg text-white">Checkout</button>
        <button className="ml-3 bg-[#E74C3C] rounded-3xl w-36 h-10 font-bold text-lg text-white" onClick={(e) => handleDelete(e)}>Cancel</button>
      </div>
    </>
  );
};
export default Checkout;
