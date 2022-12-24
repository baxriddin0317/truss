import Link from 'next/link'
import React from 'react'
import Block from '../Block'
import Circle from '../product/Circle'
import { IBlockItem } from '../product/Fingertips'
import { BsArrowRight } from "react-icons/bs"
import Bell from '../icons/Bell'
import Puppy from '../icons/Puppy'
import Calendar from '../icons/calendar'
import CardList from '../icons/BsCardList'

const owners = [
    {
        img: 12,
        title: "Asset Management",
        text: "Keep your most popular reports available 24/7",
        desTitle: "Example Automations:",
        description: [
            {
                icon: <Bell />,
                text: "Monitor asset performance | Get analytics to easily visualize and understand financial variances from actual to budget / Argus"
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
        jsxElement: <Link href="/" legacyBehavior>
            <a className='flex gap-1 items-center underline text-sm text-brand-blue-primary'>
            Read More
            <BsArrowRight className='text-xl' />
            </a>
        </Link>
    },
    {
        img: 13,
        title: "Transactions",
        text: "Quick and easy modeling and deal tracking",
        desTitle: "Example Automations:",
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
        arrow: true,
        jsxElement: <Link href="/" legacyBehavior>
            <a className='flex gap-1 items-center underline text-sm text-brand-blue-primary'>
            Read More
            <BsArrowRight className='text-xl' />
            </a>
        </Link>,
        // bg: true,
    },
    {
        img: 14,
        title: "Accounting and Fund Management",
        text: "Stop copying and pasting data between different systems.",
        desTitle: "Example Automations:",
        description: [
            {
                icon: <Bell />,
                text: "Monitor asset performance | Get analytics to easily visualize and understand financial variances from actual to budget / Argus"
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
        jsxElement: <Link href="/" legacyBehavior>
            <a className='flex gap-1 items-center underline text-sm text-brand-blue-primary'>
            Read More
            <BsArrowRight className='text-xl' />
            </a>
        </Link>
    },
    {
        img: 15,
        title: "Property Management",
        text: "Real time budget to actual variances and outstanding accounts receivable",
        desTitle: "Example Automations:",
        description: [
            {
                icon: <Bell />,
                text: "Monitor asset performance | Get analytics to easily visualize and understand revenue variances from actual to budget"
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
        arrow: true,
        jsxElement: <Link href="/" legacyBehavior>
            <a className='flex gap-1 items-center underline text-sm text-brand-blue-primary'>
            Read More
            <BsArrowRight className='text-xl' />
            </a>
        </Link>
    },
    {
        img: 16,
        title: "Leasing",
        text: "Always know exactly how many properties, how many SQFT, and how many spaces you have to lease. ",
        desTitle: "Example Automations:",
        description: [
            {
                icon: <Bell />,
                text: "Leasing agent historical transactions | Send a notification to the company when a new lease is executed"
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
        jsxElement: <Link href="/" legacyBehavior>
            <a className='flex gap-1 items-center underline text-sm text-brand-blue-primary'>
            Read More
            <BsArrowRight className='text-xl' />
            </a>
        </Link>
    },
]

const Owners = () => {
  return (
    <section className='py-20 mb-72'>
        <div className="costum-container">
            <h2 className='text-5xl font-bold mb-12 text-center capitalize'>
                owners
            </h2>

            <div className="w-full mx-auto xl:px-24 flex flex-col gap-y-44 mb-24">
                {owners.map((item: IBlockItem) => (
                    <Block key={item.img} blockprops={item} theme={true} />
                ))}
            </div> 
        </div>
    </section>
  )
}

export default Owners