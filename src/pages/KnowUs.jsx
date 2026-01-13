import React from 'react'
import Title from '../components/Title'
import { GrayBgButton } from '../components/Buttons' // Assuming this component exists based on your imports
import { ourWork, ourWorkImageUrl } from '../constant'

export default function KnowUsPage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Main Container */}
      <div className='max-w-6xl mx-auto px-6 py-16 md:py-24'>

        {/* --- SECTION 1: OUR STORY --- */}
        <section className='flex flex-col items-center text-center mb-24'>
          <div className='mb-8'>
            <Title 
                text1={"Our"} 
                text2={"Story"} 
                text1ClassName={"text-3xl md:text-4xl font-light text-gray-500"} 
                text2ClassName={"text-3xl md:text-4xl font-bold text-gray-800"} 
            />
          </div>

          <div className='max-w-3xl'>
            <p className='text-gray-600 text-base md:text-lg leading-relaxed font-normal'>
              {/* Using a fallback if ourWork is empty, otherwise rendering the content */}
              {ourWork || "We started with a simple idea: to build software that matters. Over the years, our passion for technology and design has grown into a dedicated team solving complex problems."}
            </p>
          </div>
        </section>

        {/*Divider (Optional) */}
        <div className="w-full h-px bg-gray-200 mb-24 hidden md:block"></div>

        {/* --- SECTION 2: OUR WORK --- */}
        <section>
          <div className='mb-12 text-center md:text-left'>
            <Title 
                text1={"Our"} 
                text2={"Work"} 
                text1ClassName={"text-3xl md:text-4xl font-light text-gray-500"} 
                text2ClassName={"text-3xl md:text-4xl font-bold text-gray-800"} 
            />
          </div>

          {/* Grid Layout: Image Left, Text Right (on desktop) */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            
            {/* Image Side */}
            <div className='relative group overflow-hidden rounded-2xl shadow-xl'>
              <img 
                src={ourWorkImageUrl } 
                alt="Our Featured Work" 
                className='w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105'
              />
              {/* Optional Overlay on Hover */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>

            {/* Content Side */}
            <div className='flex flex-col justify-center space-y-6'>
              <h3 className="text-2xl font-bold text-gray-800">
                Delivering Excellence
              </h3>
              
              <p className='text-gray-600 leading-relaxed font-normal text-base'>
                {ourWork}
              </p>

            
            </div>

          </div>
        </section>

      </div>
    </div>
  )
}