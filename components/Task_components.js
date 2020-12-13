import React, {useState, useEffect} from "react";
import axios from 'axios'

import {environment} from '../environments/environments'

export default function Task_components (props) {
    const [user_phone, setUser_Phone] = useState()
    const [usermunu, setUserMenu] = useState(false)
    const [task, setTask] = useState({
        _id: '',
        title_task: '',
        complete: false,
        numberPhone: []
    })

    useEffect(()=>{
        if(props.task[0] !== null) setTask(props.task[0])
        GetNumberPhone()
    },[])

    const TaskComplete = async () => {
        await axios.patch(`${environment.production_server_node}completeTask?id=${task._id}`)
            .then(() => {
                setTask({
                    ...task,
                    complete: !task.complete
                })
            })
            .catch(() => {
                alert('Error to the complete task')
            })
    }

    const Title_Task = async () => {
        if (task._id === ''){
            await axios.post(`${environment.production_server_node}postTask_Title`,
                {
                    "title_task": task.title_task,
                    "complete": false,
                    "id_numberPhone": ""
                })
                .then(() => {
                    setTask({...task, title_task: ''})
                    if (props.task[2]){
                        props.task[1]()
                    }
                })
                .catch(() => alert('Error to the save the title'))
        }
        else {
            await axios.patch(`${environment.production_server_node}patchTask-title?id=${task._id}`, {"title_task": task.title_task})
                .then(() => {
                    setTask({...task, title_task: ''})
                    if (props.task[2]){
                        props.task[1]()
                    }
                })
                .catch(() => alert('Error to the save the title'))
        }
    }

    const GetNumberPhone = async () => {
        await axios.get(`${environment.url}phone_book`).then(({data}) => setUser_Phone(data))
            .catch(() => alert(`Error in: ${environment.url}phone_book. Method: GET`))
    }

    const PathNumberPhone_Task = async (phone) => {
        await axios.patch(`${environment.production_server_node}patch-numberPhone?idTask=${task._id}&idNumberPhone=${phone._id.$oid}`)
            .then(async () => {
                await props.task[1]()
                setUserMenu(false)
            })
            .catch(() => alert('Error to the save the number phone'))
    }
    return (
        <div className="flex items-center justify-between rounded-md shadow-lg w-3/4 mt-3 p-1">
            {
                (props.task[0] !== null && !task.complete) &&(
                    <span onClick={TaskComplete} className='border rounded-full w-6 h-6 cursor-pointer border-gray-500 mr-1'><p/><p/></span>
                )
            }
            {
                (props.task[0] !== null && task.complete) &&(
                    <span onClick={TaskComplete} className='border rounded-full w-6 h-6 cursor-pointer bg-green-500 mr-1'><p/><p/></span>
                )
            }
            <input className='rounded-md border border-gray-500  w-full p-1' placeholder="Title task..."
                   onChange={(e) => setTask({...task, title_task: e.target.value})} value={task.title_task} onKeyPress={event => {if (event.key === 'Enter') {Title_Task()}}}/>
            <div className="ml-3 relative">
                {
                    (props.task[0] !== null && task.numberPhone !== []) && (
                        <div className='ml-1'>
                            <button onClick={() => {setUserMenu(!usermunu) }} className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out" id="user-menu" aria-label="User menu" aria-haspopup="true">
                                <svg className="h-8 w-8 rounded-full border border-gray-500 border-dotted p-1 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                </svg>
                                {/*<img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />*/}
                            </button>
                        </div>
                    )
                }

                {
                    (props.task[0] !== null && task.numberPhone === []) && (
                        <div className='ml-1'>
                            <button onClick={() => {setUserMenu(!usermunu) }} className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out" id="user-menu" aria-label="User menu" aria-haspopup="true">
                                <svg className="h-8 w-8 rounded-full border border-gray-500 border-dotted p-1 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                                {/*<img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />*/}
                            </button>
                        </div>
                    )
                }

                {
                    usermunu && (
                        <>
                            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg z-50">
                                <div className="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                                    {
                                        task.numberPhone.length !== 0 &&(
                                            <>
                                                <a className="block px-4 py-2 flex flex-row text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">
                                                    <div className="mr-3 ml-1">
                                                        <svg fill="none" stroke="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                                            <circle cx="12" cy="7" r="4"></circle>
                                                        </svg>
                                                    </div>

                                                    <h3>{task.numberPhone.username || 'Ningun '} {task.numberPhone.lastname || 'Usuario'}</h3>
                                                </a>
                                                <hr/>
                                            </>
                                        )
                                    }
                                    {
                                        task.numberPhone.length === 0 && (
                                            <>
                                                {
                                                    user_phone && user_phone.map(phone => (
                                                        <a key={phone._id.$oid} onClick={() => PathNumberPhone_Task(phone)} className="block px-4 py-2 flex flex-row text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out cursor-pointer" role="menuitem">
                                                            <div className="mr-3 ml-1">
                                                                <svg fill="none" stroke="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                                                    <circle cx="12" cy="7" r="4"></circle>
                                                                </svg>
                                                            </div>

                                                            <h3>{phone.username} {phone.lastname}</h3>
                                                        </a>
                                                    ))
                                                }
                                            </>
                                        )
                                    }
                                    {
                                        task.numberPhone.length !== 0 && (
                                            <>
                                                {
                                                    user_phone && user_phone.map(phone => (
                                                        <>
                                                            {
                                                                task.numberPhone._id.$oid !== phone._id.$oid &&(
                                                                    <a key={phone._id.$oid} onClick={() => PathNumberPhone_Task(phone)} className="block px-4 py-2 flex flex-row text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out cursor-pointer" role="menuitem">
                                                                        <div className="mr-3 ml-1">
                                                                            <svg fill="none" stroke="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                                                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                                                                <circle cx="12" cy="7" r="4"></circle>
                                                                            </svg>
                                                                        </div>

                                                                        <h3>{phone.username} {phone.lastname}</h3>
                                                                    </a>
                                                                )
                                                            }
                                                        </>
                                                    ))
                                                }
                                            </>
                                        )
                                    }
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}
