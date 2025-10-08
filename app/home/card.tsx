import Image from "next/image";
import cube from '../../public/assests/images/cardImages/cube.png'
import computer from '../../public/assests/images/cardImages/computer.png'
import technical from '../../public/assests/images/cardImages/technical.png'


import internet from '../../public/assests/images/cardImages/internet.png'
import link from '../../public/assests/images/cardImages/link.png'
import management from '../../public/assests/images/cardImages/management.png'
import outSourcing from '../../public/assests/images/cardImages/outSourcing.png'
const cards = [
    {
        id: 1,
        image: cube,
        title: 'Architect your Solution',
        description: "Our team in on your operational, technological, and strategic challenges through an in-depth understanding of yourbusiness. We design a strategic roadmap to guide your result-oriented goals."
    },
    {
        id: 2,
        image: computer,
        title: 'Engineer your Solution',
        description: 'We promptly put together your nearshore engineering dream team to fulfill your specific requirements. We createthe most elegant solution for your difficulties by combining our deep tech expertise, Top 1% Tech Talent, andindustry-specific experience.'
    }
    ,
    {
        id: 3,
        image: technical,
        title: 'ReEngineer your Business Process',
        description: 'Bolster by our team, your digital transformation swiftly gains speed and evolves into a digital acceleration. This process places the foundation for a more efficient and strong business that can meet demands at scale.'
    },
];

export function Card() {
  return (
    <div className="grid grid-cols-3 gap-16 my-12">
        {cards.map((card) => (
            <div key={card.id} className="flex  gap-6 p-4">
                <Image src={card.image} alt={card.title} className="w-24 h-24 bg-bgYellow p-2 rounded-lg" />
                <div className="flex flex-col gap-2">
                <h3 className="text-font_28 font-semiBold text-textColor">{card.title}</h3>
                <p className="text-font_18 font-regular text-textColor">{card.description}</p>
                </div>
               
            </div>
        ))}
    </div>
  )
}




export const cards2 = [
    {
        id: 1,
        image: link,
        title: 'Dedicated Teams',
        description:"Find your next team member"
    },
    {
        id: 2,
        image: management,
        title: 'Staff Augmentation',
        description: 'Build a distributed development team'
    },
    
    {
        id: 3,
        image: outSourcing,
        title: 'Software Outsourcing',
        description: 'End-to-End Software Development Outsourcing Solutions'
    },
    {
        id: 4,
        image: internet,
        title: 'Remote Office',
        description: 'Open your own remote development center and grow your business'
    }
    
    
];


export function Card2() {
    return (
        <div className="grid grid-cols-4  my-16">
            {cards2.map((card) => (
                <div key={card.id} className="flex  gap-6 p-4">
                    <div className="flex flex-col gap-2">
                    <Image src={card.image} alt={card.title} className="w-24 h-24 bg-bgYellow p-2 rounded-lg" />

                        <h3 className="text-font_28 font-semiBold text-textColor">{card.title}</h3>
                        <p className="text-font_18 font-regular text-textColor">{card.description}</p>  
                    </div>
                </div>
            ))}
        </div>
    )
}

