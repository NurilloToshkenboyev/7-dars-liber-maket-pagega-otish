import React from 'react'
import { Facebook } from '@/icon/facebook'
import { YouTube } from '@/icon/you-tube'
import { TikTok } from '@/icon/tik-tok'
import { Telegram } from '@/icon/telegram'
import { Instagram } from '@/icon/instagram'

export const Footer = () => {
  return (
   <div className='w-[100%] h-[500px] flex items-center flex-col justify-between  bg-slate-200 mt-16'>
     <div className=' w-[100%] h-[200px] mt-20 flex items-start justify-around '>
      <div>
        <strong className='mt-3'>Платформа хақида</strong>
        <ul className='flex flex-col gap-3 py-4'>
          <a>Liber ўзи нима?</a>
          <a>Фойдаланиш шартлари</a>
          <a>Ёрдам</a>
        </ul>

      </div>
      <div>
        <strong className='mt-3'>Обуна хақида</strong>
        <ul className='flex flex-col gap-3 py-4'>
          <a>Обуна бўлиш</a>
          <a>Қандай тўлаш</a>
        </ul>

      </div>
      <div>
        <strong className='mt-3'>Китоблар</strong>
        <ul className='flex flex-col gap-3 py-4'>
          <a>Аудио китоблар</a>
          <a>Электрон китоблар</a>
          <a>Китоблар</a>
        </ul>

      </div>
      <div>
        <strong className='mt-3'>Мобил илова</strong>
        <img className='py-3' src="/appstore.png" alt="img" />
        <img src="/googleplay.png" alt="img" />
      </div>
    </div>
    <div className='w-[100%] h-[90px] bg-black flex items-center justify-around '>
      <div className='mt-3'>
        <strong className='text-white'>Ижтимоий тармоқлар</strong>
        <div className='flex items-center gap-5 py-3 '>
          <Facebook/>
          <YouTube/>
          <TikTok/>
          <Telegram/>
          <Instagram/>
        </div>
      </div>
      <div className='text-white'>
        <strong >Боғланиш</strong>
        <ul className='flex items-center gap-3 py-2'>
        <a href="tel:998974760405">+998 90 253 77 53</a>
        <a href="support@liber.uz">support@liber.uz</a>
        </ul>
      </div>
      <div className='text-white mt-2'>
        <strong>Биз қабул қиламиз</strong>
        <div className='flex items-center gap-3 py-2'>
        <img src="/uzcard.png" alt="img" />
        <img src="/humo.png" alt="img" />
       <span className='w-[60px] h-[30px] bg-white flex items-center justify-center rounded-md'> <img src="/payme.png" alt="img" /></span>
        </div>
      </div>
    </div>
   </div>
  )
}
