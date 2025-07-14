import { Navigation } from 'lucide-react'
import { images } from '../assets/projectAssets'

const Data = [
  {
    src: images.rome,
    city: 'Rome, Italy',
    price: '$5.42k',
    trip: '10 Days Trip',
  },
  {
    src: images.build,
    city: 'London, UK',
    price: '$4.2k',
    trip: '12 Days Trip',
  },
  {
    src: images.europe,
    city: 'Full Europe',
    price: '$15k',
    trip: '28 Days Trip',
  },
]

const Destination = () => {
  return (
    <div className="relative">
      <section className="w-10/12 max-w-7xl mx-auto py-16 relative">
        <div className="text-center mb-14">
          <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide">
            Top Selling
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold font-serif text-[#14183E] mt-3">
            Top Destinations
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
          {Data.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl shadow-lg w-full max-w-sm overflow-hidden"
            >
              <img
                src={item.src}
                alt={`destination-${index}`}
                className="w-full h-100 object-cover rounded-t-3xl z-10"
              />

              <div className="px-5 py-4 bg-white rounded-b-3xl relative z-10">
                <div className="flex justify-between text-gray-600 font-semibold text-md mb-6">
                  <span>{item.city}</span>
                  <span>{item.price}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-10">
                  <Navigation className="w-4 h-4 text-[#14183E]" />
                  <span>{item.trip}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div>
        <img
          src={images.tripcircle}
          alt=""
          className="absolute right-20 top-100 "
        />
      </div>
    </div>
  )
}

export default Destination
