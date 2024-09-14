import React from 'react'

const Price = () => {
  return (
    <div className='flex  flex-col  justify-center w-[100%] h-[90vh] p-20 gap-5'>
        <h1>Э-Хисоб</h1>
        <div className='w-[1100px] h-[100px] mb-16 bg-blue-600 rounded-xl flex items-center justify-between'>
            <div className='ml-5'>
            <span className='text-gray-400'>Баланс</span>
            <p className='text-lg font-bold text-white' >45 000 сўм</p>
            </div>
            <img src="/price.png" alt="" />
        </div>
        <div className='w-[1100px]  h-[50px] border-2 border-gray-200 flex items-center justify-center rounded-xl'>
            <img src="/price2.png" alt="" />
        </div>
        <div className='w-[1100px] h-[50px] border-2 border-gray-200 flex items-center justify-center rounded-xl'>
            <img src="/price3.png" alt="" />
        </div>
        
    </div>
  )
}

export default Price