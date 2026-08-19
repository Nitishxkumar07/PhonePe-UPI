import AboutHero from '@/components/Aboutcompo/AboutHero'
import Awards from '@/components/Aboutcompo/Awards'
import Members from '@/components/Aboutcompo/Members'
import Values from '@/components/Aboutcompo/Values'
import React from 'react'

const Aboutpage = () => {
  return (
    <div>
      <AboutHero />
      <Values />
      <Awards />
      <Members />
    </div>
  )
}

export default Aboutpage
