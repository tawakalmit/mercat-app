import React, { useEffect, useState } from 'react'
import { IoChevronBackSharp } from "react-icons/io5";
import Link from 'next/link';
import Image from 'next/image';
import Historydetail from '../components/historydetail';

export default function DetailHistoryOrder() {

  const [datas, setDatas] = useState([])
  const [productpic, setproductpic] = useState("")
  const [productname, setproductname] = useState("")
  const [unitprice, setunitprice] = useState(0)
  const [quantity, setquantity] = useState(0)
  const [totalprice, settotalprice] = useState(0)
  const [address, setaddress] = useState("")
  const [paymentmethod, setpaymentmethod] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchData();
  }, [productpic, productname,unitprice, quantity, totalprice, address, paymentmethod]);

  const fetchData = () => {
    var requestOptions = {
      method: "get",
      headers: { "Content-Type": "application/json" },
    };
    fetch(
      "https://virtserver.swaggerhub.com/DianNurdiana-alt/E-STORE/1.0.0/orders",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        const { data } = result
        setDatas(data)
      })
      .catch((err) => {
        alert(err.toString())
      })
      .finally(() => setLoading(false));
  }

  

  return (
    <>
    <div className='w-full h-none bg-[#94CD32] flex justify-start p-2 cursor-pointer'>
      <Link href={"/user"}><div className='flex items-center'>
      <IoChevronBackSharp size={40} color="white" />
      <p className='text-white text-xl'>Profile</p>
      </div></Link>
    </div>
    {datas.map((data) => (
          <Historydetail
          address={data.address}
          productname={data.productname}
          quantity={data.quantity}
          totalprice={data.totalprice.toLocaleString()}
          unitprice={data.unitprice.toLocaleString()}
          />
        ))}
    
    
    </>
  )
}
