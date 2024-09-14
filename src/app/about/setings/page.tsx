import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { UserSetings } from '@/icon/user-setings'
import React from 'react'

const Setings = () => {
  return (
    <div className='flex items-center justify-center h-[100vh] p-10 '>
        <div className='flex flex-col gap-10'>
            <h1>Созламалар</h1>
            <div className='flex items-center gap-5 py-3'>
                <div className='w-[80px] flex items-center justify-center rounded-full border-4 border-blue-600 h-[80px]  '><UserSetings/></div>
                <p className='text-blue-500 font-medium'>Сурат юклаш</p>
            </div>
            <div className='py-5'>
                <h1>Исмингиз</h1>
                <div className='py-3'>
                <Input type='text' className='w-[300px] h-[50px] border-2 rounded-2xl px-3' placeholder='Исмингиз'/>
                </div>
            </div>
            <Button type='button' className='w-[320px] h-[50px] bg-blue-600 text-white rounded-full'>Сақлаш</Button>
        </div>
    </div>
  )
}

export default Setings