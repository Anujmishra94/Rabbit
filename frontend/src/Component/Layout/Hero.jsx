import React from 'react'
import heroImg from '../../assets/rabbit-hero.webp'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='relative '>
        <img src={heroImg} alt="Rabbit"  className="w-full h-[300px] sm:h-[400px] md:h-[600px] lg:h-[750px] object-cover"/>
        <div className="absolute inset-0 bg-black/5 flex items-center justify-center ">
            <div className="text-center text-white p-6">
            <h1 className="text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4">
              Vacation <br /> ready
            </h1>
            <p className="text-sm tracking-tighter md:text-lg mb-6">
              Discover the best vacation spots and plan your next adventure with us.
            </p>
            <Link to="#" className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg">
            Shop Now
            </Link>
            </div>
        </div>
    </section>
  )
}

export default Hero