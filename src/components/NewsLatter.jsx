import React from 'react'
import { Mail } from 'lucide-react'

const NewsLatter = () => {
  return (
    <section className="relative">
      {/* Floating Action Icon */}
      <div className="absolute top-[-20px] right-6 md:right-[100px] w-[60px] h-[60px] bg-[#6246E5] rounded-full flex items-center justify-center shadow-lg z-50">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 12L20 4L13.5 20L11 13L4 12Z" />
        </svg>
      </div>

      {/* Main Section */}
      <section className="w-10/12  mx-auto my-16 px-6 py-10 md:py-20 bg-[#DFD7F9] rounded-[100px_20px_20px_20px] text-center relative overflow-hidden">
        {/* Decorative Circles - Top Left */}
        <div className="absolute left-[-120px] top-[-100px] opacity-20 z-0">
          <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
            {[...Array(6)].map((_, i) => (
              <circle
                key={i}
                cx="200"
                cy="200"
                r={50 + i * 25}
                stroke="#2f302e"
                strokeWidth="1"
                fill="none"
              />
            ))}
          </svg>
        </div>

        {/* Decorative Circles - Bottom Right */}
        <div className="absolute right-[-120px] bottom-[-100px] opacity-20 z-0 rotate-180">
          <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
            {[...Array(6)].map((_, i) => (
              <circle
                key={i}
                cx="200"
                cy="200"
                r={50 + i * 25}
                stroke="#2f302e"
                strokeWidth="1"
                fill="none"
              />
            ))}
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto relative z-10">
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </h1>

        {/* Input and Button */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 z-10 relative flex-wrap">
          {/* Input Box */}
          <div className="flex items-center rounded-md px-4 py-3 h-auto w-full max-w-[421px] bg-white shadow-xl">
            <Mail className="text-[#4b4b4b] mr-2" />
            <input
              type="text"
              placeholder="Your email"
              className="w-full outline-none text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Subscribe Button */}
          <button className="bg-gradient-to-r from-[#ff8660] to-[#ff3cac] text-white font-semibold rounded-md px-8 py-3 cursor-pointer shadow-md w-full sm:w-auto">
            Subscribe
          </button>
        </div>
      </section>
    </section>
  )
}

export default NewsLatter
