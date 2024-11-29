import React from 'react';
import Laptop from '../assets/laptop.jpg'

function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240pxpx] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4 ' src={Laptop} alt='laptop'/>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem nulla, accusamus aliquid obcaecati eligendi facere magnam at sit quod, adipisci exercitationem rem sed rerum tempore dolor eos, consectetur laboriosam impedit?</p>
                <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics