import React from 'react'

export default function Scope() {
  return (
    <div className='mt-[90px]'>
      <section className="py-5   bg-gradient-to-b from-indigo-50 to-purple-50 ">
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
                    <ul className='list-disc list-inside'>
                      <li>Deep learning, reinforcement learning, generative AI, and real-time AI applications.</li>
                    <li>Scalable systems, containerization, microservices, and cloud-native architectures.</li>
                    <li>PU/TPU computing, distributed computing, and quantum algorithms.</li>
                    <li>Data mining, visualization, predictive analytics, and decision support systems.</li>
                    </ul>
                    
                  </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
