import React from 'react'
import Image from 'next/image'

const Skill_Cards = ({ icon, name }) => {
    return (
        <div className="flex flex-col cursor-pointer hover:scale-105 duration-150 sm:flex-row items-center gap-4 p-4 border border-gray-300 rounded-2xl bg-white shadow-md w-full max-w-[300px] mx-auto">
            <div className="w-12 h-12 sm:w-14 sm:h-14 relative flex-shrink-0">
                <Image
                    src={icon}
                    alt={`${name} logo`}
                    fill
                    className="object-contain"
                />
            </div>
            <div className="text-base sm:text-lg  text-slate-800 font-serif">
                {name}
            </div>
        </div>
    )
}

export default Skill_Cards
