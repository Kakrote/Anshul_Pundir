"use client"
import React from 'react'
import { about } from '@/data/information'
import Skill_Cards from './Skill_Cards'

const About_Section = () => {
    return (
        <section
            id='about'
            className='min-h-screen flex flex-col items-center py-20 px-4 bg-gradient-to-b from-[#d4fbf8] to-[#0CFFEB]'>
            
            {/* Heading */}
            <h1 className='text-4xl md:text-6xl text-center text-slate-800 font-serif font-semibold italic mb-6'>
                About
            </h1>

            {/* Paragraph Section */}
            <div className='max-w-4xl text-center space-y-4 text-[#6a6a6ab3]'>
                {about.para.map((text, index) => (
                    <p key={index} className='text-lg md:text-2xl italic leading-tight'>
                        {text}
                    </p>
                ))}
            </div>

            <h2 className='text-3xl md:text-4xl text-center text-slate-800 font-serif  italic  mt-4'>Technologies I know</h2>

            {/* Skills Grid */}
            <div className='mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl px-2'>
                {about.skills.map((skill, index) => (
                    <Skill_Cards
                        key={index}
                        icon={skill.icon}
                        name={skill.name}
                    />
                ))}
            </div>
        </section>
    )
}

export default About_Section
