import Image from 'next/image'
import React from 'react'

const  TeamArr = [
    {
        id: 1,
        name: "Todd Zeldin",
        text: "Vice President - Sales & Founder"
    },
    {
        id: 2,
        name: "Steve Tellis",
        text: "Chief Technology Officer & Founder"
    },
    {
        id: 3,
        name: "Lior Weinstein",
        text: "Founder and Advisor"
    },
    {
        id: 4,
        name: "Alex Crozier ",
        text: "Chief Operating Officer"
    },
]

interface ITeam {
    id: number;
    name: string;
    text: string;
}

const Team = () => {
  return (
    <section className='bg-brand-blue-back pt-24 pb-32'>
        <div className="costum-container">
            <h1 className='text-white text-5xl font-bold text-center capitalize mb-20'>
                the truss team
            </h1>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16'>
                {
                    TeamArr.map((team: ITeam) => (
                        <div className='flex flex-col items-center text-white text-center px-8' key={team.id}>
                            <div className='w-40 h-40 rounded-full overflow-hidden mb-7'>
                                <Image className='' src={require("../../public/Assets/Avatar.png")} alt={team.name} />
                            </div>
                            <h3 className='font-bold text-2xl mb-3'>
                                {team.name}
                            </h3>
                            <p className='text-sm'>
                            {team.text}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Team