import Navbar from "../../components/navbar";
import Task_components from '../../components/Task_components'
import React, {useState} from "react";

export default function Task() {
    const [usermuenu, setUserMenu] = useState(false)
    const newTask = () => {
        const span = document.createElement('span')
        span.innerHTML = "<Task_components />"
        document.querySelector('#container-task').innerHTML = "<Task_components> </Task_components>"
    }
    return (
        <Navbar>
            <div className="w-screen flex items-center flex-col" id='container-task'>
                <Task_components />
                <Task_components />
                <Task_components />
                {
                    usermuenu === true && <Task_components />
                }
            </div>
            <div className="w-screen flex items-center flex-col" >
                <div className="flex items-center justify-center rounded-md border-2 border-gray-400 border-dotted w-3/4 mt-3 p-1 cursor-pointer" onClick={()=>setUserMenu(!usermuenu)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 text-gray-500">
                        <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </div>
            </div>
        </Navbar>
    )
}
