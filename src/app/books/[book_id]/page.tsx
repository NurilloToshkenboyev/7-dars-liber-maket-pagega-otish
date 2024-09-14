'use client';
import React from 'react';
import { NextPage } from 'next';
import { BookDeteil } from '@/components/book-deteil';
import { booksData } from '@/data/data-server'; 

interface BookProps {
  params: { book_id: string };
}

const BookDetail: NextPage<BookProps> = ({ params }) => {
  const book = booksData.find((item) => item.id === Number(params.book_id));

  if (!book) {
    return <div>Kitob topilmadi</div>;
  }

  return (
    <div>
      <div className='flex  items-center h-[100vh] w-[100%]'>
      
      <BookDeteil
        id={book.id}
        img={book.img}
        title={book.title}
        description={book.description}
        star={book.star}
        Headphone={book.Headphone}
      />
      </div>
    </div>
  );
};

export default BookDetail;
