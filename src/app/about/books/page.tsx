import React from 'react'
import { Star } from '@/icon/star'
import { Headphone } from '@/icon/headphone'
const Books = () => {
  return (
    <div className='flex items-center gap-5 p-10 flex-col'>
     <div className='flex items-center gap-10 shadow-lg shadow-gray-300 border-2  p-5 rounded-xl'>
     <img src="/books.png" alt="Books" />
      <div className='w-[990px] h-auto '>
        <div className='flex items-center justify-between'>
            <div>
            <h1>Даниел КИЗ</h1>
            <span className='text-sm text-blue-500 font-light'>SIYOSAT, FANTASTIKA</span>
            </div>
            <div>
                <Star/>
                <span className='mt-3'>4.0  235 Фикрлар</span>
            </div>
        </div>
        <p className='py-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>

        <div className='flex gap-36 items-center mt-10 '>
           <div className='flex flex-col' >
           <span className='text-gray-500'>Муаллиф</span>
            <span className='font-medium'>Kevin Smiley</span>
           </div>
           <div className='flex flex-col'>
           <span className='text-gray-500'>Нашриёт</span>
            <span className='font-medium'>Printarea Studios</span>
           </div>
           <div className='flex flex-col'>
           <span className='text-gray-500'>Йил</span>
            <span className='font-medium'>2019</span>
           </div>
           <Headphone/>
        </div>
      </div>
     </div>
     <div className='flex items-center gap-10 shadow-lg shadow-gray-300 border-2  p-5 rounded-xl'>
     <img src="/books.png" alt="Books" />
      <div className='w-[990px] h-auto '>
        <div className='flex items-center justify-between'>
            <div>
            <h1>Даниел КИЗ</h1>
            <span className='text-sm text-blue-500 font-light'>SIYOSAT, FANTASTIKA</span>
            </div>
            <div>
                <Star/>
                <span className='mt-3'>4.0  235 Фикрлар</span>
            </div>
        </div>
        <p className='py-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>

        <div className='flex gap-36 items-center mt-10 '>
           <div className='flex flex-col' >
           <span className='text-gray-500'>Муаллиф</span>
            <span className='font-medium'>Kevin Smiley</span>
           </div>
           <div className='flex flex-col'>
           <span className='text-gray-500'>Нашриёт</span>
            <span className='font-medium'>Printarea Studios</span>
           </div>
           <div className='flex flex-col'>
           <span className='text-gray-500'>Йил</span>
            <span className='font-medium'>2019</span>
           </div>
           <Headphone/>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Books