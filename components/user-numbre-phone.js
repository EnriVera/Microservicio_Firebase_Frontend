import { useState, useEffect } from 'react'

export const User_numbre_phone = (props) => {

    const [phone, setPhone] = useState()

    useEffect(() => {
        setPhone(props)
    }, [])

    return (
        <>
            {
                phone && (
                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col m-4 card_width">
                        <div className="flex items-center mb-3">
                            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-teal-500 text-white flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <h2 className="text-gray-900 text-lg title-font font-medium">{phone.user.username} {phone.user.lastname}</h2>
                        </div>
                        <div className="flex-grow">
                            <p className="leading-relaxed text-base"><b>Name:</b> {phone.user.username}</p>
                            <p className="leading-relaxed text-base"><b>LastName:</b> {phone.user.lastname}</p>
                            <p className="leading-relaxed text-base"><b>Phone:</b> {phone.user.number_phone}</p>
                            <a className="mt-3 text-teal-500 inline-flex items-center">Obtions
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                )
            }

            <style jsx>{`
                .card_width {
                    width: 25rem;
                }
            `}</style>
        </>
    )
}
