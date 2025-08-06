import React, { useState } from 'react'
import { FiUpload } from 'react-icons/fi'
import { GoDotFill } from 'react-icons/go'
import { toast } from 'react-toastify';

export default function Papersub() {

    const [fileName, setFileName] = useState('Choose Your File');
    const [formData, setFormData] = useState({
        Paper_Title: '',
        Author_FUll_Name: '',
        Email_Address: '',
        Institution_Name: '',
        Paper_Track: '',
        Paper_File: null,
    });
    const [status, setStatus] = useState('');

    const handleFileInputChange = (e) => {
        const { name, type, files, value } = e.target;

        // For file preview display
        if (files && files.length > 0) {
            setFileName(files[0].name); // update UI
            setFormData((prev) => ({
                ...prev,
                [name]: files[0], // update actual form data
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        const journalName = 'iccnds';
        // Generate unique ID: journalName + YYYYMMDD + HHMMSS
        const now = new Date();
        const dateStr = now.toISOString().slice(0, 10).replace(/-/g, ''); // YYYYMMDD
        const timeStr = now.toTimeString().slice(0, 8).replace(/:/g, ''); // HHMMSS
        const uniqueId = `${journalName}_${dateStr}_${timeStr}`;

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('Submission_ID', uniqueId);
            formDataToSend.append('Paper_Title', formData.Paper_Title);
            formDataToSend.append('Author_FUll_Name', formData.Author_FUll_Name);
            formDataToSend.append('Email_Address', formData.Email_Address);
            formDataToSend.append('Institution_Name', formData.Institution_Name);
            formDataToSend.append('Paper_Track', formData.Paper_Track);

            if (formData.Paper_File) {
                formDataToSend.append('Paper_File', formData.Paper_File);
            }

            const googleSheetsParams = new URLSearchParams();
            googleSheetsParams.append('Submission_ID', uniqueId);
            googleSheetsParams.append('journal_name', journalName);
            googleSheetsParams.append('Paper_Title', formData.Paper_Title);
            googleSheetsParams.append('Author_FUll_Name', formData.Author_FUll_Name);
            googleSheetsParams.append('Email_Address', formData.Email_Address);
            googleSheetsParams.append('Institution_Name', formData.Institution_Name);
            googleSheetsParams.append('Paper_Track', formData.Paper_Track);

            const mailPromise = fetch('https://iccnds.com/api/mail.php', {
                method: 'POST',
                body: formDataToSend,
            });

            const sheetsPromise = fetch('https://script.google.com/macros/s/AKfycbwZ_TtKUqAfcue9TNCKy57hTrCKDUP5dTQnWbpSxBDzlRMllEuOoaxzRDl0kQPah5pZ/exec', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: googleSheetsParams.toString(),
            });

            const [mailResponse, sheetsResponse] = await Promise.allSettled([mailPromise, sheetsPromise]);

            const mailSuccess = mailResponse.status === 'fulfilled' && mailResponse.value.ok;
            const sheetsSuccess = sheetsResponse.status === 'fulfilled';

            if (sheetsResponse.status === 'rejected') {
                console.error('Sheets request failed:', sheetsResponse.reason);
            }

            if (mailSuccess && sheetsSuccess) {
                setStatus(`Submission successful! Data sent to both email and Google Sheets (${journalName}).`);

                setFormData({
                    Paper_Title: '',
                    Author_FUll_Name: '',
                    Email_Address: '',
                    Institution_Name: '',
                    Paper_Track: '',
                    Paper_File: null,
                });
                const fileInput = document.getElementById('Paper_File');
                if (fileInput) {
                    fileInput.value = '';
                } else {
                    console.error('Element with ID "Paper_File" not found.');
                }
                toast.success(`Paper submitted successfully!`);

            } else if (mailSuccess && !sheetsSuccess) {
                setStatus('Email sent successfully, but there might be an issue with Google Sheets.');
                toast.warning('Email sent successfully. Please check if data was saved to Google Sheets.');

            } else if (!mailSuccess && sheetsSuccess) {
                setStatus('Data likely saved to Google Sheets, but failed to send email.');
                toast.warning('Data might be saved to Google Sheets, but failed to send email.');

            } else {
                setStatus('There might be issues with the submission. Please check manually.');
                toast.error('Submission completed, but please verify the results manually.');
            }

        } catch (error) {
            console.error('Error:', error);
            setStatus('An error occurred during submission. Please try again.');
            toast.error('An error occurred. Please try again.');
        }
    }


    return (
        <>
            <div className="mt-[90px]">
                <section className="py-10 bg-[#EDE7F6]">
                    <div className="container mx-auto px-4 md:px-12">
                        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-extrabold mb-10 text-indigo-900 tracking-wide">
                            Paper Submission
                        </h2>

                        <div className="grid xl:grid-cols-2 gap-12">

                            {/* Payment Instructions */}
                            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                                <h3 className="text-2xl font-medium text-[#673AB7] mb-4">Submission Guidelines:</h3>
                                <ul className="space-y-6 text-gray-700 sm:text-base md:text-lg lg:text-[17px]">
                                    {[
                                        "Provide the title of your paper, which should be descriptive and concise.",
                                        "Enter the full name of the first author as it appears on the paper.",
                                        "Enter a valid mobile number (10-15 digits, country code optional).",
                                        "Provide a working email address for the first author to receive notifications.",
                                        "Enter the name of the institution the first author is affiliated with.",
                                        "Choose the relevant category for the first author.",
                                        "Ensure your paper is in PDF or DOC format and does not exceed 5MB in size.",
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center space-x-3">
                                            <GoDotFill className='w-4 h-4 text-indigo-600 flex-shrink-0' />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Submit Your Paper Form */}
                            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                                <h3 className="text-2xl font-medium text-[#3F51B5] mb-6">Submit Your Paper</h3>
                                <form className="space-y-6  " onSubmit={handleSubmit}>
                                    <input
                                        placeholder="Paper Title"
                                        required
                                        onChange={handleFileInputChange}
                                        className="w-full px-5 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition bg-gray-50"
                                        type="text"
                                        name="Paper_Title"
                                        value={formData.Paper_Title}
                                    />

                                    <input
                                        placeholder="Institution Name"
                                        required
                                        className="w-full px-5 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition bg-gray-50"
                                        type="text"
                                        name="Institution_Name"
                                        value={formData.Institution_Name}
                                        onChange={handleFileInputChange}
                                    />



                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <input
                                            placeholder="Email Address"
                                            required
                                            className="w-full px-5 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition bg-gray-50"
                                            type="email"
                                            name="Email_Address"
                                            value={formData.Email_Address}
                                            onChange={handleFileInputChange}
                                        />
                                        <input
                                            placeholder="Author Full Name"
                                            required
                                            className="w-full px-5 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition bg-gray-50"
                                            type="text"
                                            name="Author_FUll_Name"
                                            value={formData.Author_FUll_Name}
                                            onChange={handleFileInputChange}
                                        />
                                    </div>

                                    <select
                                        name="Paper_Track"
                                        value={formData.Paper_Track}
                                        onChange={handleFileInputChange}
                                        required
                                        className="w-full px-5 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition bg-white"
                                    >
                                        <option value="">-- Select Category --</option>
                                        <option value="Artificial Intelligence and Machine Learning">Artificial Intelligence and Machine Learning</option>
                                        <option value="Cloud Computing and Virtualization">Cloud Computing and Virtualization</option>
                                        <option value="Big Data Analytics and Data Mining">Big Data Analytics and Data Mining</option>
                                        <option value="Computer Networks and Security">Computer Networks and Security</option>
                                        <option value="Internet of Things (IoT)">Internet of Things (IoT)</option>
                                        <option value="Blockchain Technology">Blockchain Technology</option>
                                        <option value="Cybersecurity and Privacy">Cybersecurity and Privacy</option>
                                        <option value="Software Engineering">Software Engineering</option>
                                        <option value="Mobile Computing">Mobile Computing</option>
                                    </select>

                                    <div className="border border-dashed border-gray-400 rounded-lg p-6 text-center hover:bg-gray-100 transition">
                                        <label className="cursor-pointer flex flex-col items-center">

                                            <input
                                                accept=".pdf,.doc,.docx"
                                                
                                                className="hidden"
                                                type="file"
                                                required
                                                name="Paper_File"
                                                // value={formData.Paper_File}
                                                onChange={handleFileInputChange}
                                            />
                                            <FiUpload className='w-10 h-10 text-indigo-600' />
                                            <p className="z-0">{fileName || "Click to Upload Paper"}</p>
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-indigo-600 text-white font-semibold py-4 rounded-lg hover:bg-indigo-500 transition duration-300 text-lg cursor-pointer"
                                    >
                                        {status === 'Sending...' ? 'Submitting...' : 'Submit Your Paper'}

                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
