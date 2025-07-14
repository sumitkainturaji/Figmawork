import React from "react";
import img from "../assets/imagel.png";

const Testimonials = () => {
  return (
    <div className="bg-white py-20 px-6 md:px-20 lg:px-32 flex flex-col md:flex-row items-start justify-between gap-10">
    
      <div className="flex-1">
        <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Testimonials</p>
        <h1 className="text-4xl font-bold text-gray-900 leading-snug">
          What People Say <br /> About Us.
        </h1>

       
        <div className="flex space-x-2 mt-6">
          <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
      </div>

    
      <div className="flex-1 relative">
       
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl relative z-10">
         
          <img
            src={img}
            alt="Profile"
            className="w-14 h-14 rounded-full border-4 border-white shadow-md absolute -top-8 left-0"
          />

          <p className="text-gray-700 text-base md:text-lg mt-8">
            “On the Windows talking painted pasture yet its express parties use. Sure
            last upon he same as knew next. Of believed or diverted no.”
          </p>

          <div className="mt-6">
            <p className="text-base font-semibold text-gray-900">Mike Taylor</p>
            <p className="text-sm text-gray-500">Lahore, Pakistan</p>
          </div>
        </div>

        <div className=" ml-10 lg:ml-20  bg-gray-100 p-4 rounded-xl shadow-inner w-[90%]">
          <p className="text-base font-semibold text-gray-800">Chris Thomas</p>
          <p className="text-sm text-gray-500">CEO of Red Button</p>
          
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
