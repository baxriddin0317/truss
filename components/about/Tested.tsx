import Image from 'next/image'
import React from 'react'
import BoxText from './BoxText'

const boxData = {
    title: "Built from necessity, tested with real data",
    texts: [
      "Truss came out of the need for greater efficiency and job security for ACG’s analysts during Covid. First used internally, this software helped ACG be far more resilient to the fluctuations in demand during and after Covid.",
      "It made such a difference that it quickly became clear how much value commercial real estate companies could unlock by automating their manual processes."
    ]
  }  

const Tested = () => {
  return (
    <section className='py-40 mb-5'>
        <div className="costum-container">
            <div className='flex items-center flex-col lg:flex-row gap-14'>
                <BoxText boxprops={boxData} />
                <div className='min-w-[682px]'>
                    <Image className='w-full object-cover' src={require("../../public/Assets/dashboart.png")} alt={"tested"} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Tested