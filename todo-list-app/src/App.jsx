import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";

// import './App.css'

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handelInput = (e) => {
    setTodo(e.target.value);
  };

  const handelAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isComplited:false }]);// uuidv4() function is use to generate unique ids,you can use this by simply importing it so search uuid npm on google
    setTodo("");
    console.log({ todos });
  };

  return (
    <>
      <Navbar />
      <div className="container bg-violet-200 mx-auto my-5 rounded-md p-2 min-h-[80vh]">
        <div className="container bg-white mx-auto my-5 rounded-md flex justify-between p-5 shadow-md">
          <input onChange={handelInput} value={todo} type="text" />
          <button
            onClick={handelAdd}
            className="bg-[#8621eb] rounded-md px-10 text-white"
          >
            Add
          </button>
        </div>
        {todos.map((item) => {
          return (
            <div key={item.id} className="container bg-white mx-auto my-5 rounded-md flex justify-between p-5 shadow-md">
              <h3 className={item.isComplited?"line-through":""}>{item.todo}</h3>
              <div className="w-32 flex justify-between">
                <button className="bg-[#8621eb] rounded-full p-2 text-white">
                  Edit
                </button>
                <button className="bg-[#8621eb] rounded-full p-2 text-white">
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
