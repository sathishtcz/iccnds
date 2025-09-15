import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { GrLocation } from 'react-icons/gr'
import { IoIosMail } from 'react-icons/io'
import { LuMailOpen } from 'react-icons/lu'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <footer className="bg-indigo-900  text-white py-12 pb-0" id="contact">
                <div className="container mx-auto px-8 text-center">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 text-start">


                        <div>
                            <h2 className="text-xl lg:text-2xl font-bold tracking-wide text-purple-600 px-2 bg-white w-fit rounded-md p-1">
                                ICCNDS 2025
                            </h2>
                            <p className="text-gray-200 mt-3 text-xl">
                                International Conference on Computing, Networking, and Data Science
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xl lg:text-2xl font-semibold text-white">General</h3>
                            <li className='flex items-center gap-2'>
                                <GoDotFill className='w-[10px]' />
                                <Link to="/about" className="text-gray-200 hover:text-white transition-all duration-300 block text-lg">About the Conference</Link>
                            </li>

                            <li className='flex items-center gap-2'>
                                <GoDotFill className='w-[10px]' />
                                <Link to="/scope" className="text-gray-200 hover:text-white transition-all duration-300 block text-lg">Scope of Conference</Link>
                            </li>
                            {/* <li className='flex items-center gap-2'>
                                <GoDotFill className='w-[10px]' />
                                <Link to="/organizingCommittee" className="text-gray-200 hover:text-white transition-all duration-300 block text-lg">Technical Committee</Link>
                            </li> */}
                            <li className='flex items-center gap-2'>
                                <GoDotFill className='w-[10px]' />
                                <Link to="/editorial" className="text-gray-200 hover:text-white transition-all duration-300 block text-lg">Editorial Board</Link>
                            </li>
                        </div>


                        <div className="space-y-3">
                            <h3 className="text-xl lg:text-2xl font-semibold text-white">Conference Information</h3>
                            <li className='flex items-center gap-2'>
                                <GoDotFill className='w-[10px]' />
                                <Link to="/conferenceTracks" className="text-gray-200 hover:text-white transition-all duration-300 block text-lg">Conference Tracks</Link>
                            </li>
                            <li className='flex items-center gap-2'>
                                <GoDotFill className='w-[10px]' />
                                <Link to="/important-dates" className="text-gray-200 hover:text-white transition-all duration-300 block text-lg">Registration Details</Link>
                            </li>
                            <li className='flex items-center gap-2'>
                                <GoDotFill className='w-[10px]' />
                                <Link to="/paper-submission" className="text-gray-200 hover:text-white transition-all duration-300 block text-lg">Paper Submission</Link>
                            </li>
                        </div>


                        <div>
                            <h3 className="text-xl md:text-2xl font-semibold text-white">Get in Touch</h3>
                            <div className="flex items-center gap-2 mt-2">
                                <IoIosMail />
                                <p className="text-gray-200   text-lg">info.iccnds@gmail.com</p>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <GrLocation />
                                <p className="text-gray-200 text-lg">Riyadh, Saudi Arabia</p>
                            </div>

                            {/* <p className="text-gray-200 mt-2 text-lg">+91 123 456 7890</p> */}
                        </div>
                    </div>


                    <div className="border-t border-gray-600 mt-12 py-6 text-center text-gray-100 ">
                        <a href="/" className="hover:text-white transition-all duration-300">
                            © 2025 ICCNDS. All Rights Reserved.
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}
