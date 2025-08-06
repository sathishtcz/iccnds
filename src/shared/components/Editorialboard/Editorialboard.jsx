import React from 'react'

export default function Editorialboard() {
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
                            <li>Evaluate submissions for originality, technical quality, and relevance</li>
                            <li>Advise on the strategic direction and scope of the conference</li>
                            <li>Promote the conference within their professional networks</li>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Member Card */}
                            {[
                                {
                                    name: "A. Karthikeyan",
                                    university: "SNS College of Technology",
                                    department: " Department of Electronics and Communication Engineering",
                                    location: "Bangladesh"
                                },
                                {
                                    name: "Stephen Ekwe",
                                    university: "University of Cape Town",
                                    department: "Department of Electrical and Electronics Engineering",
                                    location: "South Africa"
                                },
                                {
                                    name: "Asma Sbeih",
                                    university: "Palestine Ahliya university",
                                    department: "Department of Information Technology",
                                    location: "Palestine"
                                },

                                {
                                    name: "V. Maheshwari",
                                    department: "Department of  Information Technology and Engineering",
                                    university: "Vellore Institute of Technology",
                                    location: "India"
                                },
                                {
                                    name: "Marwan Ramdhany Edy",
                                    department: "Department of Informatics and Computer Engineering",
                                    university: "University of Diponegoro",
                                    location: "Indonesia"
                                },
                                {
                                    name: "Abderrahim Bouchair",
                                    department: "Department of Computer Science",
                                    university: "University of Oran1 Ahmed Ben Bella",
                                    location: "Algeria"
                                },
                                {
                                    name: "Deevi Radha Rani",
                                    department: "Department of Computer Science and Engineering",
                                    university: "Vignan's Foundation for Science, Technology & Research",
                                    location: "India "
                                },
                                { name: 'A. Antonidoss', department: 'Department of Computer Science & Business Systems', university: 'Hindustan Institute of Technology', location: 'India' },
                                { name: 'Mujtaba Korai', department: 'Department of Computer Science & Engineering', university: 'Gachon University', location: 'South Korea' },
                                { name: 'C. Karthik', department: 'Department of Mechatronics Engineering', university: 'Jyothi Engineering College', location: 'India' },
                                { name: 'Ali Rizwan', department: 'Department of Industrial Engineering', university: 'King Abdulaziz University', location: 'Saudi Arabia' },
                                {
                                    name: "Yogi Pratama",
                                    department: "Department of Medical Informatics",
                                    university: "Al Insyirah Institute of Health and Technology",
                                    location: "Indonesia"
                                },
                                {
                                    name: "Bawar Mohammed Faraj",
                                    department: "Department of Information Technology",
                                    university: "University of Halabja Computer Science",
                                    location: "Iraq"
                                },
                                {
                                    name: "Minhaz Uddin Emon",
                                    department: "Department of Computer Science",
                                    university: "Pattimura University",
                                    location: "Indonesia"
                                },
                                {
                                    name: "Sidaoui Boutkhil",
                                    department: "Department of Computer Science",
                                    university: "Salhi Ahmed University of Naama",
                                    location: "Algeria"
                                },


                                {
                                    name: "G.Vinodhini",
                                    department: "Department of Information Technology",
                                    university: "Annamalai University",
                                    location: "India"
                                },

                                {
                                    name: "Ajanthaa Lakkshmanan",
                                    department: "Department of Computer Science",
                                    university: "Sathyabama Institute of Science and Technology",
                                    location: "India"
                                },

                                {
                                    name: "Tariq Javid",
                                    department: "Department of Biomedical Engineering",
                                    university: "Hamdard University",
                                    location: "Pakistan"
                                },
                            ].map((editorial, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-indigo-50 to-purple-50 py-10 px-3 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-indigo-100/50 text-center"
                                >
                                    <h3 className="text-xl sm:text-2xl font-bold text-indigo-900 mt-4">Dr. {editorial.name}</h3>
                                    <p className="text-base sm:text-lg text-indigo-700 mt-4">{editorial.department}</p>
                                    <p className="text-base sm:text-base text-purple-600">{editorial.university}</p>
                                    <p className="text-sm sm:text-base text-gray-700">{editorial.location}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
