// app/about/layout.tsx

'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const AboutLayout = ({ children }: { children?: React.ReactNode }) => {
  const pathname = usePathname(); // Hozirgi yo'lni olish

  return (
    <div className='flex'>
      <div className='h- bg-blue-500 py-5 w-[200px] flex flex-col px-5 gap-3'>
        <Link href="/about" className={pathname === '/about' ? 'bg-blue-700 text-white px-3 py-2 rounded' : ''}>about</Link>
        <Link href="/about/subscription" className={pathname === '/about/subscription' ? 'bg-blue-600 text-white px-2 py-2 rounded' : ''}>Обуна бўлиш</Link>
        <Link href="/about/price" className={pathname === '/about/price' ? 'bg-blue-600 text-white px-3 py-2 rounded' : ''}>Э-Хисоб</Link>
        <Link href="/about/books" className={pathname === '/about/books' ? 'bg-blue-600 text-white px-3 py-2 rounded' : ''}>Китобларим</Link>
        <Link href="/about/setings" className={pathname === '/about/setings' ? 'bg-blue-600 text-white px-3 py-2 rounded' : ''}>Созламалар</Link>
        <Link href="/" className={pathname === '/about/setings' ? 'bg-blue-600 text-white px-3 py-2 rounded' : ''}>Chiqish</Link>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}

export default AboutLayout;
