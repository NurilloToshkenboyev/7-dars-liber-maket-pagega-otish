import React, { useState } from 'react';
import { StaticImageData } from 'next/image';
import { Button } from './ui/button';
import { CarIcon } from '@/icon/car';
import { MarkLine } from '@/icon/mark-line';
import { Earphone } from '@/icon/earphone';

interface BooksCardProps {
    id: number;
    img: StaticImageData | string;
    title: string;
    description: string;
    star: React.FC<React.SVGProps<SVGSVGElement>>;
    Headphone: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const BookDeteil: React.FC<BooksCardProps> = ({ img, title, description }) => {
    const [selectedButton, setSelectedButton] = useState<number | null>(null);

    const handleButtonClick = (buttonIndex: number) => {
        setSelectedButton(buttonIndex);
    };

    return (
        <div className="flex items-start gap-16 px-10">
            <img className="w-[350px] h-[450px]" src={typeof img === 'string' ? img : img.src} alt="img" />
            <div>
                <div className="flex items-center justify-between">
                    <div>
                        <h1>{title}</h1>
                        <p className="py-5 text-blue-500">{description}</p>
                    </div>
                </div>
                <p className="py-16">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <div className="flex items-center gap-10 mt-5">
                    <div>
                        <span className="text-gray-300">Муаллиф</span>
                        <p className="font-medium">Kevin Smiley</p>
                    </div>
                    <div>
                        <span className="text-gray-300">Нашриёт</span>
                        <p className="font-medium">Wepress Inc.</p>
                    </div>
                    <div>
                        <span className="text-gray-300">Йил</span>
                        <p className="font-medium">199</p>
                    </div>
                </div>
                <div className="flex gap-4 mt-10">
                    {[{
                        icon: <CarIcon color={selectedButton === 0 ? "white" : "black"} />,
                        label: 'Сотиб олиш - 65 000 сум',
                        index: 0
                    }, {
                        icon: <Earphone color={selectedButton === 1 ? "white" : "black"} />,
                        label: 'Аудио тинглаш - 55 000 сум',
                        index: 1
                    }, {
                        icon: <MarkLine color={selectedButton === 2 ? "white" : "black"} />,
                        label: 'Онлайн укиш - 45 000 сум',
                        index: 2
                    }].map(({ icon, label, index }) => (
                        <Button
                            key={index}
                            startIcon={icon}
                            type="button"
                            onClick={() => handleButtonClick(index)}
                            className={`flex items-center border-2 mt-10 border-blue-800 w-[300px] h-[50px] rounded-xl justify-center ${selectedButton === index
                                    ? "bg-blue-800 text-white"
                                    : "hover:shadow-lg hover:shadow-blue-300"
                                }`}
                        >
                            {label}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
};
