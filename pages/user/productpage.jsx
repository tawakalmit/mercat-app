import React, {useEffect, useState} from "react";
import DashboardCard from '../../components/dashboardcard';
import NavBar from '../../components/navbar';

const ProductPage =() => {

    const [datas, setDatas] = useState([])
  const [productname, setproductname] = useState("")
  const [price, setprice] = useState("")
  const [stock, setstock] = useState("")
  const [loading, setLoading] = useState(false)
  

  useEffect(() => {
    fetchData();
  }, [productname, price, stock]);

  const fetchData = () => {
    var requestOptions = {
      method: "get",
      headers: { "Content-Type": "application/json" },
    };
    fetch(
      "https://virtserver.swaggerhub.com/DianNurdiana-alt/E-STORE/1.0.0/products",
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

    

    return(
        <>
        <NavBar />
        <div className="w-full flex-wrap mx-auto mt-5 flex justify-around md:w-10/12">
        {datas.map((data) => (
          <DashboardCard
          key={data.productname}
          productname={data.productname}
          price={data.price.toLocaleString()}
          stok={data.stock}
          />
        ))}
        
        </div>
        </>
    )
}
export default ProductPage;