import React, {useState, useEffect} from "react";

import NavBar from "../components/navbar";
import Userhighlight from "../components/Userhighlight";
import Orderhighlight from "../components/Orderhighlight";

export default function User() {

  const [username, setUsername] = useState ('');
  const [photoprofile,setPhotoprofile] = useState ('');
  const [data, setData] =useState([]);
  const [quantity, setQuantity] = useState(0)
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
        // console.log(result);
        const { data, username, photoprofile } = result;
        setUsername(username);
        setPhotoprofile(photoprofile);
        setData();
      })
      .catch((err) => {
        alert(err.toString())
      })
      .finally(() => setLoading(false));
  }

  return (
    <div>
      <NavBar />
      <Userhighlight username={username} photoprofile={photoprofile}/>
      <div className="flex flex-col mt-12">
      <Orderhighlight />
      </div>
    </div>
  );
}
