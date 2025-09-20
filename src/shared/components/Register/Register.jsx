import React from 'react'
import { GiMicrophone } from 'react-icons/gi'
import { GrLocation } from 'react-icons/gr'
import { LuAlarmClockCheck } from 'react-icons/lu'
import { MdOutlineCalendarToday } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <>
            <section className="bg-blue-50 py-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-gray-800">



                        {/* Date Section */}
                        <div>
                            <GiMicrophone className='w-8 h-8 text-indigo-600 mx-auto mb-2' />
                            <h3 className="text-3xl font-bold mb-1">ICCNDS</h3>
                            <div className="w-16 h-1 bg-[#5943F7] mx-auto mb-4"></div>
                            <p className="text-xl">International Conference on Computing, Networking, and Data Science</p>
                        </div>
                        {/* Location Section */}
                        <div>
                            <GrLocation className='w-8 h-8 text-indigo-600 mx-auto mb-2' />
                            <h3 className="text-3xl font-bold mb-1">Where?</h3>
                            <div className="w-16 h-1 bg-[#5943F7] mx-auto mb-4"></div>
                            <p className="text-xl leading-relaxed ">

                                Riyadh, Saudi Arabia
                            </p>
                        </div>
                        <div>
                            <LuAlarmClockCheck  className='w-9 h-9 text-indigo-600 mx-auto mb-2' />
                            <h3 className="text-3xl font-bold mb-1">Duration</h3>
                            <div className="w-16 h-1 bg-[#5943F7] mx-auto mb-4"></div>
                            <p className="text-xl">
                                9:00 AM – 5:00 PM
                            </p>
                        </div>
                    </div>

                    {/* Register Button */}
                    <div className="text-center mt-8">
                        <Link to="/paper-submission">
                            <button className="bg-[#5943F7] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#4633c9] transition cursor-pointer">
                                Register here
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
