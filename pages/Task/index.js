import Navbar from "../../components/navbar";
import Task_components from '../../components/Task_components'
import React, {useState, useEffect} from "react";
import axios from 'axios'
import {environment} from '../../environments/environments'

export default function Task() {
    const [newTask, setNewTask] = useState(false)
    const [getTask, setGetTask] = useState()

    useEffect( async () => {
        await Get_Task()
    }, [])

    const Get_Task = async ()=>{
        await axios.get(`${environment.production_server_node}getTask`).then(({data}) => setGetTask(data.Task))
            .catch(() => alert(`Error in: ${environment.production_server_node}phone_book. Method: GET`))
    }
    return (
        <Navbar>
            <div className="w-screen flex items-center flex-col" id='container-task'>
                {
                    (getTask) &&(
                        getTask.map((d) => {
                            return <Task_components key={`Key task complete ${d._id}`} task={[d, Get_Task, false]}/>
                        })
                    )
                }
                {
                    newTask && <Task_components task={[null, Get_Task, true]}/>
                }
            </div>
            <div className="w-screen flex items-center flex-col" >
                <div className="flex items-center justify-center rounded-md border-2 border-gray-400 border-dotted w-3/4 mt-3 p-1 cursor-pointer" onClick={()=>setNewTask(!newTask)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 text-gray-500">
                        <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </div>
            </div>
        </Navbar>
    )
}
