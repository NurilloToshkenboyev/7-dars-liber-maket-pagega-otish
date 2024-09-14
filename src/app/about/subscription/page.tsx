'use client';

import React, { useState } from 'react';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { nanoid } from 'nanoid/non-secure';

const Subscription = () => {
  const options = [
    { value: '30', label: '30 кун' },
    { value: '50', label: '50 кун' },
    { value: '100', label: '100 кун' },
  ];

  const options2 = [
    { value: 'Фантастика', label: 'Фантастика' },
    { value: 'боевой', label: 'боевой' },
    { value: 'грустный', label: 'грустный' },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='flex items-center justify-center flex-col w-[1300px] h-[100vh] py-10'>
      <div className='w-[1200px] h-[200px] flex items-center justify-between px-5 rounded-xl bg-orange-400'>
        <h1 className='font-black text-xl text-white'>Узингиз севган булимга</h1>
        <img src="/user.png" alt="" />
      </div>
      <div className='w-[100%] h-[500px]  flex  items-center justify-between px-12'>
        <div className='p-5'>
          <h1 className='font-bold text-xl'>Обуна</h1>
          <div className='mt-5'>
            <h1>Обуна давом этиш вакти</h1>
            <Select 
            key={nanoid()}
              options={options} 
              value={selectedOption} 
              onChange={handleSelectChange} 
              className='mt-2 w-[200px] h-[40px] border border-gray-300 rounded-lg' 
            />
          </div>
          <div className='mt-5 py-3'>
            <h1 >Булимни танланг</h1>
            <Select 
                
              options={options2} 
              value={selectedOption} 
              onChange={handleSelectChange} 
              className='mt-2 w-[200px] h-[40px] border border-gray-300 rounded-lg' 
            />
          </div>
          <span className='mt-5 font-medium'>Обуна 30 кун давом этади</span>
        </div>
        <div className='flex flex-col'>
            <div className='w-[350px] h-[150px] bg-slate-200 rounded-xl p-3 gap-5 flex flex-col '>
                <p>Бошланиш вакти <span className='ml-20'>12/09/2021</span></p>
                <p>Якунланиш вакти <span className='ml-20'>12/10/2021</span></p>
                <p>Обуна нархи <span className='ml-28'>12 000 сум</span></p>

            </div>
            <Button type='button' className=' w-[350px] h-[50px] rounded-full mt-8 bg-blue-700 text-white'>Обуна булиш</Button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
