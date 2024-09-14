"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ElectronLayout = ({ children }: { children?: React.ReactNode }) => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className='w-[1320px] px-7 mt-3'>
      <div className='flex items-center justify-center gap-3 py-7 shadow-lg shadow-gray-400'>
        <h1 className='text-xl font-bold'>Китобларим</h1>
        <div className='flex gap-10 ml-20 '>
          <Link href="/about/books/audio">
            <div className={`py-2 px-4 cursor-pointer ${isActive('/about/books/audio') ? ' border-b-2 border-blue-500 text-blue-500' : ''}`}>
              Аудиокитоб
            </div>
          </Link>
          <Link href="/about/books/electron">
            <div className={`py-2 px-4 cursor-pointer ${isActive('/about/books/electron') ? ' border-b-2 border-blue-500  text-blue-500' : ''}`}>
              Электрон китоб
            </div>
          </Link>
          <Link href="/about/books/bomba-book">
            <div className={`py-2 px-4 cursor-pointer ${isActive('/about/books/bomba-book') ? ' border-b-2 border-blue-500  text-blue-500'  : ''}`}>
              Босма китоб
            </div>
          </Link>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default ElectronLayout;
