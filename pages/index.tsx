import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'

const Home: NextPage = () => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 bg-[rgb(36,36,36)] text-white z-0">
      <Head>
        <title>Create Next App</title>
      </Head>

      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      
      {/* About */}
      <section id="about" className="snap-center"> 
        <About />
      </section>

      <section id="experience" className="sanp-center">
         <WorkExperience />
      </section>
      
      {/* Experience */}
      <section id='skills' className="snap-start">
        < Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects  />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe  />
      </section>
     
      {/* Projects */}
      {/* Contact me */}

    </div>
  )
}
export default Home;