import Link from 'next/link'
import React, { useState, useEffect } from 'react'


export default function Navbar({children}) {
    const [usermunu, setUserMenu] = useState(false)
    const [navbar, setNavBar] = useState(false)

    useEffect(() => {
        window.addEventListener('resize', (d) => {
            setNavBar(false)
            setUserMenu(false)
        });
    }, []);

    return (
        <div className="w-screen">
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                            <button onClick={() => {setNavBar(!navbar); setUserMenu(false)}} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                </svg>

                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0">
                                <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/v1/workflow-mark-on-dark.svg" alt="Workflow logo" />
                                <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/v1/workflow-logo-on-dark.svg" alt="Workflow logo" />
                            </div>
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex">
                                    <a href="/AddNumberPhone" className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">New number phone</a>
                                    <a href="/Task" className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Task</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    navbar && (
                        <>
                            <div>
                                <div className="px-2 pt-2 pb-3 flex flex-col">
                                    <a href="/AddNumberPhone" className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">New number phone</a>
                                    <a href="/Task" className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Task</a>
                                </div>
                            </div>
                        </>
                    )
                }
            </nav>

            {children}
        </div>
    );
}
