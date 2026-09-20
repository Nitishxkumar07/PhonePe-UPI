"use client"
import React from 'react'
import Link from 'next/link'
import { motion, type Variants } from "framer-motion"

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

// Motion container variants for staggered children entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export const Card = () => {
  return (
    <section className="w-full px-4 py-12 md:py-20 lg:px-18">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {solutions.map((item) => (
          <motion.div key={item.id} variants={cardVariants} className="h-full">
            <Link
              href={item.link}
              className="group flex h-full flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div>
                {/* Image Container with Consistent Aspect Ratio */}
                <div className="relative mb-5 aspect-video w-full overflow-hidden rounded-xl bg-slate-50 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <h2 className="text-2xl font-bold tracking-tight text-blue-950 transition-colors group-hover:text-blue-600">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Action Link Footer */}
              <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-900 group-hover:text-blue-600">
                  Explore
                </span>
                <span className="text-xl text-blue-900 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-blue-600">
                  →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}