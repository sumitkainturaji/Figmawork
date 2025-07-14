import React from 'react'
import { footerlinks, images } from '../assets/projectAssets'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import playStore from '../assets/Google Play.png'
import app from '../assets/Apple.png'

const Footer = () => {
  return (
    <footer className="bg-white py-16">
      <section className="w-10/12 mx-auto flex flex-wrap justify-between gap-10">
       
        <div
          className="max-w-sm 
"
        >
          <h1 className="text-3xl font-bold text-[#181E4B]">
            Jadoo<span className="text-2xl">.</span>
          </h1>
          <p className="text-gray-500 text-sm mt-4">
            Book your trip in minute, get full <br />
            control for much longer.
          </p>
        </div>

       
        <div>
          <h2 className="font-semibold text-lg mb-4">Company</h2>
          <ul className="text-gray-500 space-y-2">
            {footerlinks.company.map((item, idx) => (
              <li key={idx} className="hover:text-black cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-4">Contact</h2>
          <ul className="text-gray-500 space-y-2">
            {footerlinks.contact.map((item, idx) => (
              <li key={idx} className="hover:text-black cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-4">More</h2>
          <ul className="text-gray-500 space-y-2">
            {footerlinks.More.map((item, idx) => (
              <li key={idx} className="hover:text-black cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

      
        <div className="flex flex-col items-center">
          <div className="flex gap-4 mb-4">
            <div className="p-2 bg-white rounded-full shadow hover:scale-105 transition">
              <Facebook className="text-gray-700 w-5 h-5 cursor-pointer" />
            </div>
            <div className="p-2 bg-gradient-to-r from-pink-400 via-purple-500 to-yellow-500 rounded-full shadow hover:scale-105 transition">
              <Instagram className="text-white w-5 h-5 cursor-pointer" />
            </div>
            <div className="p-2 bg-white rounded-full shadow hover:scale-105 transition">
              <Twitter className="text-gray-700 w-5 h-5 cursor-pointer" />
            </div>
          </div>
          <h3 className="text-gray-700 font-medium mb-2">Discover our app</h3>
          <div className="flex gap-2">
            <img src={playStore} alt="Play Store" className="h-10" />
            <img src={app} alt="App Store" className="h-10" />
          </div>
        </div>
      </section>

   
      <div className="mt-10 text-center text-gray-400 text-sm">
        All rights reserved@jadoo.co
      </div>
    </footer>
  )
}

export default Footer
