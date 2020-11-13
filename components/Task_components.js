import React, {useState} from "react";

export default function Task_components () {
    const [usermunu, setUserMenu] = useState(false)
    return (
        <div className="flex items-center justify-between rounded-md shadow-lg w-3/4 mt-3 p-1">
            <span className="border rounded-full border-gray-500 w-6 h-6 cursor-pointer"><p/><p/></span>
            <input className='rounded-md border border-gray-500  w-3/4 p-1' placeholder="Title task..." />
            <div className="ml-3 relative">
                <div>
                    <button onClick={() => {setUserMenu(!usermunu) }} className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out" id="user-menu" aria-label="User menu" aria-haspopup="true">
                        <svg className="h-8 w-8 rounded-full border border-gray-500 border-dotted p-1 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                        {/*<img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />*/}
                    </button>
                </div>

                {
                    usermunu && (
                        <>
                            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg z-50">
                                <div className="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                                    <a href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">Your Profile</a>
                                    <a href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">Settings</a>
                                    <a href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">Sign out</a>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}
