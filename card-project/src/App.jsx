import { useState,useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts") // api for the post request
      .then((response) => response.json())
      .then((data) => setdata(data))
      .catch((err)=>{console.log(err)})
  }, []);

  return (
    <>
    <div className=" flex w-1/1 flex-wrap justify-center bg-[]">
    {data.map((d) => {
        return (
          <div key={d.id} className="w-1/5 m-6 p-3 rounded-lg shadow-2xl gap-3 justify-between bg-[#f5f0f7]">
            <b className="bg-[#ebd2fa] p-1 rounded  ">ID:{d.id}</b>
            <h4 className="p-4"><b>userId</b>:{d.userId}</h4>
            <p><b>title :</b> {d.title}</p>
            <p><b>body:</b>{d.body}</p>
          </div>
        )
      })}
    </div>
    </>
  );
}

export default App;
