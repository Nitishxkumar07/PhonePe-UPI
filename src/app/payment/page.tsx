"use client"
import PaymentHero from '@/components/Paymentcompo/PaymentHero'
import { ScrollPage } from '@/components/Paymentcompo/Scrollpage'
import React from 'react'

function page() {
  return (
    <div>
      <PaymentHero />
      <ScrollPage/>
    </div>
  )
}

export default page
