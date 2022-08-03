import React, {useState, useEffect} from "react";

import NavBar from "../components/navbar";
import Userhighlight from "../components/Userhighlight";
import Orderhighlight from "../components/Orderhighlight";

export default function User() {

  const [username, setUsername] = useState ('');
  const [photoprofile,setPhotoprofile] = useState ('');
  const [data, setData] =useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [username, photoprofile, data]);

  const fetchData = () => {
    var requestOptions = {
      method: "get",
      headers: { "Content-Type": "application/json" },
    };
    fetch(
      "https://virtserver.swaggerhub.com/DianNurdiana-alt/E-STORE/1.0.0/users",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log('ini result',result);
        const { data } = result
        const { userhighlight } = result.data;
        console.log('ini data',data.username);
        console.log('ini array',data[0].productname)
        console.log('ini userhighlight',userhighlight)
        // console.log(data.data.id)
        // setData()
      })
      .catch((err) => {
        alert(err.toString())
      })
      .finally(() => setLoading(false));
  }

  return (
    <div>
      <NavBar />
      <Userhighlight username={data.username} photoprofile={data.photoprofile}/>
      <div className="flex flex-col mt-12">

      
        {/* <Orderhighlight key={data.data.id} productname={data.data.productname} quantity={data.data.quantity} totalprice={data.data.totalprice}/> */}

      </div>
    </div>
  );
}
