import React from 'react'
import { BooksCard } from '@/components/books-card'
import { booksData } from '@/data/data-server'

 const Books = () => {
  return (
    <div> <h1 className='ml-16 font-medium text-lg'>Янги қўшилганлар</h1>
        <div className='flex items-center justify-center gap-10 mt-5 flex-wrap h-[150vh] ' >
        {booksData.map((item) =>  <BooksCard key={item.id} {...item} /> )}
        </div>
    </div>
  )
}

export default Books
