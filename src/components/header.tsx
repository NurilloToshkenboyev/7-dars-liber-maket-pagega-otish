"use client"; 

import React, { useState } from 'react';
import { Logo } from '../icon/logo';
import { Select } from './ui/select';
import { Manu } from '../icon/manu';
import { Input } from './ui/input';
import { Search } from '@/icon/search';

import { UzbekFlag } from '../icon/UzbekFlag';
import { RussianFlag } from '../icon/russian-flag';
import { Button } from './ui/button';
import { User } from '@/icon/user';
import Link from 'next/link';

export const Header = () => {
    const [selectedFlag, setSelectedFlag] = useState<JSX.Element>(<UzbekFlag />);

    const options = [
        { value: 'uz', label: 'Uz' },
        { value: 'ru', label: 'Rus' },
    ];
  
    const flags: { [key: string]: JSX.Element } = {
        uz: <UzbekFlag />,
        ru: <RussianFlag />,
    };

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = event.target.value;
        setSelectedFlag(flags[selectedLanguage]);
    };

    return (
        <div className='w-full py-5  flex items-center justify-between px-8 shadow-lg shadow-gray-300'>
            <Logo />
            <div className='flex items-center justify-center gap-5 w-auto '>
                <div className='flex items-center justify-center gap-4 border-2 border-gray-300 w-52 h-12 rounded-l-xl'>
                    <Manu />
                    <select name="" id="">
                        <option value="Рукнлар">Рукнлар</option>
                        <option value="Рукнлар">Рукнлар</option>
                        <option value="Рукнлар">Рукнлар</option>
                    </select>
                </div>
                <label className='w-[420px] h-[48px] border-2 border-gray-300 flex items-center justify-between rounded-r-xl'>
                    <Input type='text' className='w-[350px] rounded-lg px-4 h-8 outline-none ml-3' placeholder='Қидириш' />
                    <div className='w-[50px] h-[50px] flex items-center justify-center border-l-2 border-gray-300'>
                        <Search  />
                    </div>
                </label>
            </div>
            <div className='flex  items-center gap-10'>
                <div className=' flex  items-center  justify-center w-[130px] h-[50px] gap-3 rounded-lg bg-slate-300'>
                    <div className=' flex items-center justify-center'>
                        {selectedFlag}
                    </div>
                    <Select options={options}  className='w-[70px]' onChange={handleSelectChange} />
                </div>
                <Link href={"/about"}><Button startIcon={<User />} type='button' className='flex w-[120px] h-[50px] text-white items-center justify-center rounded-lg bg-blue-600'>Кириш</Button>
                </Link>
            </div>
        </div>
    );
};
