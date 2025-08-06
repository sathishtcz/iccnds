import React from 'react'

function About() {
  return (
    <>
      <div className="mt-[90px]">
        <section className="py-5  bg-gradient-to-b from-indigo-50 to-purple-50">
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
      </div>
    </>
  )
}

export default About