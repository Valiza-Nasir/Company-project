import Image from "next/image";
import internet from '../../public/assests/images/cardImages/internet.png'
import link from '../../public/assests/images/cardImages/link.png'
import management from '../../public/assests/images/cardImages/management.png'
import outSourcing from '../../public/assests/images/cardImages/outSourcing.png'

const cards = [
    {
        id: 1,
        image: link,
        title: 'Dedicated Teams',
        description: 'Building an extended team with Courtney is just like opening your own remote development center, but without the hassle.'
    },
    {
        id: 2,
        image: management,
        title: 'Staff Augmentation',
        description: 'IT Staff Augmentation is a service designed to add extra talent to your team on an on-demand basis. This allows businesses to immediately find the right fit for hard-to-fill or temporary positions, which boosts the scalability and efficiency of project development.'
    }
    ,
    {
        id: 3,
        image: outSourcing,
        title: 'Software Outsourcing',
        description: 'Today, organizations all over the world deal with software outsourcing companies to have access to experienced software engineers with a variety of tech expertise ranging from user experience design to blockchain consulting.'
    },

    {
        id: 4,
        image: internet,
        title: 'Remote Office',
        description: 'Courtney is a trustworthy partner that can help you open your own remote development center and grow your business from Sri Lanka and United Kingdom.'
    }
];

function Card() {
  return (
    <div className="grid grid-cols-2 gap-16">
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

export default Card