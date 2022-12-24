import { NextPage } from 'next'
import React from 'react'
import BoxText from './BoxText'
import TabPhoto from './TabPhoto'

const boxData = {
  title: "Manually managing data is costly.",
  texts: [
    "Every manual analysis you’ve been doing for the last 15 years can be done in an instant with the right software. ",
    "You’ll finally be able to answer questions in minutes rather than hours, and rely on the data to make the best decisions.",
    "Save your analysts’ time and boost efficiency with accurate, organized data arranged the way you want."
  ]
}

const Manually: NextPage = () => {
  return (
    <section className='pt-40 mb-24'>
        <div className="costum-container">
            <div className='flex flex-col-reverse lg:flex-row gap-32'>
                <TabPhoto />
                <BoxText boxprops={boxData} />
            </div>
        </div>
    </section>
  )
}

export default Manually