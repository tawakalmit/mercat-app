import React, { useState, useEffect } from "react";

import NavBar from "../components/navbar";
import Userhighlight from "../components/Userhighlight";
import Orderhighlight from "../components/Orderhighlight";

export default function User() {
  const [datas, setDatas] = useState([]);
  const [username, setusername] = useState("");
  const [productname, setproductname] = useState("");
  const [stock, setstock] = useState(0);
  const [price, setprice] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    var requestOptions = {
      method: "get",
      headers: { "Content-Type": "application/json" },
    };
    fetch("https://virtserver.swaggerhub.com/DianNurdiana-alt/E-STORE/1.0.0/users", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const { data, username } = result;
        setusername(username);
        setDatas(data);
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <NavBar />
      <Userhighlight username={username} />
      <div className="flex flex-col mt-12">
        {datas.map((data) => (
          <Orderhighlight key={data.productname} productname={data.productname} price={data.totalprice.toLocaleString()} stock={data.quantity} />
        ))}
      </div>
    </div>
  );
}
