import React from 'react'
import {IoLogoUsd} from "react-icons/io5"
 
const content = [
  {
    id: 1,
    icon: <IoLogoUsd />,
    name: "Leasing"
  },
  {
    id: 2,
    icon: <IoLogoUsd />,
    name: "Asset Management"
  },
  {
    id: 3,
    icon: <IoLogoUsd />,
    name: "Transactions"
  },
  {
    id: 4,
    icon: <IoLogoUsd />,
    name: "Accounting / Fund Management"
  },
  {
    id: 5,
    icon: <IoLogoUsd />,
    name: "Property Management"
  },
  {
    id: 6,
    icon: <IoLogoUsd />,
    name: "Brokers"
  },
  {
    id: 7,
    icon: <IoLogoUsd />,
    name: "Lenders"
  },
  {
    id: 8,
    icon: <IoLogoUsd />,
    name: "Appraisers"
  },
]

const Contents = () => {
  return (
    <div className='grid grid-cols-4 gap-3 mt-28'>
      {content.map((item) => (
        <div key={item.id} className="bg-white rounded-2xl h-28 pt-2 pl-6 pr-16 flex flex-col items-start">
          <div className='text-brand-blue-primary text-xl'>
          {item.icon}
          </div>
          <h2 className='text-lg font-bold mt-2 text-left'>
            {item.name}
          </h2>
        </div>
      ))}          
    </div>
  )
}

export default Contents