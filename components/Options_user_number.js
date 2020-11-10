import {useEffect, useState} from "react";
import axios from "axios";
import {environment} from "../environments/environments";

export default function Options_user_number(props) {

    const [dataFrom, setDataFrom] = useState(
        {
            _id: '',
            username: '',
            lastname: '',
            number_phone: '',
            idUser: 2
        }
    )

    useEffect(()=>{
        setDataFrom(props.option[1])
    }, [])

    const handleOnChange = (data, camp)=> {
        setDataFrom({
            ...dataFrom,
            [camp]: data
        })
    }

    const Put_new_number_phone = async ()=>{
        if (dataFrom.username !== '' && dataFrom.number_phone !== ''){
            await axios.put(`${environment.url}phone_book/${dataFrom._id.$oid}`, dataFrom)
                .then(() => {
                    props.option[2](dataFrom)
                    props.option[0](false)
                })
                .catch(() => alert(`Error in: ${environment.url}phone_book/${dataFrom._id.$oid}. Method: PUT`))
        }
        else
            props.option[0](false)
    }

    const Delete_new_number_phone = async () =>{
        await axios.delete(`${environment.url}phone_book/${dataFrom._id.$oid}`)
            .then(() => {
                alert('Delete number phone')
                props.option[2](null)
                props.option[0](false)
            })
            .catch(() => alert(`Error in: ${environment.url}phone_book/${dataFrom._id.$oid}. Method: PUT`))
    }
    return (
        <>
            <div className="w-screen h-screen flex justify-center items-center overflow-hidden modal">
                <div className="container mx-auto rounded-lg overflow-hidden shadow-lg my-2 bg-white max-w-xs sm:max-w-sm">
                    <div className="relative mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className='bg-gray-400'>
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" className='text-gray-200'/>
                        </svg>
                        <div className="text-center absolute w-full" style={{bottom: '-30px'}}>
                            <div className="mb-16">
                                <p className="text-gray-900 tracking-wide uppercase text-lg font-bold">{dataFrom.username}, {dataFrom.lastname}</p>
                                <p className="text-gray-800 text-sm">{dataFrom.number_phone}</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col mt-4">
                        <div className='px-3 mb-6'>
                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>first name <b>(required)</b></label>
                            <input
                                className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
                                type='text' value={dataFrom.username}  required onChange={(event) => handleOnChange(event.target.value, 'username')}/>
                        </div>

                        <div className='px-3 mb-6'>
                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>last name</label>
                            <input
                                className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
                                type='text' value={dataFrom.lastname} required onChange={(event) => handleOnChange(event.target.value, 'lastname')}/>
                        </div>

                        <div className='px-3 mb-6'>
                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Number phone <b>(required)</b></label>
                            <input
                                className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
                                type='text' value={dataFrom.number_phone} required onChange={(event) => handleOnChange(event.target.value, 'number_phone')}/>
                        </div>
                    </div>
                    <div className='h-12 w-full flex justify-end items-center'>
                        <button onClick={()=>Delete_new_number_phone()} className="font-mono inline-flex items-center bg-red-300 border-0 py-1 px-3 focus:outline-none hover:bg-red-400 rounded text-base mr-2">
                            Delete
                        </button>
                        <button onClick={()=>Put_new_number_phone()} className="font-mono inline-flex items-center bg-gray-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-400 rounded text-base mr-2">
                            Closed
                        </button>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .modal { 
                    position: fixed; 
                    left: 50%; 
                    top: 50%; 
                    transform: 
                    translate(-50%, -50%); 
                    z-index: 1001; 
                }
            `}</style>
        </>
    )
}
