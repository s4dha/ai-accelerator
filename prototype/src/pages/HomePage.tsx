import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import VideoIntro from '../components/VideoIntro'
import Features from '../components/Features'
import Timeline from '../components/Timeline'
import Prizes from '../components/Prizes'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <VideoIntro />
      <Features />
      <Timeline />
      <Prizes />
      <Footer />
    </>
  )
}

export default HomePage
