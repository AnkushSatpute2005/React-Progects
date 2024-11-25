import { useState,useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";

// import './App.css'

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);


  useEffect(() => {
    let todoString =localStorage.getItem("todos")
    if(todoString){//it simply means todoString is not null 
          let todos =JSON.parse(localStorage.getItem("todos"))
         setTodos(todos) 
      }  

  }, [])
  

  const saveToLocalStorage = ()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const handelInput = (e) => {
    setTodo(e.target.value);
  };

  const handelAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isComplited: false }]); // uuidv4() function is use to generate unique ids,you can use this by simply importing it so search uuid npm on google
    setTodo("");
    saveToLocalStorage();
  };

  const handelCkeckBox = (e) => {
    let id = e.target.name;    
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    
    let newTodos = [...todos];
    newTodos[index].isComplited = !newTodos[index].isComplited;
    setTodos(newTodos);
    saveToLocalStorage();
  };

  const handelDelete = (e)=>{
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id === id;
    });

    let newTodos = [...todos]
    newTodos.splice(index,1)// here 2nd parameter  1  spesifies that only one item in arrat of object is remove 
    setTodos(newTodos);
    saveToLocalStorage();
  }

  const handelEdit = (e)=>{
    let id = e.target.name
    let todo = todos.filter(item => item.id === id)// filtr function take arrow finction havin condition
    setTodo(todo[0].todo)//set todo value inside the input box 
    //delet this todo also
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newTodos = [...todos]
    newTodos.splice(index,1)// here 2nd parameter  1  spesifies that only one item in arrat of object is remove 
    setTodos(newTodos);
    saveToLocalStorage();

  }
  
  
  return (
    <>
      <Navbar />
      <div className="container bg-violet-200 mx-auto my-5 rounded-md p-2 min-h-[80vh]">
        <div className="container bg-white mx-auto my-5 rounded-md flex justify-between p-5 shadow-md">
          <input onChange={handelInput} value={todo} type="text" placeholder="write something...." className=" w-1/2 border-none border-hidden bg-violet-100 rounded-md p-3"/>
          <button
            onClick={handelAdd}
            className="bg-[#8621eb] rounded-md px-10 text-white p-3"
          >
            Add
          </button>
        </div>
        <div className="container"> 
         {todos.length === 0 && <div className="text-[#8621eb]  text-7xl text-center">Empty To-Do List!</div>}       
        {todos.map((item) => {
          return (
            <div
              key={item.id}
              className="container bg-white mx-auto my-5 rounded-md flex justify-between p-5 shadow-md"
            >
              <div className="flex gap-3 items-center w-1/2  text-ellipsis">
                <input
                className=""
                  onChange={handelCkeckBox}
                  type="checkbox"
                  value={item.isComplited}
                  name={item.id}
                  id=""
                />
                <h3 className={item.isComplited ? "line-through" : ""}>
                  {item.todo}
                </h3>
              </div>

              <div className="w-32 flex justify-between">
                <button onClick={handelEdit} name={item.id} className="bg-[#8621eb] rounded-full p-2 text-white">
                  Edit
                </button>
                <button onClick={handelDelete} name={item.id} className="bg-[#8621eb] rounded-full p-2 text-white">
                  Delete
                </button>
              </div>
            </div>
          );
        })}
        </div>
        
      </div>
    </>
  );
}

export default App;
