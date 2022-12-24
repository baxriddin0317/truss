import Image from 'next/image'
import React from 'react'

const FooterBadge = () => {
    return (
        <div className="-translate-y-1/2">
            <div className="costum-container">
                <div className="flex flex-col items-center gap-y-7 w-full mx-auto bg-brand-blue-primary rounded-[40px] py-20 px-44">
                    <Image className="" src={require("../../public/Assets/logoBadge.png")} alt="logobadge" />
                    <h2 className="text-center font-bold text-5xl text-white">
                    Get on-demand access to every relevant property metric you need.
                    </h2>
                    <p className="text-xl text-white mb-3">
                    Keep your data decision-ready 24/7.
                    </p>

                    <button className='bg-brand-blue-primary text-white border hover:bg-white hover:text-brand-blue-primary rounded-lg py-5 px-8'>
                        Schedule a Demo
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FooterBadge
