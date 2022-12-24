import React from 'react'
import { IBlockItem } from './Fingertips'
import Circle from './Circle';
import Block from '../Block';
import Btn from '../buttons/Btn';
import Image from 'next/image';

const features: Array<IBlockItem> = [
    {
        img: 2,
        title: "Snapshot Decisions With Visualizations",
        description: [
            {
                text: "No need to guess when you can visualize what makes sense with your data."
            }
        ],
        arrow: false
    },
    {
        img: 3,
        title: "Insight Engine - Your Analyst in a Box",
        text: "Simulate scenarios at your fingertips ",
        description: [
            {
                icon: <Circle />,
                text: "Debt service modeling"
            },
            {
                icon: <Circle />,
                text: "Analyze returns based on hundreds of customized inputs"
            },
            {
                icon: <Circle />,
                text: "Customize tenant groups and analyze based on risk or industry profile"
            }
        ],
        arrow: true
    },
    {
        img: 4,
        title: "Share With Unlimited Users",
        description: [
            {
                text: "Set schedules for periodic reporting and analysis"
            }
        ],
        arrow: false
    },
    {
        img: 5,
        title: "Fully Malleable & Customizable ",
        description: [
            {
                icon: <Circle />,
                text: "No need to copy and paste data to make it look the way you want. Organize endless variations in an instant."
            },
            {
                icon: <Circle />,
                text: "Modify your standard templates whenever and where ever you are"
            }
        ],
        arrow: true
    }
]

const Features = () => {
    return (
        <section className="bg-brand-blue-light text-white pt-28">
            <div className="costum-container">
                <h1 className="text-5xl font-bold mb-24 text-center">
                    Features at a Glance    
                </h1> 

                <div className="w-full mx-auto xl:px-24 flex flex-col gap-y-44 mb-24">
                    {features.map((item: IBlockItem) => (
                        <Block key={item.img} theme={false} blockprops={item} />
                    ))}
                </div>   

                <div className="flex justify-center">
                    <Btn />
                </div>

                <div className="translate-y-1/2 bg-features rounded-3xl py-32 px-24 relative">
                    <div className="flex items-center">
                        <h1 className="text-5xl font-bold text-brand-blue-back " >
                            Available 24/7, <br /> Everywhere
                        </h1>
                        <Image className="absolute bottom-0 right-0" src={require('../../public/Assets/bino.png')} alt="andkajsdj" />
                    </div>
                </div>
            </div>            
        </section>
    )
}

export default Features
