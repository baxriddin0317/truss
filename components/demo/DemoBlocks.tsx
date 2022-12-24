import { IBlockItem } from '../product/Fingertips'
import Block from '../Block';
import Btn from '../buttons/Btn';

const features: Array<IBlockItem> = [
    {
        img: 10,
        title: "See your data change instantly",
        description: [
            {
                text: "Tired of waiting on the analyses to be ready... and wondering if it’s accurate?"
            },
            {
                text: "See what its like to get what you need, how you want, and when you want."
            }
        ],
        arrow: true
    },
    {
        img: 11,
        title: "Schedule a Demos",
        description: [
            {
                text: "Truss automates real estate data workflows so you can make fast, accurate decisions."
            }
        ],
        arrow: false,
        jsxElement: <Btn />
    }
]

const DemoBlocks = () => {
    return (
        <section className="py-28 mb-64">
            <div className="costum-container">
                <div className="w-full mx-auto xl:px-24 flex flex-col gap-y-44 mb-24">
                    {features.map((item: IBlockItem) => (
                        <Block theme={true} blockprops={item} />
                    ))}
                </div> 
            </div>
        </section>
    )
}

export default DemoBlocks
