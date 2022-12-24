import React, { FC, ReactNode } from 'react'
import { Ihero } from './AppLayout'

interface IHero {
    heroChild: Ihero
}

const Hero: FC<IHero> = ({heroChild}) => {
    const {info, title, description, childComponent} = heroChild
  return (
    <section className='pt-14 pb-32'>
        <div className="costum-container">
            <div className='text-center'>
                <span className='uppercase mb-3 block tracking-tightest'>
                {info}
                </span>
                <h1 className='text-5xl font-bold text-brand-blue-black mb-4'>
                    {title}
                </h1>
                <p className='text-description font-bold mb-14 md:w-[620px] mx-auto'>
                    {description}
                </p>
                {childComponent}
            </div>
        </div>
    </section>
  )
}

export default Hero