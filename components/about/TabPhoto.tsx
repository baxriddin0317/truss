import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const TabPhoto = () => {
    const [topVar, setTopVar] = useState<boolean>(true);
    
    useEffect(() => {
        const timer = setTimeout(() => {
          setTopVar(!topVar)
        }, 900);
        return () => clearTimeout(timer);
      }, [topVar]);

  return (
    <div className='w-full'>
        <div className='flex mb-4'>
            <button className='w-40 text-left text-brand-blue-light capitalize font-bold text-xs'>
                dashboard
            </button>
            <button className='w-40 text-left text-brand-blue-light capitalize font-bold text-xs'>
                data
            </button>
        </div>
        <div className='flex gap-5 relative'>
            <div className='cursor-pointer'>
            <Image className='object-cover' src={require("../../public/Assets/tab-2.png")} alt={"alt"} />
            </div>
            <div className={`absolute cursor-pointer  ${topVar ? 'translate-y-0' : 'translate-y-2'} hover:translate-y-0 -top-9 left-[380px] duration-1000 p-2 rounded-xl shadow-card`}>
                <Image src={require("../../public/Assets/tab-1.png")} alt={"alt"} />
            </div>
        </div>
    </div>
  )
}

export default TabPhoto