import React from 'react'
import Block from '../Block'
import Bell from '../icons/Bell'
import CardList from '../icons/BsCardList'
import Calendar from '../icons/calendar'
import Puppy from '../icons/Puppy'
import { IBlockItem } from '../product/Fingertips'
import Owners from './Owners'
import Providers from './Providers'

const solution = [
  {
      img: 18,
      title: "Lenders",
      text: "Imagine knowing exactly what is going on with every asset in your portfolio",
      description: [
          {
              icon: <Puppy />,
              text: "Template property close checklist | easily understand what is left to do this month"
          },
          {
              icon: <Calendar />,
              text: "Tenant billings | set up reminders to bill, tracking of property accountants billing patterns"
          },
          {
              icon: <CardList />,
              text: "Complete view into who you owe | outstanding payables, upcoming budgeted capital"
          },
          {
              icon: <CardList />,
              text: "Fund roll up models for monthly and quarterly reporting as well as analyzing historical returns"
          }
      ],
      arrow: true
  },
  {
      img: 19,
      title: "Appraisers",
      text: "What if your appraisal reports could take a fraction of the time to prepare?",
      description: [
          {
              icon: <Bell />,
              text: "Easy-to-use Acquisition Model to get a quick snapshot into deal metrics, terms, and returns. Customize to your structure your way."
          },
          {
              icon: <Puppy />,
              text: "Template property close checklist | easily understand what is left to do this month"
          },
          {
              icon: <Calendar />,
              text: "Tenant billings | set up reminders to bill, tracking of property accountants billing patterns"
          },
          {
              icon: <CardList />,
              text: "Complete view into who you owe | outstanding payables, upcoming budgeted capital"
          },
          {
              icon: <CardList />,
              text: "Fund roll up models for monthly and quarterly reporting as well as analyzing historical returns"
          }
      ],
      arrow: false,
  }
]

const Solution = () => {
  return (
    <>
        <Owners />
        <Providers />
        <section className='py-72'>
          <div className="costum-container">
            <div className="w-full mx-auto xl:px-24 flex flex-col gap-y-44 mb-24">
                {solution.map((item: IBlockItem) => (
                    <Block blockprops={item} theme={true} />
                ))}
            </div> 
          </div>
        </section>
    </>
  )
}

export default Solution