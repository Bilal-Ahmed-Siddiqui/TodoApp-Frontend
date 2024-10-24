import React, { useState } from 'react'


const EditTodo = ({ onClose }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleAdd = () => {
        // Handle the add action here (e.g., send to server, update state, etc.)
        console.log('Title:', title);
        console.log('Description:', description);
        onClose(); // Close the modal after adding
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-xl font-bold mb-8 text-center ">Enter Details</h2>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border rounded-lg p-2 w-full"
                    placeholder="Enter title"
                />
            </div>
            <div className="mb-6">
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border rounded-lg p-2 w-full"
                    placeholder="Enter description"
                />
            </div>
            <div className="flex justify-center">
                <button
                    className="bg-[#8681FF] text-white hover:bg-[#7a76eb] mb-4 font-semibold py-2 px-4 rounded w-96"
                    onClick={handleAdd}
                  
                >
                    Edit
                </button>
            </div>
        </div>
    </div>
    
    )
}

export default EditTodo