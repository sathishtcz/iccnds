import React from 'react'

export default function Keydates() {
  return (
    <>
      <div className="mt-[90px]">
        <section className="py-10  bg-gradient-to-b from-indigo-50 to-purple-50">
          <div className="container mx-auto">
            <h2 className="text-center text-2xl md:text-3xl lg:text-4xl md:px-1 md:pe-10 mb-12 text-indigo-900 font-bold">
              Important Dates
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 px-4 md:px-12 gap-8 max-w-[80rem] mx-auto">

              {/* Important Dates */}
              <div className="relative overflow-hidden mx-auto">
                <img
                  className="w-[500px] object-cover rounded-xl"
                  src="/assets/images/Keydate.png"
                  alt="Calendar Dates"
                />

              </div>

              <div className=" ">
                {[
                  { label: "Abstract Submission Deadline", date: "February 3, 2025" },
                  { label: "Full Paper Submission Deadline", date: "February 12, 2025" },
                  { label: "Notification of Acceptance", date: "February 19, 2025" },
                  { label: "Final Paper Submission", date: "February 27, 2025" },
                  { label: "Conference Dates", date: "March 5, 2025" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-indigo-200/30 hover:bg-indigo-50/50 transition-colors duration-300 px-4 rounded-lg -mx-4"
                  >
                    <span className="text-indigo-900 font-medium sm:text-base md:text-lg lg:text-[18px]">{item.label}</span>
                    <span className="text-purple-700  bg-purple-100/50 px-4 py-2 rounded-full sm:text-base md:text-lg lg:text-[18px]">
                      {item.date}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bank Details */}
              {/* <div className="bg-white shadow-xl rounded-2xl px-3 md:px-10 py-6 border-gray-200">
                <h3 className="text-2xl py-7 font-bold text-blue-700 text-center mb-6 uppercase tracking-wide">Bank Details</h3>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl shadow-inner">
                  <div className="space-y-6 text-xl text-gray-800">
                    <div className="flex flex-col">
                      <span className="font-semibold text-gray-700">Account Name</span>
                      <span className="text-gray-900">
                        International Conference on Computing, Networking, and Data Science, Chennai.
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-gray-700">Account Number</span>
                      <span className="text-gray-900">123456789</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-gray-700">Branch</span>
                      <span className="text-gray-900">Chennai</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-gray-700">IFSC Code</span>
                      <span className="text-gray-900">TMBL03000045</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-gray-700">MICR</span>
                      <span className="text-gray-900">6053060005</span>
                    </div>
                  </div>
                </div>
              </div> */}

            </div>
          </div>
        </section>
      </div>
    </>
  )
}


// <div className="bg-white shadow-xl rounded-2xl px-3 md:px-10 py-6 border-gray-200">
//                 <h3 className="text-2xl py-7 font-bold text-blue-700 text-center mb-6 uppercase tracking-wide">Bank Details</h3>
//                 <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl shadow-inner">
//                   <div className="space-y-6 text-xl text-gray-800">
//                     <div className="flex flex-col">
//                       <span className="font-semibold text-gray-700">Account Name</span>
//                       <span className="text-gray-900">
//                         International Conference on Computing, Networking, and Data Science, Chennai.
//                       </span>
//                     </div>
//                     <div className="flex flex-col">
//                       <span className="font-semibold text-gray-700">Account Number</span>
//                       <span className="text-gray-900">123456789</span>
//                     </div>
//                     <div className="flex flex-col">
//                       <span className="font-semibold text-gray-700">Branch</span>
//                       <span className="text-gray-900">Chennai</span>
//                     </div>
//                     <div className="flex flex-col">
//                       <span className="font-semibold text-gray-700">IFSC Code</span>
//                       <span className="text-gray-900">TMBL03000045</span>
//                     </div>
//                     <div className="flex flex-col">
//                       <span className="font-semibold text-gray-700">MICR</span>
//                       <span className="text-gray-900">6053060005</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>