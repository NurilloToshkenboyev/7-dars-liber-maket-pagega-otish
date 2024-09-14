
import React from 'react';
import { StaticImageData } from 'next/image';
import Link from 'next/link';

interface BooksCardProps {
  id: number;
  img: StaticImageData | string; 
  title: string;
  description: string;
  star: React.FC<React.SVGProps<SVGSVGElement>>; 
  Headphone: React.FC<React.SVGProps<SVGSVGElement>>; 
}

export const BooksCard: React.FC<BooksCardProps> = ({ id, img, title, description, star: StarIcon, Headphone: HeadphoneIcon }) => {
  return (
    <div className=' h-[500px]  w-[250px] shadow-md shadow-gray-200 p-5'>
      <img className='w-[219px] h-[316px]' src={typeof img === 'string' ? img : img.src} alt="img" />
      <h1 className='font-medium mt-1'>{title}</h1>
      <p className='py-3 text-blue-600'>{description}</p>
      <span className='flex items-center justify-between '>
        <StarIcon />
        <HeadphoneIcon />
      </span>
      <Link className='mt-2  ml-3 w-[200px] text-blue-500  h-[45px] flex items-center justify-center   rounded-xl '  href={`/books/${id}`}>Malumotlarga otish</Link>
    </div>
  );
};
