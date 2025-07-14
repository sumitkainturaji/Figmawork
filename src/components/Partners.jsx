import React from 'react'
import { images } from '../assets/projectAssets'

const Partners = () => {
  const logos = [
    images.axon,
    images.jetstar,
    images.expedia,
    images.qantas,
    images.alitlia,
  ]

  const loopedLogos = [...logos, ...logos]

  return (
    <section className="overflow-hidden bg-white py-10 ">
      <div className="w-10/12 mx-auto">
        <marquee behavior="scroll" direction="left" scrollamount="5">
          <div className="flex gap-16 whitespace-nowrap">
            {loopedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-20 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  className="max-h-20 max-w-20 w-auto object-contain grayscale hover:grayscale-0 transition"
                />
              </div>
            ))}
          </div>
        </marquee>
      </div>
    </section>
  )
}

export default Partners
