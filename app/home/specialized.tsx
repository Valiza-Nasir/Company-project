import React from 'react'
import Image from 'next/image'
import system from '../../public/assests/images/specialized/system.png'
import angulars from '../../public/assests/images/specialized/angulars.png'
import chip from '../../public/assests/images/specialized/chip.png'
import locksystem from '../../public/assests/images/specialized/locksystem.png'
import mechanism from '../../public/assests/images/specialized/mechanism.png'
import setting from '../../public/assests/images/specialized/setting.png'
import phone from '../../public/assests/images/specialized/phone.png'
import rounded from '../../public/assests/images/specialized/rounded.png'

import uiux from '../../public/assests/images/specialized/uiux.png'
import php from '../../public/assests/images/specialized/phps.png'
import machines from '../../public/assests/images/specialized/machines.png'
import serum from '../../public/assests/images/specialized/serum.png'

import quality from '../../public/assests/images/specialized/quality.png'
import teamLeader from '../../public/assests/images/specialized/teamLeader.png'
import analysis from '../../public/assests/images/specialized/analysis.png'
import wordpress from '../../public/assests/images/specialized/wordpress.png'

import idea from '../../public/assests/images/specialized/idea.png'
import goLogo from '../../public/assests/images/specialized/goLogo.png'
import padlock from '../../public/assests/images/specialized/padLock.png'
import database from '../../public/assests/images/specialized/database.png'





const cards = [
    {
        id: 1,
        image: system,
        title: 'Frontend Engineers',
    }
    ,
    {
        id: 2,
        image: angulars,
        title: 'Angular Developers',
    }
    ,
    {
        id: 3,
        image: chip,
        title: 'AI and ML Engineers  Deep Lerning/Machine Vision/NLP',
    }
    ,
    {
        id: 4,
        image: locksystem,
        title: 'Application Security Engineers',
    },
    {
        id: 5,
        image: setting,
        title: 'Fullstack Engineers',
    }   ,
    {
        id: 6,
        image: rounded,
        title: 'DevOps + DevSecOps Engineers',
    }   
    ,
    {
        id: 7,
        image: mechanism,
        title: 'Data Scientist / Data Engineers',
    }
    ,
    {
        id: 8,
        image: phone,
        title: 'IOS and Android Developers',
    },
    
    {
        id: 9,
        image: uiux,
        title: 'UI/UX Engineers',
    }
    ,
    {
        id: 10,
        image: php,
        title: 'PHP Developers',
    }
    ,
    {
        id: 11,
        image: machines,
        title: 'Project Managers',
    }
    ,
    {
        id: 12,
        image: serum,
        title: 'Solution Architects',
    }
    ,
    {
        id: 13,
        image: quality,
        title: 'QA Engineers',
    }
    ,
    {
        id: 14,
        image: wordpress,
        title: 'Wordpress CMS Developers',
    }
    ,
    {
        id: 15,
        image: analysis,
        title: 'Business Analyst',
    }
    ,
    {
        id: 16,
        image: teamLeader,
        title: 'Tech Leads / Team Leads',
    },
    ,
    {
        id: 17,
        image: idea,
        title: 'Product Designer',
    }
    ,
    {
        id: 18,
        image: phone,
        title: 'Mobile App Developers',
    }
    ,
    {
        id: 19,
        image: padlock,
        title: 'Information Scurity  Engineers',
    },
    ,
    {
        id: 20,
        image: goLogo,
        title: 'Golang Dev',
    },
    {
        id: 21,
        image: database,
        title: 'Database admin',
    }
];

function SpecializedStaff() {
  return (
    <div className="bg-bgLightGray p-16 my-16">
        <div className='w-[1600px] mx-auto'>
    <p className='text-font_22 font-semiBold text-textColor'>Specialized</p>
    <div className='w-[40%] mb-8'>
    <h1 className='text-font_46 font-semiBold text-textColor'>Specialized Staff We Provide</h1>

    </div>
    <div className="grid grid-cols-4 gap-8">
        {cards.map((card) => (
            <div key={card.id} className="flex  gap-6 p-2 bg-white items-center rounded-lg shadow-md border-l-8 border-l-bgYellow">
                <Image src={card.image} alt={card.title} className="w-16 h-16  p-2 rounded-lg " />
                <h3>{card.title}</h3>
            </div>
        ))}
    </div>
</div>


    </div>
  )
}

export default SpecializedStaff                 