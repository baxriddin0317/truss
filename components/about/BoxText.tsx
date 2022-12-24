import { NextPage } from 'next'
import React, { FC } from 'react'

interface IBoxText {
    boxprops: {
        title: string,
        texts: Array<string>
    }
}

const BoxText: FC<IBoxText> = ({boxprops}) => {
    const {title, texts} = boxprops
  return (
    <div>
        <h2 className='font-bold text-h2 text-brand-blue-black mb-5'>
        {title}
        </h2> 
        {texts.map(text => (
            <p key={text} className='mb-6 text-brand-blue-black text-lg'>
                {text}
            </p>
        ))}               
    </div>
  )
}

export default BoxText