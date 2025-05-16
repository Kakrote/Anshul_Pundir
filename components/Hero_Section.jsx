"use client";
import React from "react";
import { hero_section,contact } from "@/data/information";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { Download } from "lucide-react";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const Hero_Section = () => {
  return (
    <section
      className={` w-full min-h-screen bg-gradient-to-b from-[#d4fbf8] from-30% to-[#0CFFEB] to-75% flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-20 font-serif `}
    >
      {/* Left Side - Image */}
      <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
        <Image
          src={hero_section.image}
          width={500}
          height={500}
          alt="/images/altr.png"
          className="rounded-2xl object-contain h-[80%] max-h-[500px] "
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
        {/* Heading */}
        <div className="space-y-2">
          {hero_section.heading.map((text, index) => (
            <h1
              key={index}
              className="text-gray-800 font-extrabold   italic leading-tight text-3xl md:text-5xl lg:text-6xl"
            >
              {text}
            </h1>
          ))}
        </div>

        {/* Subheading */}
        <div className="space-y-1">
          {hero_section.subheading.map((text, index) => (
            <p
              key={index}
              className="text-gray-500 text-base md:text-xl font-light italic"
            >
              {text}
            </p>
          ))}
        </div>

        {/* KPI Section */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          {hero_section.kpis.map(([number, label], index) => (
            <div
              key={index}
              className="bg-[#4B4E8B] shadow-md rounded-lg px-6 py-4 text-center"
            >
              <div className="text-white text-2xl font-bold">{number}</div>
              <div className="text-gray-200 text-sm font-medium">{label}</div>
            </div>
          ))}
          <button className="rounded-lg px-6 py-4 text-center shadow-md bg-[#4B4E8B]"><a href={contact.resume} className="flex gap-2">My Resume <span><Download /></span></a></button>
        </div>
      </div>
    </section>
  );
};

export default Hero_Section;
