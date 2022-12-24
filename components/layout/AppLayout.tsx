import React, { FC, ReactNode } from 'react'
import Footer from './Footer'
import Hero from './Hero'
import Navigation from './Navigation'

export interface Ihero {
    info?: string;
    title: string;
    description?: string;
    childComponent?: ReactNode;
}

interface ILayout {
    children: ReactNode,
    heroChild: Ihero
}

const AppLayout: FC<ILayout> = ({children, heroChild}) => {
  return (
    <>
        <div className='bg-hero-gradient'>
            <Navigation />
            <Hero heroChild={heroChild} />
        </div>
        <main>
            {children}
        </main>
        <Footer />
    </>
  )
}

export default AppLayout