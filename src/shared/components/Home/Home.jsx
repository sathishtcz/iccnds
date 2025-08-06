import React from 'react'
import { GrLocation } from 'react-icons/gr'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { LuMailOpen, LuSend } from 'react-icons/lu'
import { MdOutlineCalendarToday } from 'react-icons/md'


function Home() {
  return (
    <>
      <div className=" text-gray-100 py-6 relative overflow-hidden flex items-center bg-[url('/assets/images/Hero.png')] bg-cover bg-center h-[680px] backdrop-blur-lg">
        <div className="absolute inset-0 gradient-animate bg-gradient-to-r from-indigo-950 via-purple-950 to-indigo-950 opacity-80 "></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-float">
            <h1 className="text-3xl lg:text-5xl xl:text-6xl   mb-8 bg-clip-text bg-white">
              International Conference on Computing,
              <br />
              Networking, and Data Science
            </h1>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-lg">
            {/* Conference Dates */}
            <div className="flex items-center gap-3 bg-indigo-900/30 backdrop-blur-sm px-6 py-3 rounded-full transition-transform hover:scale-105">
              <MdOutlineCalendarToday className='text-purple-300 w-5 h-5' />
              <span>March 5, 2025</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 bg-indigo-900/30 backdrop-blur-sm px-6 py-3 rounded-full transition-transform hover:scale-105">
              <HiOutlineLocationMarker className='text-purple-300 w-5 h-5' />
              <span>Riyadh, Saudi Arabia</span>
            </div>
          </div>
        </div>
      </div>

      <section className=" bg-gradient-to-b py-5 from-indigo-50 to-purple-50">
        <div className="container mx-auto px-2 ps-0 md:px-4 lg:px-8">
          <div className="max-w-9xl mx-auto p-4 md:p-8 rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

              <div>
                <div className="border-l-4 border-purple-500 pl-3">
                  <h2 className="text-start text-2xl md:text-3xl lg:text-4xl font-bold   text-indigo-900">
                    About the Conference
                  </h2>
                </div>

                <p className="text-gray-800 mt-6 sm:text-base md:text-lg lg:text-[18px] text-justify leading-[30px]">
                  The International Conference on Computing, Networking, and Data Science brings together leading
                  researchers, engineers, and scientists to exchange and share their experiences and research results in
                  all aspects of Computing, Networking, and Data Science.
                </p>
                <p className="text-gray-800 sm:text-base md:text-lg lg:text-[18px] text-justify leading-[30px] mt-4">
                  This premier conference provides an international forum for the presentation and discussion of the
                  latest developments, innovations, and research findings in the fields of computing technologies,
                  networking solutions, and data science applications.
                </p>

                <div className="mt-4 space-y-3 sm:text-base md:text-lg lg:text-[16px]">
                  <p className="text-xl font-semibold text-indigo-900">Key Highlights of the Conference
                  </p>
                  <li>International platform for researchers and professionals</li>
                  <li>High-quality paper presentations and keynote sessions</li>
                  <li>Focus on Computing, Networking, and Data Science</li>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl">
                <img
                  alt="Conference Hall"
                  className="w-full h-auto object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
                  src="/assets/images/About.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="   bg-gradient-to-b from-indigo-50 to-purple-50 py-5">
        <div className="container mx-auto px-2 ps-0 md:px-4 lg:px-8">
          <div className="max-w-9xl mx-auto p-4 md:p-8 rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative overflow-hidden rounded-xl lg:order-none order-2">
                <img
                  alt="Conference hall"
                  className="w-full h-auto object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
                  src="/assets/images/scope.png"
                />
              </div>
              <div>
                <div className='border-l-4 border-purple-500 pl-3'>
                  <h2 className="text-start text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-indigo-900">
                    Scope of the Conference
                  </h2>
                </div>
                <p className="text-gray-800 mt-6 sm:text-base md:text-lg lg:text-[18px] text-justify leading-[30px]">
                  The International Conference on Computing, Networking, and Data Science aims to bring together leading academic scientists, researchers, and industry professionals to exchange and share their knowledge, experiences, and research outcomes in all aspects of modern computing technologies. This conference provides a premier interdisciplinary platform for discussing innovations, trends, and challenges in the fields of computing systems, intelligent networking, and advanced data science.
                </p>
                <div className="mt-4 space-y-3 sm:text-base md:text-lg lg:text-[16px]">
                  <p className="text-xl font-semibold text-indigo-900">Here are a few key highlights of our scope:
                  </p>
                  <li>Deep learning, reinforcement learning, generative AI, and real-time AI applications.</li>
                  <li>Scalable systems, containerization, microservices, and cloud-native architectures.</li>
                  <li>PU/TPU computing, distributed computing, and quantum algorithms.</li>
                  <li>Data mining, visualization, predictive analytics, and decision support systems.</li>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      <section className="py-10 bg-gradient-to-b from-purple-50 to-indigo-50 relative">
        <div className="absolute inset-0 bg-[url('/assets/images/Tracks.png')] opacity-5 bg-cover bg-center"></div>

        <div className="container mx-auto relative z-10">
          <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold px-2  md:pe-10 mb-5  text-indigo-900">
            Conference Tracks
          </h2>
          <div className="max-w-[85rem] mx-auto px-4 md:px-8">
            <p className="text-indigo-800 mb-10 text-justify    md:text-center sm:text-base md:text-lg lg:text-[18px] ">
              We invite researchers to submit original research papers on the following topics (but not limited to):
            </p>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
              {[
                'Artificial Intelligence and Machine Learning',
                'Cloud Computing and Virtualization',
                'Big Data Analytics and Data Mining',
                'Computer Networks and Security',
                'Internet of Things (IoT)',
                'Blockchain Technology',
                'Cybersecurity and Privacy',
                'Software Engineering',
                'Mobile Computing',
              ].map((topic, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-indigo-100/50"
                >
                  <p className="text-indigo-900 text-lg">{topic}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

     
        <section className="py-10 bg-gradient-to-b from-indigo-100 to-purple-200">
          <div className="container mx-auto px-3 md:px-12 max-w-8xl">
            <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-extrabold mb-12 text-indigo-900 tracking-wide">
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
                <form>
                  <div className="flex flex-col  gap-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <div className="text-xl">
                        <label className="block text-lg font-medium text-indigo-900">First Name</label>
                        <input
                          required
                          type="text"
                          name="firstname"
                          className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div className="text-xl">
                        <label className="block text-lg font-medium text-indigo-900">Last Name</label>
                        <input
                          required
                          type="text"
                          name="lastname"
                          className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>


                      <div>
                        <label className="block text-lg font-medium text-indigo-900">Email</label>
                        <input
                          required
                          type="email"
                          name="email"
                          className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>

                      <div className="text-xl">
                        <label className="block text-lg font-medium text-indigo-900">Mobile Number</label>
                        <input
                          required
                          type="text"
                          name="mobileno"
                          className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>


                      <div className='lg:col-span-2'>
                        <label className="block text-lg font-medium text-indigo-900">Message</label>
                        <textarea
                          required
                          name="message"
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
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      
    </>
  )
}

export default Home