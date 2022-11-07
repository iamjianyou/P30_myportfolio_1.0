import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y sanp-mandatory overflow-scroll z-0">
      <Head>
        <title>Create Next App</title>
       
       
      </Head>

      <Header />
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      
      {/* Header */}
      {/* Hero */}
      {/* About */}
      {/* Experience */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact me */}

    </div>
  )
}
export default Home;