import Image from 'next/image'
import React, { ReactNode } from 'react'

export interface Idescription {
    icon?: ReactNode;
    text: string;
}

interface Iblock {
    blockprops: {
        img: number;
        title: string;
        text?: string;
        desTitle?: string;
        description: Array<Idescription>;
        arrow: boolean;
        jsxElement?: ReactNode 
        bg?: boolean
    },
    theme?: boolean,
}

const Block = ({blockprops, theme}: Iblock) => {
    return (
        <div className={`flex ${blockprops.arrow ? 'flex-row' : 'flex-row-reverse'} ${blockprops.bg ? 'bg-brand-sky-light' : 'bg-transparent'} gap-x-32 justify-between items-center py-10`}>
            <div className="">
                <Image className="object-cover w-full" src={require(`../public/Assets/block/img-${blockprops.img}.png`)} alt={blockprops.title} />
            </div>
            <div className="flex-1">
                <div className="mb-7">
                    <h2 className={`text-h2 ${theme ? 'text-brand-blue-back' : 'text-white'} font-bold mb-3`} >
                        {blockprops.title}
                    </h2>
                    <p className="font-bold text-description">
                        {blockprops.text}
                    </p>
                </div>
                <div className="flex flex-col mb-12">
                    <h2 className='text-lg text-brand-blue-light mb-5'>
                        {blockprops.desTitle}
                    </h2>
                    {
                        blockprops.description.map((item: Idescription) => (
                            <div key={item.text} className="flex items-center gap-5 mb-3">
                                {item.icon}
                                <p className="w-[408px]">
                                    {item.text}
                                </p>
                            </div>
                        ))
                    }
                </div>
                {blockprops.jsxElement}
            </div>
        </div>
    )
}

export default Block
