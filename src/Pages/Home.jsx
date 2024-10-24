import React from 'react'
import TodoItem from '../Components/TodoItem'
import AddTodo from '../Components/AddTodo'
import EditTodo from '../Components/EditTodo'

const Home = () => {
  return (
    <div className="flex flex-col items-center w-[60%] mx-auto mt-10">
      <div className="flex flex-col w-full mb-4 p-4 bg-gray-100 rounded-lg shadow-md border border-2 border-[#8681FF]">
        <div className="flex justify-between items-center mb-4 mx-4">
          <h1 className="text-2xl font-bold">TodoApp</h1>
          <i className="fa-solid fa-user text-[24px] text-[#8681FF]"></i>
        </div>
        <div className="bg-gray-100 w-full h-96 space-y-6 overflow-y-auto"> {/* Set a fixed height of h-64 */}
          <TodoItem />
          <TodoItem />
          <TodoItem />
          {/* Add more TodoItems as needed */}
        </div>
        <button className=" bg-[#8681FF] text-white  hover:bg-[#7a76eb] mt-8 py-2 rounded-lg w-full">
          Add New Todo Item
        </button>
      </div>
    </div>

  )
}

export default Home