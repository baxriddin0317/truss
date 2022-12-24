import Link from 'next/link';
import React from 'react'
import { Idescription } from '../Block';
import Btn from '../buttons/Btn';

export interface ITabItem {
    tabItem : {
        title: string,
        price?: number,
        link?: string,
        description: Array<Idescription>;
        theme: boolean
    }
}

const TabItem = ({tabItem}: ITabItem) => {
  return (
    <div className={`${tabItem.theme ? 'bg-white text-brand-blue-light' : 'bg-brand-blue-light text-white'} rounded-2xl w-full p-4 shadow-card`}>
        <div className='p-7 mb-11'>
            <h2 className='font-bold text-3xl mb-10'>
                {tabItem.title}
            </h2>
            <div className='flex items-start h-28 mb-11'>
                {tabItem.price ? <div className='flex items-end'>
                    <h1 className='font-bold text-7xl'>
                        ${tabItem.price}
                    </h1>
                    <span>/Seat</span>
                </div> :
                    <Link href={'/'} legacyBehavior>
                        <a className='text-brand-blue-primary text-2xl font-bold underline'>
                            {tabItem.link}
                        </a>
                    </Link>
                }
            </div>
            <h3 className='text-lg font-bold mb-2'>
            Includes
            </h3>
            <p className='text-lg mb-11'>
            Free 30-Day Trial to test your most-needed automations and templates with your data
            </p>
            <div className='flex justify-center'>
                <Btn />
            </div>
        </div>
        <div className={`${tabItem.theme ? 'bg-brand-gray-light' : 'bg-white text-brand-blue-light'} rounded-lg pt-9 px-7`}>
            <h3 className='font-bold text-xl text-brand-blue-light mb-5'>
            Imagine a future where you can:
            </h3>
            <div className="flex flex-col mb-12">
                {
                    tabItem.description.map((item: Idescription) => (
                        <div key={item.text} className="flex items-center gap-5 mb-3">
                            {item.icon}
                            <p className="w-[408px]">
                                {item.text}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default TabItem