import React from 'react'
import antinaImg from '../assets/antina.png'
import flight from '../assets/filght.png'
import mic from '../assets/mic.png'
import setting from '../assets/setting.png'

const Imagesdata = [
  {
    img: antinaImg,
    name: 'Calculated Weather',
    desc: 'Built Wicket longer admire do barton vanity itself do in it.',
  },
  {
    img: flight,
    name: 'Best Flights',
    desc: 'Engrossed listening. Park gate sell they west hard for the.',
  },
  {
    img: mic,
    name: 'Local Events',
    desc: 'Barton vanity itself do in it. Prefer to men it engrossed listening.',
  },
  {
    img: setting,
    name: 'Customization',
    desc: 'We deliver outsourced aviation services for military customers',
  },
]

const Services = () => {
  return (
    <section className="text-center py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-14">
        <p className="text-gray-500 font-semibold uppercase tracking-wide">
          Category
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold font-serif text-[#14183E] mt-3">
          We Offer Best Services
        </h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {Imagesdata.map((item, index) => (
          <div
            key={index}
            className="relative text-center p-6 rounded-2xl bg-white  transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.01] group"
          >
            {/* Corner shape on hover */}
            <div className="absolute bottom-0 left-0 w-14 h-14 bg-[#DF6951] rounded-tr-3xl rounded-bl-2xl scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out" />

            <div className="relative z-10">
              <div className="mx-auto mb-4 w-20 h-20 flex items-center justify-center rounded-xl bg-[#fef5ea]">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-14 h-14 object-contain"
                />
              </div>
              <h4 className="text-lg font-semibold text-[#14183E] mb-2">
                {item.name}
              </h4>
              <p className="text-gray-500 text-sm max-w-[180px] mx-auto">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
