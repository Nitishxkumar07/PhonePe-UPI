"use client"
import Link from 'next/link'
import React, { useState } from 'react'

export function Company() {
    const [open, setOpen] = useState(false)

    return (
        <div className='relative group'>
            <button onClick={() => setOpen(!open)}
            >
                <div className='text-sm'>COMPANY</div>
            </button>
            <div className='absolute -left-2 top-full mt-1 w-28 space-y-2 text-base bg-white shadow-lg border border-transparent opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50'>
                <Link href={"/aboutus"} className="block text-black px-4 py-1 hover:bg-purple-200">ABOUT US</Link>
                <Link href={"/career"} className="block text-black px-4 py-1 hover:bg-purple-200">CAREER</Link>
                <Link href={"/press"} className="block text-black px-4 py-1 hover:bg-purple-200">PRESS</Link>
                <Link href={"/blogs"} className="block text-black px-4 py-1 hover:bg-purple-200">BLOGS</Link>
            </div>
        </div>
    )
}

