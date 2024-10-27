import imgAbout from "./../assets/about.jpg"
import { motion } from "framer-motion"

function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className=" my-20 text-center text-4xl">About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:0.5}}
        className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
              <img className="rounded-2xl size-[400px]" src={imgAbout} alt="" />
            </div>
        </motion.div>
        <motion.div
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:100}}
        transition={{duration:0.5}}
         className="w-full lg:w-1/2">
            <div className="flex  justify-center lg:justify-start">
              <div className="  flex flex-col justify-center">
                <p className="my-2 max-w-xl">
                  I am a passionate and versatile Full-Stack Developer with a strong background in creating dynamic high-Effectiveness web Uses. my expertness spans both front-end and back-end evolution allowing me to form full organic  Answers that are both practical and esthetically appealing
                </p>

                <p className="my-2 max-w-xl ">
                  with facility inch reactjs hypertext markup language css tailwind css and frameworks care laravel one ma good inch crafting amenable and Operator-friendly Connections. On the back-end my Encounter with Node.js Express CMS platforms like Sanity and Strapi and various Informationbase systems allows me to Construct powerful APIs and scalable Host-side Answers.
                </p>
                <p className="my-2 max-w-xl ">
                  I thrive in collaborative environments constantly learning and adopting new technologies to solve Complicated problems. whether it is construction amp smooth reciprocal ui or architecting associate in nursing prompt back-end unit one ma sacred to delivering iron and reparable Answers that top node expectations
                </p>
                <p className="my-2 max-w-xl "> 
                  when i’m not coding you  get me exploring the current Web technologies or conducive to open-source projects
                </p>

              </div>
             
              
            </div>
        </motion.div>

      </div>
      
    </div>
  )
}

export default About

