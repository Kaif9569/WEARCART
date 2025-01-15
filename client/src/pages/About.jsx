import React from 'react'
import Title from "../components/Title";
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div>
    <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'}/>
    </div>
    <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti deleniti magnam, tenetur perspiciatis cumque dicta repellendus reprehenderit sunt animi adipisci nemo voluptatem fugit, veniam vel corporis, ratione laboriosam quam nihil.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolorum iusto impedit pariatur at in atque, quibusdam dolore minus veritatis?</p>
      <b className='text-gray-800'>Our Mission</b>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt voluptate minima magnam molestiae nam omnis corrupti repellendus voluptatibus praesentium natus molestias ratione est voluptas, fugit nihil eum ducimus iusto possimus!</p>
      </div>
    </div>
    <div className='text-xl py-4'>
    <Title text1={'WHY'} text2={'CHOOSE US'}/>
    </div>
    <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-6 '>
        <b>Quality Assurance</b>
        <p className='text-gray-600'>Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, architecto. ipsum dolor sit amet consectetur adipisicing elit. Dolorum quam earum minima nulla voluptates? Eos?</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-6'>
        <b>Convenience</b>
        <p className='text-gray-600'>Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, architecto. ipsum dolor sit amet consectetur adipisicing elit. Dolorum quam earum minima nulla voluptates? Eos?</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-6'>
        <b>Exceptional Customer Service</b>
        <p className='text-gray-600'>Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, architecto. ipsum dolor sit amet consectetur adipisicing elit. Dolorum quam earum minima nulla voluptates? Eos?</p>
      </div>
    </div>
    </div>
  )
}

export default About
