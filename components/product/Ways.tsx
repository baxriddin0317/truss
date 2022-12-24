import Link from 'next/link'
import React from 'react'
import { IBlockItem } from './Fingertips'
import Circle from './Circle';
import Block from '../Block';

const features: Array<IBlockItem> = [
    {
        img: 6,
        title: "Instantly create 20-year cash flow models for single properties and portfolios",
        description: [
            {
                icon: <Circle />,
                text: "Import data from MRI, Yardi, Argus, and other data sources"
            },
            {
                icon: <Circle />,
                text: "Fully editable in Excel or create .pdf printable reports"
            },
            {
                icon: <Circle />,
                text: "Adjust multiple variables to sensitivity analysis"
            }
        ],
        arrow: false
    },
    {
        img: 7,
        title: "Quickly quantify tenant exposure across multiple variables",
        description: [
            {
                icon: <Circle />,
                text: "See single or thousands of tenants simultaneously"
            },
            {
                icon: <Circle />,
                text: "Prepare single or multi-property analytics with fully dynamic spreadsheets"
            },
            {
                icon: <Circle />,
                text: "Custom tenant type, industry, and suite"
            },
            {
                icon: <Circle />,
                text: "Prepare single or multi-property analytics with fully dynamic spreadsheets"
            }
        ],
        arrow: false
    },
    {
        img: 8,
        title: "Merge and validate data from multiple systems for a single view",
        description: [
            {
                icon: <Circle />,
                text: "Import data from multiple sources"
            },
            {
                icon: <Circle />,
                text: "Prepare single or multi-property analytics with fully dynamic spreadsheets"
            },
            {
                icon: <Circle />,
                text: "Custom tenant type, industry, and suite"
            },
            {
                icon: <Circle />,
                text: "Prepare single or multi-property analytics with fully dynamic spreadsheets"
            }
        ],
        arrow: false
    },
    {
        img: 9,
        title: "Create and Automate Business Plans, BOVs, Sales Packages, Fund and Property Packages",
        description: [
            {
                icon: <Circle />,
                text: "Stop copying and pasting data from your source databases"
            },
            {
                icon: <Circle />,
                text: "Create scheduled delivery of reports to user-defined group"
            },
            {
                icon: <Circle />,
                text: "Output can be in any format including pdf, excel, powerpoint, and even refresh of your website"
            },
            {
                icon: <Circle />,
                text: "No need to hire internal programmers. "
            },
            {
                icon: <Circle />,
                text: "Have your templates the way you want them 24/7"
            }
        ],
        arrow: false
    }
]

const Ways = () => {
    return (
        <section className="py-72 bg-brand-sky-light">
            <div className="costum-container">
                <div className="mb-32 text-center">
                    <h1 className="text-5xl font-bold mb-4 ">
                    More Ways Truss Makes Data Simple
                    </h1>

                    <Link href="/" legacyBehavior>
                        <a className="text-brand-blue-primary text-xl font-bold underline">
                        See use cases for Truss below.
                        </a>
                    </Link>
                </div>

                <div className="w-full mx-auto xl:px-24 flex flex-col gap-y-32 mb-24">
                    {features.map((item: IBlockItem) => (
                        <Block key={item.img} theme={true} blockprops={item} />
                    ))}
                </div> 
            </div>
        </section>
    )
}

export default Ways
