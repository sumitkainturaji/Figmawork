import {
  CarTaxiFront,
  Heart,
  Leaf,
  Map,
  Send,
  VectorSquare,
  WavesLadder,
  Building,
} from 'lucide-react'

import { images } from '../assets/projectAssets'

const Trip = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between gap-10 py-16 px-4 md:px-8 lg:px-0 w-10/12 mx-auto overflow-hidden">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 space-y-6">
        <span className="text-sm font-semibold text-gray-500">
          Easy and Fast
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#14183E] leading-snug font-serif hover:underline   ">
          Book Your Next Trip <br /> In 3 Easy Steps
        </h1>

        <div className="space-y-6 mt-8  max-w-2/3 ">
          {/* Step 1 */}
          <div className="flex items-start gap-4">
            <div className="bg-yellow-400 p-3 rounded-xl text-white">
              <VectorSquare />
            </div>
            <div>
              <h3 className="text-md font-semibold text-[#14183E]">
                Choose Destination
              </h3>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-4">
            <div className="bg-red-400 p-3 rounded-xl text-white">
              <WavesLadder />
            </div>
            <div>
              <h3 className="text-md font-semibold text-[#14183E]">
                Make Payment
              </h3>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-4">
            <div className="bg-teal-700 p-3 rounded-xl text-white">
              <CarTaxiFront />
            </div>
            <div>
              <h3 className="text-md font-semibold text-[#14183E]">
                Reach Airport on Selected Date
              </h3>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative w-full sm:max-w-sm bg-white rounded-2xl p-5 shadow-[10px_0px_10px_0px] shadow-indigo-500 mt-10 lg:mt-0 lg:right-[60px]">
        <img
          src={images.trip}
          alt="Trip"
          className="rounded-xl h-[180px] w-full object-cover"
        />

        <h2 className="mt-4 text-lg font-bold text-[#14183E]">
          Trip To Greece
        </h2>
        <p className="text-gray-500 text-sm mb-3">
          14-29 June | by Robbin joseph
        </p>

        <div className="flex gap-4 mb-4">
          <Leaf className="text-gray-600" />
          <Map className="text-gray-600" />
          <Send className="text-gray-600" />
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Building />
            <span>24 people going</span>
          </div>
          <Heart className="text-purple-500" />
        </div>

        {/* Ongoing Trip Card */}
        <div className="absolute -right-16 bottom-[50px] w-[230px] bg-white shadow-lg rounded-xl p-4 flex gap-4 items-center max-sm:static max-sm:mt-6">
          <img
            src={images.taj}
            alt="tajmahal"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="w-full">
            <p className="text-xs text-gray-400">Ongoing</p>
            <h3 className="font-semibold text-sm">Trip to Rome</h3>
            <p className="text-xs text-gray-400">
              <span className="text-blue-500 font-medium">40%</span> completed
            </p>
            <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
              <div
                className="bg-blue-500 h-1 rounded-full"
                style={{ width: '40%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trip
