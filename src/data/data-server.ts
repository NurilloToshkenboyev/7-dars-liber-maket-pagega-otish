import BooksImg from '../../public/books.png';
import BooksImg2 from '../../public/book2.png';
import BooksImg3 from '../../public/books3.png';
import BooksImg4 from '../../public/books4.png';
import BooksImg5 from '../../public/books5.png';
import BooksImg6 from '../../public/books6.png';
import BooksImg7 from '../../public/books7.png';
import BooksImg8 from '../../public/books8.png';
import BooksImg9 from '../../public/books6.png';
import BooksImg10 from '../../public/books9.png';

import { Star } from '@/icon/star';
import { Headphone } from '@/icon/headphone';
import { StaticImageData } from 'next/image';

interface Book {
  id: number;
  img: StaticImageData; 
  title: string;
  description: string;
  star: React.FC<React.SVGProps<SVGSVGElement>>; 
  Headphone: React.FC<React.SVGProps<SVGSVGElement>>; 
}

export const booksData: Book[] = [
  {
    id: 1,
    img: BooksImg,
    title: 'Код 8',
    description: 'SIYOSAT, FANTASTIKA',
    star: Star,
    Headphone: Headphone,
  },
  {
    id: 2,
    img: BooksImg2,
    title: 'Rich dad poor dad',
    description: 'SIYOSAT, FANTASTIKA',
    star: Star,
    Headphone: Headphone,
  },
  {
    id: 3,
    img: BooksImg3,
    title: '1984',
    description: 'SIYOSAT, FANTASTIKA',
    star: Star,
    Headphone: Headphone,
  },
  {
    id: 4,
    img: BooksImg4,
    title: 'Бепарволикнинг но...',
    description: 'SIYOSAT, FANTASTIKA',
    star: Star,
    Headphone: Headphone,
  },
  {
    id: 5,
    img: BooksImg5,
    title: 'Даниел КИЗ',
    description: 'SIYOSAT, FANTASTIKA',
    star: Star,
    Headphone: Headphone,
  },
  {
    id: 6,
    img: BooksImg6,
    title: 'Код 8',
    description: 'SIYOSAT, FANTASTIKA',
    star: Star,
    Headphone: Headphone,
  },
  {
    id: 7,
    img: BooksImg7,
    title: 'Rich dad poor dad',
    description: 'SIYOSAT, FANTASTIKA',
    star: Star,
    Headphone: Headphone,
  },
  {
    id: 8,
    img: BooksImg8,
    title: '1984',
    description: 'SIYOSAT, FANTASTIKA',
    star: Star,
    Headphone: Headphone,
  },
  {
    id: 9,
    img: BooksImg9,
    title: 'Бепарволикнинг но...',
    description: 'SIYOSAT, FANTASTIKA',
    star: Star,
    Headphone: Headphone,
  },
  {
    id: 10,
    img: BooksImg10,
    title: 'Даниел КИЗ',
    description: 'SIYOSAT, FANTASTIKA',
    star: Star,
    Headphone: Headphone,
  },
];
