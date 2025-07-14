import React, { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { navlinks } from '../assets/projectAssets'

const Navbar = () => {
  const [language, setLang] = useState('EN')
  const [showLangs, setShowLangs] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="flex shadow-sm bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF] to-[#fff2d8] sticky top-0 z-100">
      <section className="w-10/12 mx-auto flex py-6 gap-8 justify-between items-center">
        <div className="text-3xl font-bold text-black">
          Jad
          <span className="">oo</span>
        </div>

        <ul className="hidden md:flex items-center gap-10 text-gray-800">
          {navlinks.links.map((link) => (
            <li key={link} className="cursor-pointer hover:text-black">
              {link}
            </li>
          ))}

          <li>
            <button className="border border-gray-400 rounded-md px-4 py-1 hover:bg-gray-100 transition">
              Sign up
            </button>
          </li>

          <li className="relative">
            <button
              onClick={() => setShowLangs(!showLangs)}
              className="flex items-center gap-1 cursor-pointer"
            >
              {language} <ChevronDown size={16} />
            </button>
            {showLangs && (
              <ul className="absolute right-0 mt-2 bg-white border rounded-md shadow z-10">
                {navlinks.languages.map((lang) => (
                  <li
                    key={lang}
                    onClick={() => {
                      setLang(lang)
                      setShowLangs(false)
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {lang}
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>

        <button
          className="md:hidden block"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </section>

      {mobileMenuOpen && (
        <div className="md:hidden w-full bg-white border-t border-gray-200 shadow-sm px-6 pb-4">
          <ul className="flex flex-col gap-4 pt-4 text-gray-800">
            {navlinks.links.map((link) => (
              <li key={link} className="cursor-pointer hover:text-black">
                {link}
              </li>
            ))}
            <li>
              <button className="border border-gray-400 rounded-md px-4 py-1 hover:bg-gray-100 transition">
                Sign up
              </button>
            </li>
            <li className="relative">
              <button
                onClick={() => setShowLangs(!showLangs)}
                className="flex items-center gap-1 cursor-pointer"
              >
                {language} <ChevronDown size={16} />
              </button>
              {showLangs && (
                <ul className="mt-2 bg-white border rounded-md shadow z-10">
                  {navlinks.languages.map((lang) => (
                    <li
                      key={lang}
                      onClick={() => {
                        setLang(lang)
                        setShowLangs(false)
                      }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {lang}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
