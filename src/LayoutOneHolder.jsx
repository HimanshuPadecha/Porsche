import React from 'react'
import Hero from './components/Hero'
import SmallHeroTwo from './components/SmallHeroTwo'
import ModelSection from './components/ModelSection'
import DiscoverSection from './components/DiscoverSection'
import Footer from './components/Footer'

const LayoutOneHolder = () => {
  return (
    <>
    <Hero />
    <SmallHeroTwo sectionValue={true}/>
    <ModelSection />
    <DiscoverSection />
    <Footer />
    </>
  )
}

export default LayoutOneHolder
