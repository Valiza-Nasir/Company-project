import Image from "next/image";
import hire from '../../public/assests/images/cardImages/hire.png'
import request from '../../public/assests/images/cardImages/request.png'
import interview from '../../public/assests/images/cardImages/interview.png'
const cards = [
    {
        id: 1,
        image: request,
        title: '01. Request',
        description: 'Tell us more about your requirements and technical needs'
    },
    {
        id: 2,
        image: interview,
        title: '02. Interview',
        description: 'You interview candidates. Average 2 interviews to hire.'
    }
    ,
    {
        id: 3,
        image: hire,
        title: '03. Hire',
        description: 'You choose who to hire, and we handle all the paperwork.'
    },
];

function Card() {
  return (
    <div className="grid grid-cols-3 gap-16">
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