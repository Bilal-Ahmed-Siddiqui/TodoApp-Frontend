import React from 'react'
import { Link } from 'react-router-dom'
const Profile = () => {
    return (
        <>
            <div className="flex flex-col items-center w-[60%] mx-auto mt-10">
                <div className="flex flex-col w-full mb-4 p-4 bg-gray-100 rounded-lg shadow-md border border-2 border-[#8681FF]">
                    <div className="flex justify-between items-center mb-4 mx-4">
                        <h1 className="text-2xl font-bold">Profile</h1>
                        <Link to="/">
                            <i className="fa-solid fa-clipboard-list text-[24px] text-[#8681FF]"></i>

                        </Link>
                    </div>

                    <div className="mx-4 mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Enter your username" />
                    </div>
                    <div className="mx-4 mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" className="w-full p-2 border border-gray-300 rounded" placeholder="Enter your email" disabled />
                    </div>
                    <div className="mx-4 mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input type="password" className="w-full p-2 border border-gray-300 rounded" placeholder="Enter your password" />
                    </div>
                    <button className=" bg-[#8681FF] text-white  hover:bg-[#7a76eb] mt-8 py-2 rounded-lg w-full">
                        Save Changes
                    </button>
                </div>

            </div>

        </>
    )
}

export default Profile