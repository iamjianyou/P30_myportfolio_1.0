import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
    className="flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 h-screen justify-evenly mx-auto items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        //   viewport={{ once: true }}
        transition={{ duration: 1.5 }}
    >
    
       
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            About
        </h3>
        <motion.img
            initial={{
                x: -200,
                opacity: 0
            }} 
            whileInView={{ opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 1.2}}
            src="asset/jianyou.jpeg"            
            className="-mb-20 md:mb-0 flex-shrink-0 h-56 w-56 rounded-full object-cover
            md:rounded-lg md:w-64 md:h-95 xl:w-[500x] xl:h-[600px]"
        />

        <div className="sapce-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold"> Here is a {" "}
            <span className="underline decoration-[#F7AB0A]/50">
                little
            </span> my background 
            </h4>
            <p className="text-sm">
            Jianyou jobber som frontend-utvikler i Sopra Steria. Han er utdannet med en bachelorgrad i dataingeniør fra Høgskolen på Vestlandet. Gjennom de siste årene har Jianyou opparbeidet seg verdifull erfaring som frontend-utvikler hos Fjord Line, Altibox og Sixty AS.   

Jianyou har bred teknologisk erfaring gjennom sine prosjekter, med spisskompetanse på frontend-utvikling med Javascript, Typescript, React (m.Redux, hooks og Native), HTML, CSS, styled-components, Next.js og GraphQL. Han gjennomfører nå kurs og sertifiseringsløp innen Amazon Web Services (AWS) og React Native.

Han er godt kjent med smidig utviklingsmetodikk (scrum), samt ulike prosjektstyringsverktøy. Han er også vant til å jobbe i tverrfaglige team i samarbeid med andre. Samtidig kan han ta initiativ og jobbe selvstendig. 

Jianyou er strukturert, målrettet og ikke redd for utfordringer. Han er glad i å utforske nye teknologier. Jianyou er også en utadvendt og blid person, og oppfattes som engasjert og lærevillig. 
            </p>
        </div>
    </motion.div>
  )
}