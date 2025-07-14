import { images } from '../assets/projectAssets'
import { Play } from 'lucide-react'

const Hero = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between w-10/12 mx-auto  relative overflow-hidden h-[90vh]">
        <div className="flex-1 space-y-4 max-w-xl ">
          <p className="text-[#d8634c] font-bold uppercase tracking-wide text-lg">
            Best Destinations Around the World
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold font-serif leading-snug text-[#181E4B] ">
            Travel,{' '}
            <span className="relative inline-block border-b-6  border-orange-500">
              enjoy
              <span className="absolute -bottom-1 left-0 w-full h-2 bg-orange-300 z-[-1]"></span>
            </span>
            <br />
            and live a new <br /> and full life
          </h1>
          <p className="text-gray-500 max-w-xl">
            Built Wicket longer admire do barton vanity itself do in it. <br />{' '}
            Preferred to sportsmen it engrossed listening. <br /> Park gate sell
            they west hard for the.
          </p>

          <div className="flex items-center gap-8 pt-4 mt-6">
            <button className="bg-[#f1a600] hover:bg-yellow-500  font-semibold text-white px-8 py-4 rounded shadow-md cursor-pointer transition">
              Find out more
            </button>

            <div className="flex items-center gap-4">
              <button className="w-14 h-14 rounded-full bg-[#DF6951] flex items-center justify-center text-white shadow-md shadow-[#DF6951] hover:scale-105 transition cursor-pointer font-semibold ">
                <Play size={14} />
              </button>
              <span className="text-[#686D77] font-medium text-lg">
                Play Demo
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="absolute z-5 right-0 top-0 mt-21 hidden xl:block ">
        <svg
          viewBox="0 0 900 600"
          width="900"
          height="600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(900, 0) scale(1.2)">
            <path
              d="M0 486.7C-32.4 459.4 -64.7 432 -94.8 415.3C-124.8 398.6 -152.6 392.7 -187 388.3C-221.4 384 -262.5 381.2 -286.8 359.6C-311.1 338 -318.5 297.6 -337 268.7C-355.4 239.9 -385 222.6 -411.7 198.3C-438.5 174 -462.5 142.5 -474.5 108.3C-486.6 74.1 -486.7 37 -486.7 0L0 0Z"
              fill="#FFF1DA"
            />
          </g>
        </svg>
        <img
          src={images.heroimg}
          alt=""
          className="absolute top-0 right-20 scale-90"
        />
      </div>
    </>
  )
}

export default Hero
