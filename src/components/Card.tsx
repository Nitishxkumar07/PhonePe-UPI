"use client"
import React from 'react'
import Link from 'next/link';
import { motion } from "framer-motion";
export const solutions = [
  {
    id: 1,
    title: "Payments",
    description: "Manage all your payments seamlessly",
    image: "https://www.phonepe.com/static/wealthIconPaymments-02b7e2e830614a7be41fc60d876f492b.svg",
    link: "/payments",
  },
  {
    id: 2,
    title: "Investments",
    description: "Build, manage & grow your wealth",
    image: "https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW52ZXN0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
    link: "/investments",
  },
  {
    id: 3,
    title: "Insurance",
    description: "Protect, plan & secure your future",
    image: "https://www.phonepe.com/static/wealthIconInsurance-21e1314143fd71543c9e041833e81dc3.svg",
    link: "/insurance",
  },
  {
    id: 4,
    title: "Lending",
    description: "Access quick, transparent & secure loans",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh-M9D8zqy_d5tB8Ia_H_em3KiBgEQtWHrdwjUJBSIuw&s=10",
    link: "/lending",
  },
];
export const Card = () => {
  return (
    <div className='flex flex-row flex-wrap items-center justify-center mt-40 space-x-5'>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="rounded-3xl bg-white flex flex-row p-8 shadow-lg"
      >
        {solutions.map((item, index) => (
          <Link key={index} href={item.link} className='flex flex-col z-30 shadow-xl shadow-blue-300 p-4 space-y-2 border border-transparent h-fit justify-center items-center hover:scale-105 hover:-translate-y-2 hover:shadow-2xl duration-300'>
            <img src={item.image} alt="" className='h-32 w-44 rounded-2xl' />
            <h1 className='text-4xl font-semibold text-blue-950'>{item.title}</h1>
            <p className='text-sm font-semibold'>{item.description}</p>
            <p className='text-6xl text-blue-900 mt-2 text-right'>→</p>
          </Link>
        ))}
      </motion.div>
    </div>
  )
}


