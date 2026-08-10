"use client"
import React, { useState } from 'react'
import Marquee from 'react-fast-marquee';

const Values = () => {
  const data = [
    {
      id: 1,
      title: "Web Development",
      group: "core",
      description: "Learn modern web development using HTML, CSS, JavaScript and React.",
      image: "https://www.phonepe.com/static/img01-9b3724e13586d3da03041fe8def5a228.png"
    },
    {
      id: 2,
      title: "React Development",
      group: "core",
      description: "Build interactive and reusable user interfaces with React.",
      image: "https://www.phonepe.com/static/img05-d7e4969b4b1eddf4425927944e84b7d5.png"
    },
    {
      id: 3,
      title: "Next.js",
      group: "company",
      description: "Create fast and scalable full-stack web applications with Next.js.",
      image: "https://www.phonepe.com/static/img02-2f4c05a7dd504ed427dab0060a5a5999.png"
    },
    {
      id: 4,
      title: "UI/UX Design",
      group: "company",
      description: "Design clean, modern and user-friendly interfaces.",
      image: "https://www.phonepe.com/static/img09-2491c872d0587d979e1a203db28d761c.png"
    },
    {
      id: 5,
      title: "UI/UX Design",
      group: "team",
      description: "Design clean, modern and user-friendly interfaces.",
      image: "https://www.phonepe.com/static/img10-87b44ccdeee8d7a3f9f03bdf31d29aac.png"
    },
    {
      id: 6,
      title: "UI/UX Design",
      group: "team",
      description: "Design clean, modern and user-friendly interfaces.",
      image: "https://www.phonepe.com/static/img12-bde73e18e9b20273715cb5c128623a9a.png"
    },
    {
      id: 7,
      title: "UI/UX Design",
      group: "individual",
      description: "Design clean, modern and user-friendly interfaces.",
      image: "https://www.phonepe.com/static/img14-34541c9689c6430e8b1df30559fad1f0.png"
    },
    {
      id: 8,
      title: "UI/UX Design",
      group: "individual",
      description: "Design clean, modern and user-friendly interfaces.",
      image: "https://www.phonepe.com/static/img03-b284b91b34af48549428e8608c237075.png"
    },
    {
      id: 9,
      title: "UI/UX Design",
      group: "busness",
      description: "Design clean, modern and user-friendly interfaces.",
      image: "https://www.phonepe.com/static/img13-099e27975ea94f829fe6fa83146a6add.png"
    },
    {
      id: 10,
      title: "UI/UX Design",
      group: "business",
      description: "Design clean, modern and user-friendly interfaces.",
      image: "https://www.phonepe.com/static/img11-f9808052bb882c2048df8d9ccc956499.png"
    },
  ];
  const [open, setOpen] = useState(0)
  return (
    <div className='bg-violet-950 items-center text-white p-8'>
      <div className='gap-5 flex flex-col'>
        <h1 className='text-2xl font-bold text-center '>Our Values</h1>
        <p className='text-xl text-center max-w-4xl mx-auto mb-8'>Our values shape the way we work, make decisions, and engage with stakeholders, colleagues, and users</p>
      </div>
      <div >      
      <Marquee gradient={false}
        speed={80}
        autoFill={true}
        pauseOnHover={true}>
          <div className='flex flex-row justify-center gap-10'>
        {data.map((item, index) => (
          <div key={index} className='group relative h-50 overflow-hidden rounded-xl"'>
            <img src={item.image} alt="" className='h-48 w-36 object-cover transition-transform duration-500 group-hover:scale-110' />
            <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <p className='absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white opacity-0 transition-all duration-500 group-hover:opacity-100'>{item.description}</p>
          </div>
        ))}
        </div>
      </Marquee>
      </div>
    </div>
  )
}

export default Values
