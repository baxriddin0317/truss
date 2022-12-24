import React, { ReactNode } from 'react'
import Block, { Idescription } from '../Block'
import Circle from './Circle';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, FreeMode } from "swiper";

export interface IBlockItem {
    img: number;
    title: string;
    text?: string;
    description: Array<Idescription>;
    arrow: boolean;
    jsxElement?: ReactNode 
}

const blockprops = [
    {
        img: 1,
        title: "Cash Flow Comparison ",
        description: [
            {
                icon: <Circle />,
                text: "Communicate what changed for your entire portfolio"
            },
            {
                icon: <Circle />,
                text: "Summarize changes made between models"
            },
            {
                icon: <Circle />,
                text: "Identify the largest impacts to Cash Flow"
            }
        ],
        arrow: true
    }
]



const Fingertips = () => {
    return (
        <section className="py-24" >
            <div className="costum-container">
                <h2 className="text-h2 mb-5 text-center font-bold text-brand-blue-back w-[989px] mx-auto">
                Imagine making decisions in minutes, not weeks, with hundreds of automations at your fingertips.
                </h2>
                <p className="text-xl text-brand-blue-primary text-center mb-24">
                Customize your in-house processes or choose from our preset automations.
                </p>

                {/* {blockprops.map((item: Iblock) => (
                    <Block blockprops={item} />
                ))} */}
                <div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 2000
                        }}
                        modules={[Autoplay, FreeMode, Pagination]}
                        className="mySwiper"
                    >
                        {blockprops.map((item: IBlockItem) => (
                            <SwiperSlide>
                                <Block theme={true} blockprops={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Fingertips
