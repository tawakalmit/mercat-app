import React, {useEffect, useState} from "react";
import ProductAdmin from "../components/productadmin";
import { useRouter } from "next/router";
import {IoLogOut} from "react-icons/io5"


function Dashboard() {
  const route = useRouter();
  const [datas, setDatas] = useState([])
  const [productname, setproductname] = useState("")
  const [productphoto, seetproductphoto] = useState("")
  const [price, setprice] = useState("")
  const [stock, setstock] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchData();
  }, [productname, price, stock, productphoto]);

  const fetchData = () => {
    var requestOptions = {
      method: "get",
      headers: { "Content-Type": "application/json" },
    };
    fetch(
      "https://projectbiasa.site/products",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        const { data } = result
        setDatas(data);
      })
      .catch((err) => {
        alert(err.toString())
      })
      .finally(() => setLoading(false));
  }

  const toAddProduct = () => {
    route.push("/addproduct")
  }
 

  return(
    <div>
      <div className="w-full h-none bg-[#94CD32] flex justify-start p-2 cursor-pointer">
        <div className="mx-auto w-11/12 flex justify-between items-center">
          <p className="text-white">Administrator Dashboard</p>
          <p className="text-white" onClick={(e) => toAddProduct(e)}>Add product</p>
          <IoLogOut onClick={()=>{route.push('/')}} size={40} color="white" />
        </div>
      </div>
      <div className="w-full flex-wrap mx-auto mt-5 flex justify-around md:w-10/12">
        {datas.map((data) => (
          <ProductAdmin
          productphoto={data.productphoto}
          key={data.id}
          productname={data.productname}
          price={data.price.toLocaleString()}
          stock={data.stock} onClick={(e)=>handleDelete}
          />
        ))}
      </div>
    </div>
  )
}

export default Dashboard;
