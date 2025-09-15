import React from 'react'
import { FaCircleUser } from 'react-icons/fa6';

export default function Editorialboard() {

    const Organizingcommitte = [
        {
            name: "Dr. Brahim Issaoui",
            department: "Department of Economics and Social Sciences",
            university: "Qassim University",
            location: "Saudi Arabia"
        },
        {
            name: "Dr. Ali Rizwan",
            department: "Department of  Industrial Engineering",
            university: "King Abdulaziz University",
            location: "Saudi Arabia"
        },
        {
            name: "Dr. Mohammad Siraj",
            department: "Department of Electronics and Communication Engineering",
            university: "King Saud University",
            location: "Saudi Arabia"
        },
        {
            name: "Dr. Maryam Anwer",
            department: "Department of Industrial Engineering",
            university: "Majma University",
            location: "Saudi Arabia"
        },
        {
            name: "Dr. Qian Liu",
            department: "Department of Computer Science and Engineering",
            university: "Krirk University",
            location: "Thailand"
        },
    ];

    const technicalcomiittee = [
        {
            name: "Dr. Lamia Abed Noor Muhammed",
            department: "Department of Computer Science",
            university: "University of Al-Qadisiyah",
            location: "Iraq"
        },
        {
            name: "Dr. Zonghai Wang",
            department: "Department of Information Sciences,",
            university: "Nanjing Agricultural University",
            location: "China"
        },
        {
            name: "Dr. Tejas Dhote",
            department: "Department of Mechanical Engineering",
            university: "Michigan Technological University",
            location: "USA"
        },
        {
            name: "Dr. Monday O. Eze",
            department: "Department of Computer Science",
            university: "Babcock University",
            location: "Nigeria"
        },
        {
            name: "Dr. Yogi Pratama",
            department: "Department of Medical Informatics",
            university: "Al Insyirah Institute of Health and Technology",
            location: "Indonesia"
        },
        {
            name: "Dr. Samir Hallaci",
            department: "Department of Computer Science",
            university: "Guelma University",
            location: "Algeria"
        },
        {
            name: "Dr. Hadhrami Ab. Ghani",
            department: "Department of Data Science and Computing",
            university: "Universiti Malaysia Kelantan",
            location: "Malaysia"
        },
        {
            name: "Dr. Pariza Kamboj",
            department: "Department of Computer Engineering",
            university: "Sarvajanik College of Engineering and Technology",
            location: "India"
        },
        {
            name: "Dr. Muhammad Mujahid",
            department: "Department of Computer Science",
            university: "Khwja Fareed University of Engineering and Information Technology",
            location: "Pakistan"
        },
        {
            name: "Dr. Shriram Pandey",
            department: "Department of Computer Science",
            university: "University of East London",
            location: "United Kingdom"
        },
        {
            name: "Dr. Abderrahim Bouchair",
            department: "Department of Computer Science",
            university: "University of Oran1 Ahmed Ben Bella",
            location: "Algeria"
        },
        {
            name: "Dr. Muhammad Umair Hassan",
            department: "Department of  ICT and Natural Sciences",
            university: "Norwegian University of Science and Technology",
            location: "Norway"
        },
        {
            name: "Dr. Huiliang Zhao",
            department: "Department of Product Design",
            university: "Guizhou minzu University",
            location: "China"
        },
        {
            name: "Dr. Twana A. Hamad",
            department: "Department of Computer Engineering",
            university: "Harran University",
            location: "Turkiye"
        },
        {
            name: "Dr. Olaniyi S Maliki",
            department: "Department of Mathematics",
            university: "Michael Okpara Federal University",
            location: "Nigeria"
        },
        {
            name: "Dr. Jawwad Sami Ur Rahman",
            department: "Department of Biomedical Engineering",
            university: "Riphah International University",
            location: "Pakistan"
        },
        {
            name: "Dr. Nour Moustafa",
            department: "Department of Computer Science",
            university: "American University of the Middle East",
            location: "Kuwait"
        },
        {
            name: "Dr. Hung Nguyen",
            department: "Department of Information Technology",
            university: "Nha Trang University",
            location: "Vietnam"
        },
        {
            name: "Dr.D. Kayathri Devi",
            department: "Department of Information Technology and Engineering",
            university: "Amity University",
            location: "Uzbekistan"
        },
        {
            name: "Dr. Mohammad Javad Fadaeieslam",
            department: "Department of Electrical and Computer Engineering",
            university: "Semnan University",
            location: "Iran"
        }
    ];


    const advisorycommittee = [
        {
            name: "Dr. Alma Bangayan Manera",
            department: "Department of Electronics and Communication Engineering",
            university: "Cagayan State University",
            location: "Philippines"
        },
        {
            name: "Dr. Rahman Shafique",
            department: "Department of Information and Communication Engineering",
            university: "Yeungnam University",
            location: "South Korea"
        },
        {
            name: "Dr. Muhammad Asif Khan",
            department: "Department of Information Technology",
            university: "Qatar University",
            location: "Qatar"
        },
        {
            name: "Dr. Zouhour El-Abiad",
            department: "Department of Computer Science",
            university: "ESA Business School",
            location: "Lebanon"
        },
        {
            name: "Dr. Sowmipriya Rajendiran",
            department: "Department of Computer Science and Engineering",
            university: "International School of Information Processing Sciences",
            location: "France"
        },
        {
            name: "Dr. Ammar Amjad",
            department: "Department of Information Technology",
            university: "National Yang Ming Chiao Tung University",
            location: "Taiwan"
        },
        {
            name: "Dr. Leandro N. Balico",
            department: "Department of Computer Science",
            university: "Federal University of Roraima",
            location: "Brazil"
        },
        {
            name: "Dr. Ghasem Abbasi",
            department: "Department of Mathematics and Statistics",
            university: "Islamic Azad University",
            location: "Iran"
        },
        {
            name: "Dr. Bilal Saoud",
            department: "Department of Electrical Engineering",
            university: "University of Bouira",
            location: "Algeria"
        },
        {
            name: "Dr. Aram Sabr Tahr",
            department: "Department of Computer Science",
            university: "Cyprus International University",
            location: "Cyprus"
        },
        {
            name: "Dr. Ernesto Carrillo Arellano",
            department: "Department of Electronics Engineering",
            university: "Metropolitan Autonomous University",
            location: "Mexico"
        },
        {
            name: "Dr. Shaikh Muhammad Allayear",
            department: "Department of Multimedia and Creative Technology",
            university: "Daffodil International University",
            location: "Bangladesh"
        },
        {
            name: "Dr. Awder Omar Abdulqadir",
            department: "Department of Mathematical Physics",
            university: "University of Halabja",
            location: "Iraq"
        },
        {
            name: "Dr. Wasan Alamro",
            department: "Department of Electrical Engineering",
            university: "Auckland University of Technology",
            location: "New Zealand"
        },
        {
            name: "Dr. Meenakshi Gupta",
            department: "Department of Computer Science",
            university: "National University of Singapore",
            location: "Singapore"
        },
        {
            name: "Dr.S. Prasanth",
            department: "Department of Physical Sciences and Technology",
            university: "Sabaragamuwa University of Sri Lanka",
            location: "Sri Lanka"
        },
        {
            name: "Dr. Kabelo Given Chuma",
            department: "Department of Information Science",
            university: "University of South Africa",
            location: "South Africa"
        },
        {
            name: "Dr. Stanley Adiele Okolie",
            department: "Department of Computer Science",
            university: "Federal University of Technology Owerri",
            location: "Nigeria"
        },
        {
            name: "Dr.Md Al Mustanjid",
            department: "Department of Software Engineering",
            university: "Daffodil International University",
            location: "Bangladesh"
        },

        {
            name: "Dr. Chinwe Peace Igiri",
            department: "Department of Computer Science",
            university: "Cavendish University",
            location: "Uganda"
        },
        {
            name: "Dr.K. Kokilavani",
            department: "Department of Computer Science Engineering",
            university: "Panimalar Engineering College",
            location: "India"
        },
        {
            name: "Dr. Marwan Ramdhany Edy",
            department: "Department of Informatics and Computer Engineering",
            university: "Universitas Negeri Makassar",
            location: "Indonesia"
        },
        {
            name: "Dr. Muhammad Suleman Memon",
            department: "Department of Information Technology",
            university: "University of Sindh",
            location: "Pakistan"
        },
        {
            name: "Dr. Tusar Kanti Dash",
            department: "Department of Electronics and Communication Engineering",
            university: "C. V. Raman Global University",
            location: "India"
        },
        {
            name: "Dr. Leo John Baptist",
            department: "Department of Information Technology",
            university: "Botho University",
            location: "Botswana"
        },
        {
            name: "Dr. Asma Sbeih",
            department: "Department of Engineering and Information",
            university: "Palestine Ahliya University",
            location: "Palestine"
        },
        {
            name: "Dr. Ajaegbu Chigozirim",
            department: "Department of Information Technology",
            university: "Babcock University",
            location: "Nigeria"
        },
        {
            name: "Dr.R. Veerandrakumar",
            department: "Department of Computer Science Engineering",
            university: "Panimalar Engineering College",
            location: "India"
        }
    ];


    return (
        <>
            <div className="mt-[90px]">
                <section className="py-10 bg-gradient-to-b from-indigo-50 to-indigo-50 relative">
                    <div className="absolute inset-0 bg-[url('/assets/images/Tracks.png')] opacity-5 bg-cover bg-center"></div>

                    <div className="container mx-auto relative z-10 px-4">
                        <h1 className="text-center text-2xl md:text-3xl xl:text-4xl font-bold mb-6   text-indigo-900">
                            Editorial Board
                        </h1>
                        <p className="sm:text-base md:text-lg lg:text-[18px] text-gray-800 leading-[30px] text-justify">
                            The Editorial Board of the International Conference on Computing, Networking, and Data Science comprises distinguished experts from academia, research institutions, and industry across the globe. Our board members play a critical role in maintaining the academic integrity, quality, and relevance of the conference. They contribute by reviewing submitted papers, guiding the thematic structure of the sessions, and ensuring the overall excellence of the event.
                        </p>
                        <div className="mt-4 mb-10 space-y-3 sm:text-base md:text-lg lg:text-[17px]">
                            <p className="text-xl font-semibold text-indigo-900">Responsibilities of the Editorial Board
                            </p>
                            <ul className='list-disc list-inside'>
                                <li>Evaluate submissions for originality, technical quality, and relevance</li>
                                <li>Advise on the strategic direction and scope of the conference</li>
                                <li>Promote the conference within their professional networks</li>
                            </ul>

                        </div>

                        <div className="">
                            <h3 id="organizingCommittee" className="scroll-mt-26 font-semibold text-[25px] lg:text-[30px] text-indigo-900 text-center ">Organizing Committee</h3>
                            <div className="max-w-[1300px] mx-auto py-3">
                                {Organizingcommitte.map((editor, index) => (
                                    <div key={index}>
                                        <div className='flex gap-2  mb-2 items-center'>
                                            <FaCircleUser className='text-gray-600 flex-shrink-0' />
                                            <p className="text-gray-800 text-[15px]"><span className='font-medium text-[16px] text-black'>{editor.name}</span> - {editor.department}, {editor.university}, {editor.location}.</p>
                                        </div>
                                    </div>
                                ))}
                            </div>


                            <h3 id="technical" className="scroll-mt-26 font-semibold text-[25px] lg:text-[30px] text-indigo-900 text-center mt-8 ">Technical Program Committee</h3>
                            <div className="max-w-[1300px] mx-auto py-3">
                                {technicalcomiittee.map((editor, index) => (
                                    <div key={index}>
                                        <div className='flex gap-2  mb-2 items-center'>
                                            <FaCircleUser className='text-gray-600 flex-shrink-0' />
                                            <p className="text-gray-800 text-[15px]"><span className='font-medium text-[16px] text-black'>{editor.name}</span> - {editor.department}, {editor.university}, {editor.location}.</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h3 id="advisory" className="scroll-mt-26 font-semibold text-[25px] lg:text-[30px] text-indigo-900 text-center mt-8 ">International Advisory Board Committee</h3>
                            <div className="max-w-[1300px] mx-auto py-3">
                                {advisorycommittee.map((editor, index) => (
                                    <div key={index}>
                                        <div className='flex gap-2  mb-2 items-center'>
                                            <FaCircleUser className='text-gray-600 flex-shrink-0' />
                                            <p className="text-gray-800 text-[15px]"><span className='font-medium text-[16px] text-black'>{editor.name}</span> - {editor.department}, {editor.university}, {editor.location}.</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>


                    </div>
                </section>
            </div>
        </>
    )
}


{/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

    {[
        {
            name: "A. Karthikeyan",
            university: "SNS College of Technology",
            department: "Department of Electronics and Communication Engineering",
            location: "Bangladesh"
        },
        {
            name: "Stephen Ekwe",
            university: "University of Cape Town",
            department: "Department of Electrical and Electronics Engineering",
            location: "South Africa"
        },
    ].map((editorial, index) => (
        <div id='organizingcommittee'
            key={index}
            className="bg-gradient-to-br from-indigo-50 to-purple-50 py-10 px-3 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-indigo-100/50 text-center"
        >
            <h3 className="text-xl sm:text-2xl font-bold text-indigo-900 mt-4">Dr. {editorial.name}</h3>
            <p className="text-base sm:text-lg text-indigo-700 mt-4">{editorial.department}</p>
            <p className="text-base sm:text-base text-purple-600">{editorial.university}</p>
            <p className="text-sm sm:text-base text-gray-700">{editorial.location}</p>
        </div>
    ))}
</div> */}