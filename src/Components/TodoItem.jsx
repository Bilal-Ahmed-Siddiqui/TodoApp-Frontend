import React, {useState} from 'react'
import EditTodo from "./EditTodo"

const TodoItem = () => {
  const [Edit, setEdit] = useState(false);

  const onClose = () => {
    setEdit(false);
  }
  return (
    <>
    <div className="flex flex-col bg-[#FFE6DF] shadow-md rounded-lg p-4 mb-2 border border-[#8681FF]"> {/* Added border class */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold">title</h2>
        <p className="text-gray-500 text-lg">description</p>
      </div>
      <div className="mt-4 flex justify-center space-x-2">
        <button className="bg-[#8681FF] text-white py-2 px-6 rounded hover:bg-[#7a76eb]" onClick={()=>{setEdit(true)}}>
          Edit
        </button>
        <button className="bg-[#8681FF] text-white py-2 px-6 rounded hover:bg-[#7a76eb]">
          Delete
        </button><button className="bg-[#8681FF] text-white py-2 px-6 rounded hover:bg-[#7a76eb]">
          Completed
        </button>
      </div>
    </div>

    {Edit && (<EditTodo onClose={onClose}/>)}
    </>





  )
}

export default TodoItem