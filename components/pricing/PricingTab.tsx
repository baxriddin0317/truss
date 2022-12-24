import { useState } from 'react'
import { Tab } from '@headlessui/react'
import TabItem, { ITabItem } from './TabItem';
import { AiFillCheckCircle } from "react-icons/ai"

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(' ')
}

// interface IPosts {
//     id: number;
//     title: string;
//     date: string;
//     commentCount: number;
//     shareCount: number;
// }

// interface ICategories {

// }

export default function PricingTab() {
  let [categories] = useState({
    'For Owners or Operators': [
      {
        title: 'Enterprise Pricing',
        link: 'Contact Us',
        description: [
          {
            icon: <AiFillCheckCircle className='text-brand-blue-primary text-3xl' />,
            text: "Have on-demand access to every relevant property metric you need"
          },
          {
              icon: <AiFillCheckCircle className='text-brand-blue-primary text-3xl' />,
              text: "Review 10x more deals in the same amount of time"
          },
          {
              icon: <AiFillCheckCircle className='text-brand-blue-primary text-3xl' />,
              text: "See your reports, your way in a fraction of the time"
          },
          {
              icon: <AiFillCheckCircle className='text-brand-blue-primary text-3xl' />,
              text: "1 analyst supporting a $1 billion real estate portfolio"
          }
        ],
        theme: true
      },
      {
        title: 'Per User / Team',
        price: 25,
        description: [
          {
            icon: <AiFillCheckCircle className='text-brand-blue-primary text-3xl' />,
            text: "Be faster and more accurate than your competition through automation"
          },
          {
              icon: <AiFillCheckCircle className='text-brand-blue-primary text-3xl' />,
              text: "Review 10x more deals in the same amount of time"
          },
          {
              icon: <AiFillCheckCircle className='text-brand-blue-primary text-3xl' />,
              text: "See your reports, your way in a fraction of the time"
          },
          {
              icon: <AiFillCheckCircle className='text-brand-blue-primary text-3xl' />,
              text: "Help your clients optimize their sales or acquisition model, and optimize their financing options"
          }
        ],
        theme: false
      }
    ],
    'For Brokers or Lenders or Appraisers': [
      {
        title: 'Enterprise Pricing',
        link: 'Contact Us',
        description: [
          {
            icon: <AiFillCheckCircle />,
            text: "Have on-demand access to every relevant property metric you need"
          },
          {
              icon: <AiFillCheckCircle />,
              text: "Review 10x more deals in the same amount of time"
          },
          {
              icon: <AiFillCheckCircle />,
              text: "See your reports, your way in a fraction of the time"
          },
          {
              icon: <AiFillCheckCircle />,
              text: "1 analyst supporting a $1 billion real estate portfolio"
          }
        ],
        theme: true
      }
    ]
  })

  return (
    <section className='py-16 mb-72'>
        <div className="costum-container">
            <div className="w-full max-w-5xl mx-auto px-2 md:px-12">
                <Tab.Group>
                    <Tab.List className="flex space-x-1 rounded-xl bg-brand-gray-light p-1 mb-16">
                        {Object.keys(categories).map((category: string) => (
                            <Tab
                                key={category}
                                className={({ selected }) =>
                                classNames(
                                'w-full rounded-lg py-8 text-xl font-bold leading-5 text-brand-blue-light',
                                selected
                                    ? 'bg-white shadow text-brand-blue-primary'
                                    : ' hover:bg-white/[0.12] hover:text-brand-blue-black'
                                )
                            }
                            >
                            {category}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels className="mt-2">
                        {Object.values(categories).map((posts, idx) => (
                            <Tab.Panel
                              key={idx}
                              className={classNames(
                                  'grid grid-cols-2 gap-5'
                                )}
                            >
                                {posts.map((post, idx) => (
                                  // <div></div>
                                  <TabItem key={idx} tabItem={post} />
                                ))}
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>
    </section>
  )
}