import {User_numbre_phone} from '../components/user-numbre-phone'
import React, {useState, useEffect} from 'react'

import axios from 'axios'

export const Add_numbre_phone = () => {
    const [user_phone, setUser_Phone] = useState()

    useEffect( async () => {
        await axios.get('http://192.168.0.6:4440/phone_book').then(({data}) => setUser_Phone(data))
            .catch(() => alert('Error in: http://192.168.0.6:4440/phone_book'))
    }, [])

    return (
        <>
            <div className="flex flex-row justify-between items-center p-3">
                <h1 className="text-2xl font-mono">Add new phone numbre:</h1>
                <button className="font-mono inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base md:mt-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add new
                </button>
            </div>

            <span className="divide-y divide-gray-400 "><p></p><p></p></span>

            <div className="flex flex-wrap justify-center">
                {
                    user_phone &&(
                        user_phone.map((data) => {
                            return <User_numbre_phone user={data} />
                        })
                    )
                }
            </div>
        </>
    )
}