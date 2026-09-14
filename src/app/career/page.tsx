"use client"

import CareerHero from "@/components/CareerCompo/CareerHero"
import InnovationCategories from "@/components/CareerCompo/Innovation"
import Scrollcards from "@/components/CareerCompo/Scrollcards"
import Testimonials from "@/components/CareerCompo/Testo"

const CareerPage = () => {
  return (
    <div>
      <CareerHero/>
      <Scrollcards/>
      <InnovationCategories />
      <Testimonials/>
    </div>
  )
}

export default CareerPage
