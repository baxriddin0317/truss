import Image from "next/image"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode } from "swiper";


const Slider = () => {
    return (
        <section className="py-20 mb-96" >
            <div className="costum-container">
                <h1 className='text-brand-blue-black text-5xl font-bold text-center capitalize mb-16'>
                    Truss is Trusted By:
                </h1>
                <div className="">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 500
                        }}
                        modules={[Autoplay, FreeMode]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Image src={require('../../public/Assets/ACG_logo.png')} alt="sa" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={require('../../public/Assets/Centercal.png')} alt="sa" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={require('../../public/Assets/rcg.png')} alt="sa" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={require('../../public/Assets/crown_logo.png')} alt="sa" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={require('../../public/Assets/rcg.png')} alt="sa" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Slider
