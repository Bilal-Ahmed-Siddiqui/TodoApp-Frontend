import React, { useState, useEffect } from 'react'
import TodoItem from '../Components/TodoItem'
import { Link, useNavigate } from 'react-router-dom'
import AddTodo from '../Components/AddTodo'
import axios from 'axios'
const Home = () => {
  const [Add, setAdd] = useState(false);
  const [Todos, setTodos] = useState([]);
  const onClose = () => {
    setAdd(false);
  }
  const navigator = useNavigate()
  useEffect(() => {
    const checkLogin = async () => {
      if (!localStorage.getItem("token")) {
        navigator("/login")
      }
      else {
        try {
          const response = await axios.get("http://localhost:3000/todo/", {headers: {"token": localStorage.getItem("token")}})

          if (response.data) {
            // console.log(response.data) 
            setTodos(response.data)
          }
        } catch (error) {
          if (axios.isAxiosError(error)) {
            alert(error.response.data.error)
            // console.log(error.response.data.error)
          }
          else {
            alert("some error occured")
          }
        }

      }
    }
    checkLogin();

  }, [])


  return (
    <>
      <div className="flex flex-col items-center w-[60%] mx-auto mt-10">
        <div className="flex flex-col w-full mb-4 p-4 bg-gray-100 rounded-lg shadow-md border border-2 border-[#8681FF]">
          <div className="flex justify-between items-center mb-4 mx-4">
            <h1 className="text-2xl font-bold">TodoApp</h1>
            <Link to="/profile"><i className="fa-solid fa-user text-[24px] text-[#8681FF]"></i></Link>
          </div>
          <div className="bg-gray-100 w-full h-96 space-y-6 overflow-y-auto"> {/* Set a fixed height of h-64 */}
            {Todos.map((todo) => (
              <TodoItem title={todo.title} description={todo.description} id={todo._id} key={todo._id} />
            ))}


            {/* Add more TodoItems as needed */}
          </div>
          <button className=" bg-[#8681FF] text-white  hover:bg-[#7a76eb] mt-8 py-2 rounded-lg w-full" onClick={() => { setAdd(true) }}>
            Add New Todo Item
          </button>
        </div>
      </div>

      {
        Add && (<AddTodo onClose={onClose} />)
      }
    </>

  )
}

export default Home