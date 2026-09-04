"use client"
import React from 'react'
import Link from 'next/link'
import { Company } from './Company'
import { Oursolutions } from './Oursolutions'
import QRScanner from './QRScanner'

export const Navbar = () => {
  return (
      <div className='left-0 fixed shadow-md z-50 w-full flex space-x-16 flex-row px-3 py-1 items-center text-sm bg-white'>
        <Link href={"/"}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjv6Rqcu5sSEzpKHpGulYZ0NxXhEGQd2kMWCgmVpHGNw&s=10" alt=""  width={200}/>
        </Link>
        <div className='flex flex-row space-x-16 '>
            <Company />
            <Oursolutions />
            <p>INVESTORS RELATIOSHIP</p>
            <p>CONTACT US</p>
            <p>TRUST & SAFETY</p>
            {/* <QRScanner/> */}
        </div>
      </div>
  )
}


