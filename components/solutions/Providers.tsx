import React from 'react';
import Block from '../Block';
import Btn from '../buttons/Btn';
import Image from 'next/image';
import Bell from '../icons/Bell';
import Puppy from '../icons/Puppy';
import Calendar from '../icons/calendar';
import CardList from '../icons/BsCardList';
import { IBlockItem } from '../product/Fingertips';

const providers: Array<IBlockItem> = [
    {
        img: 17,
        title: "Brokers",
        text: "Go to market faster and win the deal",
        description: [
            {
                icon: <Bell />,
                text: "Produce BOVs faster than competition"
            },
            {
                icon: <Puppy />,
                text: "Automate the creation of sales package financials and rent rolls"
            },
            {
                icon: <Calendar />,
                text: "Run sensitivities on unleveraged and leveraged cash flows quickly"
            },
            {
                icon: <CardList />,
                text: "Share MLAs with clients to update models more quickly than ever"
            },
            {
                icon: <CardList />,
                text: "Create your own deal database and dashboard for enhanced client insights"
            }
        ],
        arrow: false
    },
]

const Providers = () => {
    return (
        <section className="bg-brand-blue-light text-white pt-28">
            <div className="costum-container">
                <h1 className="text-5xl font-bold mb-24 text-center">
                Third Party Providers   
                </h1> 

                <div className="w-full mx-auto xl:px-24 flex flex-col gap-y-44 mb-24">
                    {providers.map((item: IBlockItem) => (
                        <Block theme={false} blockprops={item} />
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

export default Providers
