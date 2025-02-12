import React from 'react'
import HeroTwo from './components/HeroTwo'
import TycanInfo from './components/TycanInfo'
import Stats from './components/Stats'
import MultipleScroll from './components/MultipleScroll'
import ThreeModel from './components/ThreeModel'
import Audio from './components/Audio'
import Footer from './components/Footer'

function LayoutTwo() {
  return (
    <>
     <HeroTwo /> 
     <TycanInfo />
     <Stats />
     <MultipleScroll />
     {/* <ThreeModel /> */}
     <Audio />
     <Footer />
    </>
  )
}

export default LayoutTwo
