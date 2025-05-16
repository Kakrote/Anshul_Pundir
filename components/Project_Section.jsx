import React from 'react';
import { projects } from '@/data/information';
import Image from 'next/image';

const ProjectSection = () => {
  return (
    <section id="projects" className="py-16 px-4 sm:px-8 bg-gradient-to-b from-[#d4fbf8] to-[#0CFFEB]">
      <h2 className="text-4xl md:text-6xl text-center text-slate-800 font-serif font-semibold italic mb-6">Projects</h2>
      <div className="space-y-20 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row ${
              index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
            } items-center gap-10`}
          >
            {/* Image */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:w-1/2 cursor-pointer">
              <Image
                src={project.image}
                alt={project.title}
              fill
                className="object-contain  rounded-xl  "
              />
            </div>

            {/* Text Content */}
            <div className="lg:w-1/2 w-full text-center md:text-left">
              <h3 className="text-2xl md:text-4xl  italic font-semibold text-slate-800 font-serif text-center mb-4">{project.title}</h3>
              <p className="text-gray-400 text-center text-lg md:text-2xl font-light italic">{project.discription}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
