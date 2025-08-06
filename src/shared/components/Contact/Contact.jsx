import React, { useState } from 'react'
import { GrLocation } from 'react-icons/gr'
import { LuMailOpen, LuSend } from 'react-icons/lu'
import { toast } from 'react-toastify';

export default function Contact() {

    const [formData, setFormData] = useState({
        firstname: '',
        secondname: '',
        number: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleFileInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const formDataToSend = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                formDataToSend.append(key, value);
            });

            const response = await fetch('https://iccnds.com/api/contact.php', {
                method: 'POST',
                body: formDataToSend,
            });

            const result = await response.text();
            setStatus(result);

            if (response.ok) {
                toast.success("Message submitted successfully!");
                setFormData({
                    firstname: '',
                    secondname: '',
                    number: '',
                    email: '',
                    message: '',
                });
            } else {
                toast.error('Failed to send submission. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred. Please try again.');
        }
    };

    return (
        <div className='mt-[90px]'>
            <section className="py-10 bg-gradient-to-b from-indigo-100 to-purple-200">
                <div className="container mx-auto px-3 md:px-12 max-w-8xl">
                    <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-extrabold mb-10 text-indigo-900 tracking-wide">
                        Get in Touch
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        <div className="bg-white shadow-xl rounded-2xl p-8 space-y-6 border border-gray-200">
                            <h3 className="text-2xl font-semibold mb-4 text-indigo-900">Contact Information</h3>


                            <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-300 hover:bg-gray-100 transition duration-300">
                                <LuMailOpen className='w-8 h-8 text-indigo-600' />
                                <div>
                                    <h4 className="text-xl  font-medium  text-indigo-900">Email</h4>
                                    <p className="text-gray-700 sm:text-base md:text-lg lg:text-[18px] wrap-anywhere ">info.iccnds@gmail.com</p>
                                </div>
                            </div>

                            {/* Phone */}
                            {/* <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-300 hover:bg-gray-100 transition duration-300">
                                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    <path d="M14.05 2a9 9 0 0 1 8 7.94" />
                                    <path d="M14.05 6A5 5 0 0 1 18 10" />
                                </svg>
                                <div>
                                    <h4 className="text-xl lg:text-2xl  text-indigo-900">Phone</h4>
                                    <p className="text-gray-700 text-xl">+91 123 456 7890</p>
                                </div>
                            </div> */}


                            <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-300 hover:bg-gray-100 transition duration-300">
                                <GrLocation className='w-8 h-8 text-indigo-600' />
                                <div>
                                    <h4 className="text-xl  font-medium   text-indigo-900">Location</h4>
                                    <p className="text-gray-700 sm:text-base md:text-lg lg:text-[18px]">Riyadh, Saudi Arabia</p>
                                </div>
                            </div>
                        </div>


                        <div className="bg-white shadow-xl p-8 rounded-2xl border border-gray-200">
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-col  gap-5">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                        <div className="text-xl">
                                            <label className="block text-lg font-medium text-indigo-900">First Name</label>
                                            <input
                                                id="firstname"
                                                value={formData.firstname}
                                                onChange={handleFileInputChange}
                                                required
                                                type="text"
                                                className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 outline-none focus:ring-2 focus:ring-indigo-500"
                                            />
                                        </div>
                                        <div className="text-xl">
                                            <label className="block text-lg font-medium text-indigo-900">Last Name</label>
                                            <input
                                                id="secondname"
                                                value={formData.secondname}
                                                onChange={handleFileInputChange}
                                                required
                                                type="text"
                                                className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 outline-none focus:ring-2 focus:ring-indigo-500"
                                            />
                                        </div>


                                        <div>
                                            <label className="block text-lg font-medium text-indigo-900">Email</label>
                                            <input
                                                id="email"
                                                value={formData.email}
                                                onChange={handleFileInputChange}
                                                required
                                                type="email"
                                                className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 outline-none focus:ring-2 focus:ring-indigo-500"
                                            />
                                        </div>

                                        <div className="text-xl">
                                            <label className="block text-lg font-medium text-indigo-900">Mobile Number</label>
                                            <input
                                                id="number"
                                                value={formData.number}
                                                onChange={handleFileInputChange}
                                                required
                                                type="text"
                                                className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 outline-none focus:ring-2 focus:ring-indigo-500"
                                            />
                                        </div>


                                        <div className='lg:col-span-2'>
                                            <label className="block text-lg font-medium text-indigo-900">Message</label>
                                            <textarea
                                                id="message"
                                                value={formData.message}
                                                onChange={handleFileInputChange}
                                                required
                                                rows="5"
                                                className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 outline-none focus:ring-2 focus:ring-indigo-500"
                                            ></textarea>
                                        </div>
                                    </div>


                                    <button
                                        type="submit"
                                        className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:bg-indigo-500 transition duration-300 shadow-lg"
                                    >
                                        <LuSend className="w-5 h-5" />
                                        {status === 'Sending...' ? 'Submitting...' : 'Send Message'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
