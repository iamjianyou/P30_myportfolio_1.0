// import { motion } from 'framer-motion'
// import React from 'react'

// type Props = {}

// function ExperienceCard({}: Props) {
//   return (
//     // <div className="</div>
//     <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
//     w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200">
//         <motion.img
//         initial={{
//             y: -100,
//             opacity: 0,
//         }}
//         transition={{ duration: 1.2 }}
//         whileInView={{opacity: 1, y: 0}}
//         className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
//         src="asset/jianyou.jpeg"
//         alt=""
//         />
//         <div className="px-0 md:px-10 ">
//             <h4 className="text-4xl font-light"> SopraSteria</h4>
//             <p className="font-bold text-2xl mt-1"> Jianyou Dai</p>
//             <div className="flex space-x-2 my-2">
//                 <img  className="h-10 w-10 rounded-full" src="asset/jianyou.jpeg" alt="" />
//                 <img  className="h-10 w-10 rounded-full" src="asset/jianyou.jpeg" alt="" />
//                 <img  className="h-10 w-10 rounded-full" src="asset/jianyou.jpeg" alt="" />
                
//                 tech used
//                 tech used
//             </div>
//             <p className="uppercase  py-5 text-gray-300"> started work at sop</p>
//             <ul className="list-disc space-y-4 ml-5 text-lg">
//                 <li>SUMMARY POINTSUMMARY POINTSUMMARY POINTSUMMARY POINTSUMMARY POINTSUMMARY POINTSUMMARY POINTSUMMARY POINT </li>
//                 <li>SUMMARY POINTSUMMARY POINTSUMMARY POINTSUMMARY POINTSUMMARY POINTSUMMARY POINTSUMMARY POINTSUMMARY POINT </li>
//                 <li>SUMMARY POINTSUMMARY POINTSUMMARY POINTSUMMARY POINTSUMMARY POINTSUMMARY POINTSUMMARY POINTSUMMARY POINT </li>
//                 <li>SUMMARY POINTSUMMARY POINTSUMMARY POINTSUMMARY POINTSUMMARY POINTSUMMARY POINTSUMMARY POINTSUMMARY POINT </li>
//                 <li>SUMMARY POINTSUMMARY POINTSUMMARY POINTSUMMARY POINTSUMMARY POINTSUMMARY POINTSUMMARY POINTSUMMARY POINT </li>
//                 <li>SUMMARY POINTSUMMARY POINTSUMMARY POINTSUMMARY POINTSUMMARY POINTSUMMARY POINTSUMMARY POINTSUMMARY POINT </li>
//             </ul>
//         </div>


        
//     </article>
//   )
// }

// export default ExperienceCard



import React from "react";
import { motion } from "framer-motion";
// import { Experience } from "../typings";
// import { urlFor } from "../sanity";

type Props = {
//   experience: Experience;
};

function ExperienceCard({  }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        // src={urlFor(experience.companyImage).url()}

        className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />

      <div className="px-0 md:px-10 ">
        <h4 className="text-4xl font-light"> front end develop </h4>
        <p className="font-bold text-2xl mt-1">soprasteria</p>
        <div className="flex space-x-2 my-2">
          {/* {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className="h-10 w-10 rounded-full"
              src={urlFor(technology.image).url()}
            />
          ))} */}
        </div>

        <p className="uppercase py-5 text-gray-300">
          {/* {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()} */}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          {/* {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))} */}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
