import React, { useState } from 'react'
import TodoItem from '../Components/TodoItem'
import { Link } from 'react-router-dom'
import AddTodo from '../Components/AddTodo'
const Home = () => {
  const [Add, setAdd] = useState(false);
  const onClose = () => {
    setAdd(false);
  }

  return (
    <>
      <div className="flex flex-col items-center w-[60%] mx-auto mt-10">
        <div className="flex flex-col w-full mb-4 p-4 bg-gray-100 rounded-lg shadow-md border border-2 border-[#8681FF]">
          <div className="flex justify-between items-center mb-4 mx-4">
            <h1 className="text-2xl font-bold">TodoApp</h1>
            <Link to="/profile"><i className="fa-solid fa-user text-[24px] text-[#8681FF]"></i></Link>
          </div>
          <div className="bg-gray-100 w-full h-96 space-y-6 overflow-y-auto"> {/* Set a fixed height of h-64 */}
            <TodoItem />
            <TodoItem />
            <TodoItem />
            {/* Add more TodoItems as needed */}
          </div>
          <button className=" bg-[#8681FF] text-white  hover:bg-[#7a76eb] mt-8 py-2 rounded-lg w-full" onClick={() => { setAdd(true) }}>
            Add New Todo Item
          </button>
        </div>
      </div>

      {
        Add && (<AddTodo onClose={onClose}/>)
      }
    </>

  )
}

export default Home